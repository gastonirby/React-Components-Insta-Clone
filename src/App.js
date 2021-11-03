/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts'
// Import the dummyData
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const [searchTerm, setSearchTerm] = useState('')

  const likePost = postId => {
    setPosts(posts.map(post => {
       return post.id === postId ? {...post, likes: post.likes + 1 } : post
        }))
    console.log("click")
  };

  return (
    <div className='App'>
      <SearchBar setSearchTerm={setSearchTerm} />
      {/* <Post />  */}
      <Posts likePost = {likePost} posts = {posts}/>
      {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
