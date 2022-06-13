import React, { useEffect, useState } from "react";
import { cities, type_list } from "../../utils/EventUtils";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../../firebase';
import { Services } from "../../api/Services";
import { useNavigate } from "react-router-dom";


const services = new Services();

export default function AddEvent() {
  const [type, setType] = useState("default");
  const [subType, setsubType] = useState([]);
  const [file, setFile] = useState();
  const [percent, setPercent] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const cityList = cities;
  const typeList = type_list;

  const handleType = (e) => {
    const type = typeList.find(
      (type) => type.name === e.target.value
    );
    setType(type.name);
    setsubType(type.substypes);
  };

  const formik = useFormik({
    initialValues: {
      type: '',
      subType: '',
      eventName: '',
      eventDescription: '',
      capacity: '',
      image: '',
      unitPrice: 0.0,
      hasSeatPlan: false,
      place: '',
      date: ''
    },
    validationSchema: Yup.object({
      type: Yup.string()
        .required('Event type is required'),
      subType: Yup.string()
        .required('Event sub type is required'),
      eventName: Yup.string()
        .required('Event name is required'),
      eventDescription: Yup.string()
        .required('Event description is required'),
      capacity: Yup.string()
        .required('Capacity information is required'),
      unitPrice: Yup.number()
        .required('Unit price is required'),
      place: Yup.string()
        .required('Place information is required'),
      date: Yup.string()
        .required('Date information is required'),
    }),
    onSubmit: async values => {
      await services.addEvent({
        type: values.type,
        subType: values.subType,
        eventName: values.eventName,
        eventDescription: values.eventDescription,
        capacity: values.capacity,
        unitPrice: values.unitPrice,
        place: values.place,
        date: values.date,
        hasSeatPlan: values.hasSeatPlan
      })
        .then(async res => {
          if (res.ok) {
            const imageUrl = await saveImage(res.entity.data.id);
            if (imageUrl) {
              await services.addImageToEvent({ eventId: res.entity.data.id, imageUrl: imageUrl })
                .then(res => {
                  if (res.entity.success) {
                    navigate('/event/' + res.entity.data.id);
                  }
                })
                .catch(err => {
                  console.log(err);
                  setErrorMessage(err.entity?.data);
                });
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  });

  useEffect(() => {
    if (formik.errors) {
      console.log(formik.errors);
    }
  }, [formik.errors])

  const saveImage = async (eventId) => {
    let downloadUrl = "";

    if (file) {
      const suffix = file.value.split('.')[1];

      const storageRef = ref(storage, `event\\${eventId}.${suffix}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      await uploadTask.then(async res => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          downloadUrl = url;
        });
      })
        .catch(err => console.log(err))

    }

    return downloadUrl;
  }

  return (
    <div className="bg-admin-grey min-height-65">
      <div className="container d-flex justify-content-center pt-5">
        <form className="min-width-780" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="event-type">Event Type</label>
                <select value={type} onChange={(e) => {
                  handleType(e);
                  formik.handleChange(e);
                }}
                  className="form-control text-uppercase" name="type" id="event-type" >
                  <option value="default" disabled>Select..</option>
                  {typeList.map((t, key) => {
                    return (
                      <option key={key} value={t.name}>{t.name}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="event-subtype">Event Subtype</label>
                <select className="form-control text-uppercase"
                  name="event-subtype" id="event-subtype" {...formik.getFieldProps('subType')} >
                  {subType.map((sub, key) => {
                    return (
                      <option key={key} value={sub}>{sub}</option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="event-name">Event Name</label>
                <input type="text" className="form-control" id="event-name"
                  name="event-name" {...formik.getFieldProps('eventName')} />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Event Image</label>
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="event-image"
                      name="event-image" onChange={(e) => setFile(e.target.value)} />
                    <label className="custom-file-label" htmlFor="event-image">Choose file</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"
                  className="form-control description" rows="5" {...formik.getFieldProps('eventDescription')}></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="event-datetime">Date - Time</label>
                <input type="datetime-local" className="form-control"
                  id="event-datetime" name="event-datetime" {...formik.getFieldProps('date')} />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="event-place">Place</label>
                <select className="form-control" id="event-place"
                  name="event-place" {...formik.getFieldProps('place')} required>
                  <option value="default">Select..</option>
                  {cityList.map((city, key) => {
                    return (
                      <option key={key} value={city}>{city}</option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="event-capacity">Capacity</label>
                <input type="number" className="form-control" id="event-capacity"
                  name="event-capacity" min="1" {...formik.getFieldProps('capacity')} />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="event-price">Price</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                  </div>
                  <input type="number" className="form-control" id="event-price"
                    name="event-price" min="1.00" step="0.10"  {...formik.getFieldProps('unitPrice')} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-group admin-event-check">
                <input type="checkbox" name="seatplan"  {...formik.getFieldProps('hasSeatPlan')} />
                <label htmlFor="seatplan">Seat plan</label>
              </div>
            </div>
          </div>
          <div className="row dflex justify-content-end">
            <div className="col-2 mb-5">
              <button type="submit" className="btn bg-orange pl-4 pr-4 mb-5 ">ADD</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}