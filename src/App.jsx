import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import AddHotel from './pages/addhotel/HotelForm';
import Layout from './pages/layout/Layout';
import Login from './pages/login/login';
import EditHotel from './pages/edithotel/EditHotel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'hotels',
        element: <List />,
      },
      {
        path: 'hotels/:id',
        element: <Hotel />,
      },
      {
        path: 'create-hotel',
        element: <AddHotel />,
      },
      {
        path: 'edit-hotel/:id',
        element: <EditHotel />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/hotels' element={<List />} />
    //     <Route path='/hotels/:id' element={<Hotel />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
