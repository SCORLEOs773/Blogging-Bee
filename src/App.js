import React, { useContext, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Blogger from './components/Blogger';
import BlogPost from './components/BlogPost';
import WriteBlog from './components/WriteBlog';
import Post from './components/Post';
import SubmitBlog from './components/SubmitBlog';
import About from './components/About';
import Contact from './components/Contact';
import Error404 from './components/Error404';
import { ThemeProvider } from 'react-bootstrap';


function App() {
  const { theme } = useContext(ThemeContext);

  // const themes = {
  //   light: {
  //     background: 'white',
  //     color: 'black',
  //   },
  //   dark: {
  //     background: 'darkgray',
  //     color: 'white',
  //   },
  // };

  return (
    <Router>
      <div className={`App ${theme === 'dark' ? 'bg-dark-subtle text-white' : ''} overflow-hidden`} style={{ minHeight: '100vh' }}>
        <Navbar theme={theme} />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<BlogPost />} />
          <Route path="/blogger" element={<Blogger />} />
          <Route path="/writeBlog" element={<WriteBlog />} />
          <Route path="/submit" element={<SubmitBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="*" element={<Error404 />} />

        </Routes>
        {/* </Suspense> */}
      </div>
    </Router>
  );

}

export default App;
