import { Route,  createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import PageNotFound from "../PageNotFound";
import Login from "../user/Login";
import SignUp from "../user/SignUp";
import Dashboard from "../user/dashboard/Dashboard";
import Aboutus from "../user/Aboutus";
import AuthLayout from "../layout/AuthLayout";
import Contact from "../user/Contact";
import Details from "../user/Details";
import BookAConsult from "../user/BookAConsult";
import Portfolio from "../user/dashboard/Portfolio";
import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../admin/AdminDashboard";
import UserList from "../admin/Userlist";
import Profile from "../admin/Profile";
import SubmitNow from "../user/dashboard/SubmitNow";
import EventPackages from "../user/EventPackages";
import Form from "../user/Form";

export const MainRouter = createBrowserRouter (
    createRoutesFromElements(
        <Route>
        <Route path="/" element={<UserLayout/>}>
        <Route path="/aboutus" element={<Aboutus/>}/> 
        <Route path="/contactus" element={<Contact/>}/> 
        <Route index element={<Dashboard/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/bookaconsult" element={<BookAConsult/>}/> 
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/SubmitNow" element={<SubmitNow/>} />
        <Route path="/buypackage" element={<EventPackages/>} />
        <Route path="/form" element={<Form/>} />s
        </Route>
<Route path="/admin" element={<AdminLayout/>}>
<Route path="dashboard" element={<AdminDashboard/>} />
<Route path="userlist" element={<UserList/>} />
<Route path="profile" element={<Profile/>} />
</Route>
        <Route path="/auth" element={<AuthLayout/>}>
        <Route path="login" element={<Login/>}/> 
        <Route path="signup" element={<SignUp/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>} />

        </Route>
    )
)