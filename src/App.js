import Topbar from "./Commponents/Topbar";
import Sidebar from "./Commponents/Sidebar";
import './Style/Css/app.css';
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
