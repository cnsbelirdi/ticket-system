import { type_list } from "../../utils/EventUtils";
import mockEvents from "../admin/mockData";
import { Link } from 'react-router-dom';

const type = type_list.find(
    (type) => type.name === "Music"
)

const MusicScreen = props => {
    return (
        <>
        <div className="bg-admin-grey min-height-65">
            <div className="container">
                <h1>MUSIC</h1>
                <div className="row">
                    <div className="col-sm bg-white">
                        CAROUSEL BURAYA EKLENECEK
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-sm-3">
                        <div className="nav flex-column nav-pills" aria-orientation="vertical">
                            <h4>SUBTYPES</h4>
                            {type.substypes.map((s, key)=>{
                                return(
                                    <a href="#" className="nav-link text-secondary bg-white mb-1">{s}</a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            {mockEvents.data.map(e =>{
                                return(
                                    <div className="col-sm-4 mt-2">
                                        <div className="bg-white p-2">
                                            <Link to={`/event/${e.id}`} >
                                                <img src={e.image} className="w-100" height={150}/>
                                                <h5 className="text-dark">{e.eventName}</h5>
                                            </Link>
                                            <p>
                                                <i className="far fa-calendar mr-1"></i>
                                                {e.date.slice(0,e.date.indexOf("'")).replaceAll('-','/')}
                                                <i className="far fa-clock mr-1 ml-2"></i>
                                                {e.date.slice(e.date.lastIndexOf("'")+1,e.date.length-3).replaceAll('-',':')}
                                            </p>
                                            <p>
                                                <i className="fas fa-map-marker-alt mr-1"></i>
                                                {e.place}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default MusicScreen;