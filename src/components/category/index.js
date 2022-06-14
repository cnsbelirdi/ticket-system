import { type_list } from "../../utils/EventUtils";
import { Link } from 'react-router-dom';
import moment from "moment";
import { useEffect, useState } from "react";
import { Services } from "../../api/Services";

const CategoryScreen = ({ typeName }) => {

  const services = new Services();


  const type = type_list.find(
    (type) => type.name === typeName
  )
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getMusicEvents() {
      await services.getEventsType(type.name)
        .then(res => {
          console.log(res);
          if (res.entity.success) {
            setEvents(res.entity?.data);
          }
        })
        .catch(err => console.log(err))
    }

    getMusicEvents();
  }, []);


  async function changeSubType(e) {
    console.log(e.target.value);
    await services.getEventsSubType(e.target.value)
      .then(res => {
        if (res.ok) {
          setEvents(res.entity.data);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }



  return (
    <>
      <div className="bg-admin-grey min-height-65">
        <div className="container">
          <h1>{type.name}</h1>
          {/* <div className="row">
            <div className="col-sm bg-white">
              CAROUSEL BURAYA EKLENECEK
            </div>
          </div> */}
          <div className="row pt-2">
            <div className="col-sm-3">
              <div className="nav flex-column nav-pills" aria-orientation="vertical">
                <h4>SUBTYPES</h4>
                {type.substypes.map((s, key) => {
                  return (
                    <button onClick={changeSubType} className="nav-link text-secondary bg-white mb-1" value={s} > {s}</button>
                  )
                })}
              </div>
            </div>
            <div className="col-sm">
              <div className="row">
                {
                  events.map(e => {
                    return (
                      <div className="col-sm-4 mt-2">
                        <div className="bg-white p-2">
                          <Link to={`/event/${e.id}`} >
                            <img src={e.image ?? "/images/no-image.jpg"} className="w-100" height={150} alt={"music_" + e.id} />
                            <h5 className="text-dark">{e.eventName}</h5>
                          </Link>
                          <p>
                            <i className="far fa-calendar mr-1"></i>
                            {moment(e.date).format("HH:MM DD/MM/YYYY")}

                            {/* {e.date.slice(0, e.date.indexOf("'")).replaceAll('-', '/')} */}

                            {/* {e.date.slice(e.date.lastIndexOf("'") + 1, e.date.length - 3).replaceAll('-', ':')} */}
                          </p>
                          <p>
                            <i className="far fa-clock mr-1"></i>
                            {e.dayOfDate}
                            <i className="fas fa-map-marker-alt mr-1 ml-3"></i>
                            {e.place}
                          </p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryScreen;