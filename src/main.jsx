import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Route from './Components/Route/Route.jsx'
import Home from './Components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './Components/jobs/jobDetails.jsx'
import AppliedJobList from './Components/Applied-job-list/AppliedJobList.jsx'
import Error from './Components/Errorpage/Error.jsx'
const router = createBrowserRouter([
{
  path: '/',
  element: <Route></Route>,
  errorElement: <Error></Error>,
  children: [
    {
      path: '/',
    element:<Home></Home>
    },
    {
      path: '/job-details/:id',
      loader:()=> fetch('../jobs.json'),
      element: <JobDetails></JobDetails>
    },
    {
      path: 'applied-job',
      loader: ()=>fetch('../jobs.json'),
      element: <AppliedJobList></AppliedJobList>
    }
]
}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
