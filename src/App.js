import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Pages/Home/Home';
import Error from './Pages/ErrorElement.js/Error';

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} errorElement={<Error/>}>
        <Route index element={<Home/>}/>

      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;