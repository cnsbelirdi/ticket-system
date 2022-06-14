import { Route, Routes } from "react-router-dom";
import AddEvent from "../pages/admin/AddEvent";
import Admin from "../pages/admin/Admin";
import ShowEvent from "../pages/admin/ShowEvent";
import Home from "../pages/Home";
import MusicScreen from "../pages/music";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Event from "../pages/Event";
import CinemaScreen from "../pages/cinema";
import TheaterScreen from "../pages/theater";
import AccountScreen from "../pages/account";
import NotificationScreen from "../pages/notification";

const Router = props => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='music' element={<MusicScreen />} />
                <Route path='cinema' element={<CinemaScreen />} />
                <Route path='theater' element={<TheaterScreen />} />
                <Route path='account' element={<AccountScreen />} />
                <Route path='notification' element={<NotificationScreen />} />
                <Route path='admin' >
                    <Route path='add-event' element={<AddEvent />} />
                    <Route path='show-event' element={<ShowEvent />} />
                    <Route index element={<Admin />} />
                </Route>
                <Route path="event/:id" element={<Event />} />
            </Routes>
        </>
    );
}
export default Router;