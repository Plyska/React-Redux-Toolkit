import React from 'react';
import { Routes, Route } from "react-router-dom";
import PostsPage from './pages/PostsPage/PostsPage';
import UsersPage from './pages/UsersPage/UsersPage';



function App() {
  return (
    <Routes>
      <Route path='/' element={<UsersPage />} />
      <Route path='/posts' element={<PostsPage />} />
    </Routes>
  );
}

export default App;
