import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from '../header/Header'
import Posts from '../posts/Posts'
import './app.css'
import SinglePost from '../singlePost/SinglePost'
import { PaginationProvider } from '../pagination/paginationContext'
import SignUp from '../login/signup/SignUp'
import SignIn from '../login/signIn/SignIn'
import CreateAccount from '../login/editAccount/EditAccount'
import EditAccount from '../login/editAccount/EditAccount'
import { AuthProvider } from '../context/DataContext'
import CreateArticle from '../createArticle/CreateArticle'
import EditArticle from '../editArticle/EditArticle'

function App() {
  return (
    <BrowserRouter>
      <PaginationProvider>
        <AuthProvider>
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/articles/:slug" element={<SinglePost />} />
              <Route path="/articles/:slug/edit" element={<EditArticle />} />
              <Route path="/articles" element={<Posts />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/profile" element={<EditAccount />} />
              <Route path="/profile" element={<CreateAccount />} />
              <Route path="/new-article" element={<CreateArticle />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </AuthProvider>
      </PaginationProvider>
    </BrowserRouter>
  )
}

export default App
