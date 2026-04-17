import Catalog from "./pages/Catalog";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar/>  

      <main className="container">
        <Catalog/>
      </main>    
    
      <Footer/>
    </div>
  );
}

export default App;
