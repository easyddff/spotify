import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Root from "./pages/Root";
import Charts from "./pages/Charts";
import Dailymix from "./pages/Dailymix";
import Artist from "./pages/Artist";
import Podcasts from "./pages/Podcasts";
import Joinus from "./pages/Joinus";
import Setting from "./pages/Setting";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Info from "./pages/Info";
import ChartsDetail from "./pages/ChartsDetail";
import ArtistDetail from "./pages/ArtistDetail";
import { isMobile } from "react-device-detect";
import MobileHome from "./pages/mobile/MobileHome";
import MobileRoot from "./pages/mobile/MobileRoot";
import MobileCharts from "./pages/mobile/MobileCharts";
import Listen from "./pages/mobile/Listen";
import { AuthContextProvider } from "./context/AuthContext";
import MobileSearch from "./pages/mobile/MobileSearch";


function App() {

  let router=null;

  if(isMobile===true){
    router=createBrowserRouter([
      {
        path:'/',
        element:<MobileRoot/>,
        errorElement:<Notfound/>,
        children:[
          {index:true, element:<MobileHome/>},
          {path:'/mobileSearch', element:<MobileSearch/>},
          {path:'/mobileCharts', element:<MobileCharts/>},
          {path:'/mobileCharts/:listen', element:<Listen/>},
        ]
      }
      
    ])

  }else{
    router=createBrowserRouter([
      {
        path:'/',
        element:<Root/>,
        errorElement:<Notfound/>,
        children:[
          {index:true, element:<Home/>},
          {path:'/charts', element:<Charts/>},
          {path:'/dailymix', element:<Dailymix/>},
          {path:'/artist', element:<Artist/>},
          {path:'/podcasts', element:<Podcasts/>},
          {path:'/login', element:<Joinus/>},
          {path:'/setting', element:<Setting/>},
          {path:'/info', element:<Info/>},
          {path:"/charts/:chartsDetail", element:<ChartsDetail/>},
          {path:"/artist/:artistDetail", element:<ArtistDetail/>}
  
        ]
      }
      
    ])
  }
  
  

  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router}/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
