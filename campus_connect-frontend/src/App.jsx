import { useSelector } from "react-redux";
import MainContainer from "./pages/chatPage/ChatOverview";
import Login from "./Components/Auth.jsx";
import ChatArea from "./pages/chatPage/chatArea";
import Welcome from "./pages/chatPage/Welcome";
import Groups from "./pages/chatPage/Groups";
import CreateGroup from "./pages/chatPage/createGroup";
import OnlineUser from "./pages/chatPage/Users.jsx";
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
import MentorWelcome from "./pages/mentor/Welcome.jsx";
import { Navigate } from "react-router-dom";
import PdfSearch from "./pages/ResorcesPage/Search.jsx";
import PdfViewer from "./pages/ResorcesPage/pdfViewer.jsx";
import PdfFavourite from "./pages/ResorcesPage/favioritePage.jsx";
import RoadmapOverview from "./pages/Roadmap/RoadmapOverview.jsx";

export function PrivateRoute(props) {
  let { component: Component } = props;
  const {token} = useSelector((state) => state.auth);
  const isLoggedIn = token != null && token != undefined;

  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}

function App() {
  const LightTheme = useSelector((state) => state.themeKey);

    const router= createBrowserRouter([{
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage/>,
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
                    element:  <PrivateRoute  component={MentorWelcome}/>,
                  
                }, {
                    path: "chats",
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
                  path: "view",
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
                        element: <Welcome/>,
                      
                    }, {
                        path: "chats",
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
