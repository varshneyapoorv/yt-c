
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Navbar/>
    <div className='flex mt-16'>
    <Sidebar/>
    </div>


    </>
  );
}

export default App;
