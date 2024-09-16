import { useSelector } from "react-redux";
import MainContainer from "./pages/chatPage/ChatOverview";
import Login from "./pages/auth/Auth.jsx";
import ChatArea from "./pages/chatPage/chatArea";
import Welcome from "./pages/chatPage/Welcome";
import Groups from "./pages/chatPage/Groups";
import CreateGroup from "./pages/chatPage/createGroup";
import OnlineMentor from "./pages/chatPage/Users.jsx";
import CalanderOverview from "./pages/calender/calenderOverview.jsx"
import CalenderWelcome from "./pages/calender/welcome.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider} from "react-router-dom";
import CalenderEvent from "./pages/calender/clubEvent.jsx";
import Home from "./pages/HomePage/homeOverview.jsx";
import Profile from "./pages/profilePage/profile.jsx";
import PdfOverview from "./pages/ResorcesPage/ResourceOverview.jsx";
import PdfWelcome from "./pages/ResorcesPage/welcome.jsx";
import PdfForm from "./pages/ResorcesPage/Form.jsx";
import CalenderForm from "./pages/calender/form.jsx";
import ErrorPage from "./Components/error-page/error.jsx";
import MentorOverview from "./pages/mentor/ChatOverview.jsx";
import Adminoverview from "./pages/admin/adminOverview.jsx";
// import MentorWelcome from "./pages/mentor/Welcome.jsx";
import { Navigate } from "react-router-dom";
import PdfSearch from "./pages/ResorcesPage/Search.jsx";
import PdfViewer from "./pages/ResorcesPage/pdfViewer.jsx";
import PdfFavourite from "./pages/ResorcesPage/favioritePage.jsx";
import RoadmapOverview from "./pages/Roadmap/RoadmapOverview.jsx";
import ChangePassword from "./pages/auth/ChangePassword.jsx";
import AuthOverview from "./pages/auth/authOverview.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import AddEvent from "./pages/admin/AddEvent.jsx";
import AllEvent from "./pages/admin/AllEvent.jsx";
import AddMentor from "./pages/admin/AddMentor.jsx";
import AllUsers from "./pages/admin/AllUser.jsx";
import ViewNotes from "./pages/admin/ViewNotes.jsx";
import OnlineUser from "./pages/mentor/Users.jsx";
import pdfView from "./pages/admin/pdfView.jsx"

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
export function PrivateRoute(props) {
  let { component: Component } = props;
  const {token} = useSelector((state) => state.auth);
  const isLoggedIn = token != null && token != undefined;
  
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}

function App() {
  const LightTheme = useSelector((state) => state.themeKey);

    const router= createBrowserRouter([{
        path: "/auth",
        element: <AuthOverview/>,
        errorElement: <ErrorPage/>,
        children:[
          {
            path: "",
            element: <Login/>,
          
        },
        {
          path: "changePassword",
          element:  <PrivateRoute  component={ChangePassword}/>,
        
      },
      {
        path: "resetPassword/:token",
        element:  <ResetPassword/>,
      
    },
        ]
        },
        {
          path: "/",
          element: <Home/>,
          errorElement: <ErrorPage/>,
          },
          {
            path: "/profile",
            element:   <PrivateRoute  component={Profile}/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: "/chat",
            element: <PrivateRoute  component={MainContainer}/>,
            errorElement: <ErrorPage/>,
            
            children: [
               
                {
                    path: "",
                    element:  <PrivateRoute  component={Welcome}/>,
                  
                }, {
                    path: "chats/:chat_id",
                    element: <PrivateRoute  component={ChatArea}/>,
                   
                }, {
                    path: "group",
                    element:  <PrivateRoute  component={Groups}/>,
                   
                }, {
                    path: "online",
                    element:  <PrivateRoute  component={OnlineMentor}/>, 
                   
                },{
                  path: "create-group",
                  element:   <PrivateRoute  component={CreateGroup}/>,    
              }
              ]
            }, {
              path: "/calender",
              element: <PrivateRoute  component={CalanderOverview}/>,
              errorElement: <ErrorPage/>,
              
              children: [
                 
                  {
                      path: "",
                      element:  <PrivateRoute  component={CalenderWelcome}/>,
                    
                  }, {
                      path: "event",
                      element:  <PrivateRoute  component={CalenderEvent}/>,
                     
                  },
                  {
                    path: "form",
                    element: <PrivateRoute  component={CalenderForm}/>,
                   
                }
                ]
              },
              {
                path: "/resource",
                element: <PrivateRoute  component={PdfOverview}/>,
                errorElement: <ErrorPage/>,

                children: [
                 
                  {
                      path: "",
                      element:  <PrivateRoute  component={PdfWelcome}/>,
                    
                  }, {
                      path: "form",
                      element:  <PrivateRoute  component={PdfForm}/>            
                  },
                  {
                    path: "search",
                    element:  <PrivateRoute  component={PdfSearch}/>,               
                },
                {
                  path: "view/:version/:id",
                  element:  <PrivateRoute  component={PdfViewer}/>,               
              },{
                path: "favourite",
                element:  <PrivateRoute  component={PdfFavourite}/>,               
            },
                ]
              },
              {
                path: "/mentor",
                element:<MentorOverview/>,
                errorElement: <ErrorPage/>,
                
                children: [
                   
                    {
                        path: "",
                        element: <PrivateRoute  component={Welcome}/>,
                      
                    }, {
                        path: "chats/:chat_id",
                        element: <PrivateRoute  component={ChatArea}/>,
                       
                    }, {
                        path: "group",
                        element:  <PrivateRoute  component={Groups}/>,
                       
                    }, {
                        path: "online",
                        element:  <PrivateRoute  component={OnlineUser}/>, 
                       
                    },{
                      path: "create-group",
                      element:   <PrivateRoute  component={CreateGroup}/>,    
                  }
                  ]
                },
                {
                  path: "/admin",
                  element: <Adminoverview/>,
                  errorElement: <ErrorPage/>,
                  
                  children:[
                    {
                      path:"",
                      element:  <PrivateRoute component={AllUsers}/>
                    },
                    {
                      path:"event",
                      element:  <PrivateRoute component={AllEvent}/>
                    },
                    {
                      path:"AddEvent",
                      element:  <PrivateRoute component={AddEvent}/>
                    },
                    {
                      path:"AllNotes",
                      element:  <PrivateRoute component={ViewNotes}/>
                    },
                    {
                      path:"addMentor",
                      element:  <PrivateRoute component={AddMentor}/>
                    },
                    {
                      path: "view/:version/:id",
                      element:  <PrivateRoute  component={PdfViewer}/>,               
                  }
                  ]
                },
                {
                  path: "/roadmap",
                  element:  <RoadmapOverview/>,
                  errorElement: <ErrorPage/>,
                },
                
                
        ]);

  return (
    <div className={`App ${LightTheme ? "" : "App-dark"}`}>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
