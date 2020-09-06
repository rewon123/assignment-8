import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Comment from '../Comment/Comment';

const useStyles = makeStyles((theme) => ({
}));


const PostDetail = () => {
  const classes = useStyles();
  const [postDetail, setPostDetail] = useState([]);
  const { id } = useParams();
  const { userId, title, body } = postDetail;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPostDetail(data))
  }, [])
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
      .then(data => {
        setComments(data)
      })
  }, [])

  for (let i = 0; i < comments.length; i++) {
    const random = Math.floor(Math.random() * 90 + 1);
    comments[i].image = `https://randomuser.me/api/portraits/women/${random}.jpg`;
  }
 
  return (
    <div>
      <img style={{marginTop:'50px',width:'100%'}} src={"https://picsum.photos/800/800?random=" + id} alt=""/>
      <h1> <strong> Title: </strong>{title}</h1>
      <h2> <strong> Body: </strong> {body}</h2>
      <React.Fragment>
        <CssBaseline />
        <Paper square className={classes.paper}>
          <List className={classes.list}>
            {
              comments.map(comment => <Comment comment={comment}></Comment>)
            }
          </List>
        </Paper>
      </React.Fragment>
    </div>
  );
};

export default PostDetail;