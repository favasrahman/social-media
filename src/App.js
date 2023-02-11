import './App.scss';
import Feed from './Components/Feed/Feed';
import Sidebar from './Components/Sidebar/Sidebar';
import Trending from './Components/Trending/Trending';

function App() {
  return (
    <div className='app'>
      
      {/* Sidebar */}
      <Sidebar/>



      {/* {Feed} */}
      <Feed />



      {/* Trending */}
      <Trending />
    </div>
  );
}

export default App;
