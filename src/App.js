import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topheader from "./Topheader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./screen/Home" 
import Contactus  from "./screen/Contactus" 
import Appsandsoftware  from "./screen/Appsandsoftware" 
import Webdevelopment  from "./screen/Webdevelopment" 
import Digitalmarketing from './screen/Digitalmarketing';
import Ourclients from './screen/Aboutus/Ourclients';
import Whoweare from './screen/Aboutus/Whoweare';
import Aboutus from './screen/Aboutus';
import WebsiteDevelopment from './screen/Webdevelopment/WebsiteDevelopment';
import SearchEngineOptimization from './screen/Digitalmarketing/SerachEngineOptimization';
import Ecommercedevelopmant from './screen/Webdevelopment/Ecommercedevelopmant';
import Cmsdevelopment from './screen/Webdevelopment/Cmsdevelopment';
import Phpdevelopment from './screen/Webdevelopment/Phpdevelopment';
import Branding from './screen/Digitalmarketing/Branding';
import LogoDesigning from './screen/Digitalmarketing/Logodesigning';
import Videoandtextmarketing from './screen/Digitalmarketing/Videoandtextmarketing';
import Androidapps from './screen/Appsandsoftware/Androidapps';
import Iosapps from './screen/Appsandsoftware/Iosapps';
import Hybridapps from './screen/Appsandsoftware/Androidapps/Hybridapps';
import Customizesoftware from './screen/Appsandsoftware/Customizesoftware';
import SocialMediaMarketing from './screen/Digitalmarketing/SocialMediaMarketing';
import SocialMediaOptimization from './screen/Digitalmarketing/SocialMediaOptimization';
import Agilewebdevelopment from './screen/Agilewebdevelopment';
import Poc from './screen/Poc';
import Iot from './screen/Iot';
import Itconsulting from './screen/Itconsulting';
import Ux from './screen/Ux';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Topheader/>
         <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/apps-and-software' element={<Appsandsoftware/>}/>
        <Route path='/webdevelopment' element={<Webdevelopment/>}/>
        <Route path='/digitalmarketing' element={<Digitalmarketing/>}/>
        <Route path='aboutus/ourclients' element={<Ourclients/>}/>
        <Route path='aboutus/whoweare' element={<Whoweare/>}/>
        <Route path='/webdevelopment/webiste-development' element={<WebsiteDevelopment/>}/>
        <Route path='/webdevelopment/e-commerce-development' element={<Ecommercedevelopmant/>}/>
        <Route path='/webdevelopment/cms-development' element={<Cmsdevelopment/>}/>
        <Route path='/webdevelopment/php-development' element={<Phpdevelopment/>}/>
        <Route path='/digitalmarketing/search-engine-optimization' element={<SearchEngineOptimization/>}/>
        <Route path='/digitalmarketing/social-media-optimization' element={<SocialMediaOptimization/>}/>
        <Route path='/digitalmarketing/social-media-marketing' element={<SocialMediaMarketing/>}/>
        <Route path='/digitalmarketing/branding' element={<Branding/>}/>
        <Route path='/digitalmarketing/logo-designing' element={<LogoDesigning/>}/>
        <Route path='/digitalmarketing/video-and-text-marketing' element={<Videoandtextmarketing/>}/>
        <Route path='/apps-and-software/andriod-apps' element={<Androidapps/>}/>
        <Route path='/apps-and-software/ios-apps' element={<Iosapps/>}/>
        <Route path='/apps-and-software/hybrid-apps' element={<Hybridapps/>}/>
        <Route path='/apps-and-software/customize-software' element={<Customizesoftware/>}/>
        <Route path='/agile-web-development' element={<Agilewebdevelopment/>}/>
        <Route path='/poc' element={<Poc/>}/>
        <Route path='/iot' element={<Iot/>}/>
        <Route path='/itconsulting' element={<Itconsulting/>}/>
        <Route path='/ux' element={<Ux/>}/>


       </Routes>
     <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
