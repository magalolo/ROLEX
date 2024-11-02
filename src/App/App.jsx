import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import New from '../Pages/New/New';
import Company from '../Pages/Company/Company';
import Sport from '../Pages/Sport/Sport';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/New' element={<New/>}/>
        <Route path='/Company' element={<Company/>}/>
        <Route path='/Sport' element={<Sport/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
