import './App.scss';
// import Feed from './components/feed/Feed';
// import Sidebar from './components/sidebar/Sidebar';
// import Trending from './components/trending/Trending';
// import { router } from 'lib/routes';
import { RouterProvider } from 'react-router-dom';
import { router } from 'lib/Routes';

function App() {
  return (
    <div className='app'>
      {/* <Sidebar/>
      <Feed />
      <Trending /> */}
      <RouterProvider router={router}/>
    </div>
    
  );
}

export default App;
