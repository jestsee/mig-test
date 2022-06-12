import './App.css';
import Sidebar from './components/Sidebar';
import ContentGrid from './components/ContentGrid';

function App() {
  return (
    <div /* className='flex' */>
      <p className='text-green-800 text-center'>Hello!</p>
      <Sidebar/>
      <ContentGrid/>
    </div>
  );
}

export default App;
