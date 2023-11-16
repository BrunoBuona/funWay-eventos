import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// Layout (Header/Footer)
import Main from "./layouts/Main";
import Home from './pages/Home/Home'
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./components/SignIn/Form/FormSI";
import userActions from "./redux/actions/userActions";
import AdminLayout from "./layouts/Admin/AdminLayout/AdminLayout";
import AdminHome from "./pages/AdminHome/AdminHome";
import { ProtectedRoute } from "./utils/ProtectedRoute/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import NewEvent from "./pages/NewEvent/NewEvent";
import AllEvents from "./pages/AllEvents/AllEvents";
import MyEventsCreated from "./pages/MyEventsCreated/MyEventsCreated";

export default function App() {
  const dispatch = useDispatch()
  const { reLogin } = userActions
  const {online} = useSelector(state => state.user)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    isLoading()
  }, []);

let isLoading = async() => {
  const token = JSON.parse(localStorage.getItem("token"))
  if (token) {
      let res = await dispatch(reLogin(token.token)).unwrap()
      }
      setLoading(false)
}

  return (
      
    !loading && 
    <Routes>    
        <Route element={<ProtectedRoute isAllowed={!!online} reDirect={'/'}/> }>
            <Route path="/menu" element={<AdminLayout />}>
              <Route index element={<Navigate to="inicio" replace />} />
              <Route path="inicio" element={<AdminHome />}/>
              <Route path="new-event" element={<NewEvent />}/>
              <Route path="all-events" element={<AllEvents />}/>
              <Route path="my-events" element={<MyEventsCreated />}/>
            </Route>  
        </Route>
        <Route path="/" element={<Main />} >
          <Route path="*" element={<NotFound/>} />
          <Route index element={<Home/>}/>
          <Route path="about-us" element={<AboutUs/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route element={<ProtectedRoute isAllowed={!online} reDirect={'/'}/> }>
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Route>
      </Routes>
  );
}