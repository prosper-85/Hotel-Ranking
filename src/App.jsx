import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddHotel, EditHotel, Home, Hotel, Layout, List, Login } from '@/pages';

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
  return <RouterProvider router={router} />;
}

export default App;
