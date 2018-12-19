import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const ListComment = ({ comments , deleteComment}) => (
    comments.map((comments, idx) =>
      <Grid item md={12} id={comments.id} key={idx} className="comments">
        <Paper> 
          <Grid container className="wrapper">
            <Grid item md={12} className="name">Name : {comments.name}</Grid>
            <Grid item md={12} className="age">Email : {comments.email}</Grid>
            <Grid item md={12} className="age">body :</Grid>
            <Grid item md={12} className="website">{comments.body}</Grid>
          </Grid>
          <Button onClick={() => deleteComment(comments.id)} id={comments.id} variant="contained">
            Delete Post
          </Button>
        </Paper>
      </Grid>
    )
)
export default ListComment