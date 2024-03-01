import "./App.css";
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import * as Pages from './pages';
import { SearchProvider } from './contexts';
import { Header } from './components';

function App() {
  return (
    <>
    <SearchProvider>
      <Routes>
          <Route path="/" element={<Header/>}>
          <Route index element={<Pages.HomePage/>}/>
          <Route path="/search" element={<Pages.SearchPage />} />
          <Route path="/heroes" element={<Pages.HeroesPage/>} />
          <Route path="/heroes/:id" element={<Pages.HeroPage/>} />
          <Route path='*' element={<Pages.NotFoundPage/>}/>
          </Route>
          </Routes>
          </SearchProvider>
    </>
  );
}

export default App;

