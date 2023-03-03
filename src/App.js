import React, { useState, useRef } from 'react';
import ClassComponent from './components/ClassComponent';
import Counter from './components/Counter';
import Input from './components/Input';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/app.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - language of programming' },
    { id: 2, title: 'JavaScript', body: 'JavaScript2 - language of programming' },
    { id: 3, title: 'JavaScript', body: 'JavaScript3 - language of programming' }
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0
        ? <PostList remove={removePost} posts= {posts} title= 'Posts about JS'/> 
        : 
        <h1 style={{textAlign: 'center'}}>
          Posts don't exist!
        </h1>
          
      }
    </div>
  );
}

export default App;
