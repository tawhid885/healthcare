import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Detail from "./Components/Detail/Detail";
import Error from './Components/Error/Error';
import Header from './Components/Header/Header';
import Nurology from "./Components/Nurology/Nurology";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import AuthProvider from './Context/AuthProvider';
import Register from "./Components/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dermetology from "./Components/Dermetology/Dermetology";
import Cardiology from './Components/Cardiology/Cardiology';
import Gynocology from './Components/Gynocology/Gynocology';
import Conology from "./Components/Conology/Conology";
import Ambulance from './Components/Ambulance/Ambulance';



function App() {
  return (
    <AuthProvider>
      <div>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/home" element={<Home></Home>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/details/:id" element={<PrivateRoute><Detail></Detail></PrivateRoute>}/>
          <Route path="/nurology" element={<Nurology></Nurology>}/>
          <Route path="/dermetology" element={<Dermetology></Dermetology>}/>
          <Route path="/cardiology" element={<Cardiology></Cardiology>}/>
          <Route path="/gynocology" element={<Gynocology></Gynocology>}/>
          <Route path="/conology" element={<Conology></Conology>}/>
          <Route path="/ambulance" element={<Ambulance></Ambulance>}/>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/register" element={<Register></Register>} />
          <Route path="*" element={<Error></Error>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
