import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorMessage from './errorMessage/ErrorMessage.jsx';
import BookDetails from './bookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorMessage></ErrorMessage>,
    children: [
      {
        path: '/books/:bookId',
        loader: () => fetch('booksData.json'),
        element: <BookDetails></BookDetails>
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
