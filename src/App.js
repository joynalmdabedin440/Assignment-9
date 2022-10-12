
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/home/Home';
import Topics from './components/topics/Topics';
import Quizes from './components/Quizes/Quizes';
import Blogs from './components/blogs/Blogs';
import Statistics from './components/statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: async () => {
            return fetch(" https://openapi.programming-hero.com/api/quiz")
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => {
            return fetch(" https://openapi.programming-hero.com/api/quiz")
          },
          element: <Home></Home>
        },
        {
          path: '/topics',
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
        },
        {
          path:'/blogs',element:<Blogs></Blogs>
        },

        {
          path: '/statistics',
          loader: async () => {
            return fetch(" https://openapi.programming-hero.com/api/quiz")
          },
          element: <Statistics></Statistics>
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
