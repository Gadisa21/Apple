import { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import All from "./components/All";
import {Routes,Route} from "react-router-dom"
import Iphone from "./components/Iphone";
import { BrowserRouter } from "react-router-dom";
import SingleAppleProduct from "./components/SingleAppleProduct";
import New from "./components/New";


class App extends Component {
  render() {
    return (
      <BrowserRouter> <Header />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="iphone" element={<Iphone/>}/>
          <Route path ="Mac" element={<New/>}/>
          <Route path="iphone/:productName" element={<SingleAppleProduct/>}/>
        </Routes>

        <Footer /></BrowserRouter>
       
    
    );
  }
}

export default App;
