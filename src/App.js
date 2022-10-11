
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/home',
          loader: async () => {
            return fetch(" https://openapi.programming-hero.com/api/quiz")
          },
          element: <Home></Home>
        }
      ]     
    },

    {
      path:'*',element:<p>This Page Not Found</p>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
