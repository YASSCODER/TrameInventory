import NavBar from "./components/navBar/navBar";
import { Header, Footer } from "./container";
import './app.css';
const App = () => {
  return (
    <div className="app">
      <div className="gradiant__bg">
        <NavBar/>
        <Header/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
