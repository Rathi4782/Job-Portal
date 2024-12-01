// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import JobListing from './Components/JobListingSection';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='jobs' element={<JobListing />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
