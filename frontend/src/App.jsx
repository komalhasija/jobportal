
import './App.css'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectRoute from './components/ProtectedRoute'

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  // admin ke liye
  {
    path:'/admin/companies',
    element:<ProtectRoute><Companies/></ProtectRoute>
  },
  // admin ke liye
  {
    path:'/admin/companies/create',
    element:<ProtectRoute><CompanyCreate/></ProtectRoute>
  },
  {
    path:'/admin/companies/:id',
    element:<ProtectRoute><CompanySetup/></ProtectRoute>
  },
  {
    path:'/admin/jobs',
    element:<ProtectRoute><AdminJobs/></ProtectRoute>
  },
  {
    path:'/admin/jobs/create',
    element:<ProtectRoute><PostJob/></ProtectRoute>
  },
  {
    path:'/admin/jobs/:id/applicants',
    element:<ProtectRoute><Applicants/></ProtectRoute>
  },

])
function App() {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
