import { useEffect, useState } from "react";
import { Services } from "../../api/Services";
import moment from "moment";


const services = new Services();

const NotificationScreen = props => {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    await services.getNotificationByUserId()
      .then(res => {
        console.log(res);
        if (res.ok) {
          setNotifications(res.entity);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="bg-admin-grey min-height-65">
      <div className="container">

        <div className="dashboard">
          <h1 className="pt-4">Notifications</h1>
          <div className="row">
            {/* <div className="col-sm bg-white m-2">
              <div className="lead mt-2">Total Tickets:</div>
              <div className="text-right display-4">{totalTickets}</div>
            </div>
            <div className="col-sm bg-white m-2">
              <div className="lead mt-2">Active Tickets:</div>
              <div className="text-right display-4">{activeTickets}</div>
            </div> */}

          </div>
          <div className="row mt-3 justify-content-center pb-3" style={{ minHeight: 550 }}>
            <div className="col-sm-12 pl-2">
              {
                notifications.map(e => {
                  return <NotificationCard {...e} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NotificationCard = props => {
  const { title, message, date, userId } = props;

  return <>
    <div className="card pb-2 mb-2 p-3">
      <div className="card-title">{title}</div>
      <div className="row card-body">
        <div className="col-2">
          <i className="fas fa-bell text-orange" style={{ fontSize: "35px" }}></i>
        </div>

        <div className="col-7">
          {message}
        </div>

        <div className="col-3">
          {moment(date).format("DD/MM/YYYY HH:SS")}
        </div>
      </div>
    </div>
  </>
}

export default NotificationScreen;