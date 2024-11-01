
import { useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner';
import Books from './components/books/Books';
import Navbar from './components/navbar/Navbar'
import { Link, Outlet } from "react-router-dom";
// import BookDetails from './bookDetails/BookDetails';

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Outlet></Outlet>
        <Books></Books>
     </div>
    </>
  )
}

export default App
