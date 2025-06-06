import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  ForgetPassword,
  Home,
  Login,
  Register,
  SplashScreen,
  MyBucket,
  Notification,
  Profile,
  Settings,
  Upload,
  BucketDetails,
} from "./pages";
import Layout from "./layout/Layout";
  import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { use, useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";

export default function App() {

  const { isAuthenticated, user , fetchUser } = useAuthStore();
 
  // const initialFetch = async ()=>{
      
  //   const res = await fetchUser();

  //   console.log("res ====> " , res);
    
  //   if(res.success){
  //     toast.success(res.message);
  //     window.location.href = "/dashboard";
  //   } else {
  //     toast.error(res.message);
  //     // window.location.href = "/auth/login";
  //   }
  
  // }

  // useEffect(()=>{
  //   initialFetch();
  // } , [ ]);




  return (
    <Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/buckets" element={<MyBucket />} />
          <Route path="/buckets/:id" element={<BucketDetails />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/upload" element={<Upload />} />
        </Route>

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}
