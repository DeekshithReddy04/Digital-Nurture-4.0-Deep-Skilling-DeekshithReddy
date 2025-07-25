import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ''
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true, errorMessage: error.message });
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred in the Posts component.');
    this.setState({ hasError: true, errorMessage: error.toString() });
    console.error('componentDidCatch:', error, info);
  }

  render() {
    const { posts, hasError, errorMessage } = this.state;

    if (hasError) {
      return <h2>Error: {errorMessage}</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
