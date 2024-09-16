import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateMeasure from './component/CreateMeasure';
import ListMeasures from './component/ListMeasures';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/create-measure' element={<CreateMeasure />} />
          <Route path='/list-measures'  element= { <ListMeasures />} />
        </Routes>
      </div>
  )
}

export default App
