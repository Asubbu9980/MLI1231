import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import Home from './pages/Home';
import AllJobs from './Components/Jobs'
import CreateJob from "./Components/JobForm";
import DetailJob from './Components/DetailCard';
import Table from './Components/Table'

import './App.css';

function App() {
  return (
    <Routes>
      <Route  path="/" element={<Home/>}>
        <Route index path="/" element={<AllJobs/>}/>
        <Route path="new" element={<CreateJob/>}/>
        <Route path="detail/:id" element={<DetailJob/>}/>
        <Route path="jobs" element={<Table/>} />
     </Route>
    </Routes>
  );
}

export default App;
