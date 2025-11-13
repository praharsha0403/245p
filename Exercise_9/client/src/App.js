import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LandingView from "./components/LandingView";
import ExampleDataView from "./components/ExampleDataView";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route index element={<LandingView />} />
          <Route path="exampledataview" element={<ExampleDataView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
