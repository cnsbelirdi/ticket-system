import { Route, Routes } from "react-router-dom";
import AddEvent from "../pages/admin/AddEvent";
import Admin from "../pages/admin/Admin";
import ShowEvent from "../pages/admin/ShowEvent";
import Home from "../pages/Home";
import MusicScreen from "../pages/Music";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Router = props => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='music' element={<MusicScreen />} />
                <Route path='admin' >
                    <Route path='add-event' element={<AddEvent />} />
                    <Route path='show-event' element={<ShowEvent />} />
                    <Route index element={<Admin />} />
                </Route>
            </Routes>
        </>
    );
}
export default Router;