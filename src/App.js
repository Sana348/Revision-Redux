
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import "./App.css";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route> 404 not found </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
