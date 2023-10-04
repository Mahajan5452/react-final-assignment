import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddCollege from './components/AddCollege';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EditCollege from './components/editCollege';
import BranchesList from './components/BranchesList';
import BranchEdit from './components/BranchEdit';
import AddBranch from './components/AddBranch';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-college" element={<AddCollege />} />
        <Route path="/edit-college/:id" element={<EditCollege />} />
        <Route path="/branches/:id" element={<BranchesList />} />
        <Route path="/edit-banches/" element={<BranchEdit />} />
        <Route path="/branches/:id/add-barnch" element={<AddBranch />} />
      </Routes>
    </div>
  );
}

export default App;
