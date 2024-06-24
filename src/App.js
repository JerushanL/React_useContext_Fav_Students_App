
import './App.css';
import Student from './Components/student';
import Favourite from './Components/favourite';
import StudentProvider from './Components/contextProvider';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <StudentProvider>
        <BrowserRouter>
          <nav className='flex justify-center gap-10 md:gap-28 lg:gap-52   bg-[#0046be]  text-white text-xl font-bold py-5 tracking-wide'>
            <Link className="hover:underline" to={"/"}>Students</Link> <br />
            <Link className="hover:underline" to={"/favourites"}>Favourites</Link>
          </nav>
          <Routes>
            <Route  path='/' element={<Student />}></Route>
            <Route path='/favourites' element={<Favourite />}></Route>
          </Routes>
        </BrowserRouter>
      </StudentProvider>
      
    </div>
  );
}

export default App;
