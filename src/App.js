// import {Routes, Route} from 'react-router-dom'
// import './App.css';
import AddTransport from './Components/AddTransport';
import TransportMenu from './Components/TransportMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayTransport from './Components/DisplayTransport';


function App() {
  return (
    <>
    <div  data TestId="AppTest">
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<TransportMenu/>}/>
      <Route path="/AddTransport" element={<AddTransport/>}/>
      <Route path="/DisplayTransport" element = {<DisplayTransport/>}/>
    </Routes>

  </BrowserRouter>
    </div>
  </>
  );
}

export default App;
