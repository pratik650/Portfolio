import "./App.css";
import {Routes,Route} from "react-router-dom"
import App from "./App";
import { Home } from "./component/Home";
import  Contact   from "./component/Contact";


export default function AppMain() {

  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={<App/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}