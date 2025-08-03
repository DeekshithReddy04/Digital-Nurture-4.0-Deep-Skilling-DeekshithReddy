import React from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '40px' }}>
      <div style={{ borderRight: '4px solid green', paddingRight: '20px' }}>
        <CourseDetails />
      </div>
      <div style={{ borderRight: '4px solid green', padding: '0 20px' }}>
        <BookDetails />
      </div>
      <div style={{ paddingLeft: '20px' }}>
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
