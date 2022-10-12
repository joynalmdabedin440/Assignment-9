
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/home/Home';
import Topics from './components/topics/Topics';
import Quizes from './components/Quizes/Quizes';

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
        },
        {
          path: '/home/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          
          element: <Quizes></Quizes>
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
