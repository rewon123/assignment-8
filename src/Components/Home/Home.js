import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [ posts, setPosts] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => {
          setPosts(data);
         const id = data.map(posts => posts.title)
        })
  
    }, [])
    return (
        <div>
            {
                posts.map(posts => <Posts posts={posts}></Posts>)
            }
        </div>
    );
};

export default Home;