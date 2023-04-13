import NavBar from "./components/navBar/navBar";
import { Header } from "./container";
import './app.css';
const App = () => {
  return (
    <div className="app">
      <div className="gradiant__bg">
        <NavBar/>
        <Header/>
      </div>
    </div>
  );
}

export default App;
