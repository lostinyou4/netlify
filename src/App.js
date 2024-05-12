import './App.css';
import { RouterProvider } from 'react-router-dom';
import BackTest from './pages/BackTest';
import router from './routes/router';

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
