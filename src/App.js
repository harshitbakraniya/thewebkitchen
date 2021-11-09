import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Icon1 from "./assets/images/icons8-development-skill-96.png";
import Icon2 from "./assets/images/icons8-web-96.png";
import Icon3 from "./assets/images/icons8-mobile-96.png";
import Icon4 from "./assets/images/icons8-webpack-96.png";
import Icon5 from "./assets/images/icons8-team-64.png";
import Icon6 from "./assets/images/icons8-blood-test-65.png"

import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {
  const data = {
    card: [
      {
        id: 1,
        title: "CUSTOM SOFTWARE DEVELOPMENT",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: Icon1
      },
      {
        id: 2,
        title: "WEB DEVELOPMENT",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: Icon2
      },
      {
        id: 3,
        title: "MOBILE APP DEVELOPMENT",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: Icon3
      },
      {
        id: 4,
        title: "CPRODUCT DEVELOPMENT",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: Icon4
      },
      {
        id: 5,
        title: "DEDICATED TEAM",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: Icon5
      },
      {
        id: 6,
        title: "TESTING & QA",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: Icon6
      }
    ]
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/thewebkitchen" element={<Home val={data.card} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
