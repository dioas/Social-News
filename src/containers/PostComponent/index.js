import React from 'react';
import { ApiPost } from '../../utils/ajaxRequestHelper.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListComment from './components/ListComment.js';

class PostComponent extends React.Component {
  state = {
    postList: [],
    commentsList: [],
    body: '',
    comment: ''
  }
  componentDidMount () {
    this.getListPost()
  }
  updateBody = (event) => {
    this.setState({body: event.target.value});
  }
  updateCommentdata = (event) => {
    this.setState({comment: event.target.value});
  }
  getListPost () {
    const Id = this.props.match.params.userId
    ApiPost('getListPost').doRequest({query: { userId: Id}})
      .on('done', res => {
        this.setState({postList: res.body})
      })
  }
  getComments = (e) => {
    ApiPost('getListComment').doRequest({query: { postId: e}})
      .on('done', res => {
        this.setState({commentsList: res.body})
      })
  }
  deletePost = (id) => {
    ApiPost('DeletePost').doRequest({params: { id: id}})
    .on('done', res => {
      document.getElementById(id).remove() 
    })
  }
  deleteComment (data) {
    ApiPost('deleteComment').doRequest({params: { id: data}})
    .on('done', res => {
      document.getElementById(data).remove() 
    })
  }
  updatePost () {
    const Id = this.props.match.params.userId
    ApiPost('updateListPost').doRequest({body: {
      title: this.state.body,
      body: this.state.body,
      userId: Id
    }})
      .on('done', () => {
        alert('Post Update') 
      })
  }
  updateComment () {
    const Id = this.props.match.params.userId
    ApiPost('updateComment').doRequest({body: {
      title: this.state.comment || '',
      body: this.state.comment || '',
      userId: Id
    }})
      .on('done', () => {
        alert('Comment Update') 
      })
  }
  PostList (data) {
    var listItems = data.map((post) =>
      <Grid item md={12} id={post.id} key={post.id.toString()} className="get-user">
          <Paper> 
              <Grid container className="wrapper">
                <Grid item md={12} className="name">Title : <b>{post.title}</b></Grid>
                <Grid item md={12} className="age">Content :</Grid>
                <Grid item md={12} className="website">{post.body}</Grid>
              </Grid>
              <Button onClick={() => this.getComments(post.id)} variant="contained">
                Show Comment
              </Button>
              <Button onClick={() => this.deletePost(post.id)} variant="contained">
                Delete Post
              </Button>
              {this.state.commentsList.length > 0 && <ListComment {...this.props} deleteComment={this.deleteComment} comments={this.state.commentsList}/>}
              {this.state.commentsList.length > 0 && 
                <div>
                  <input value={this.state.comment} onChange={this.updateCommentdata} className="text-status"/>
                  <Button onClick={() => this.updateComment()} variant="contained">
                    Add Comment
                  </Button>
                </div>
              }
          </Paper>
      </Grid>
      )
    return listItems
  }
  render() {
    const ListPost = () => this.PostList(this.state.postList)
    return (
      <Grid container spacing={24}>
        <Grid item><h3>Update Post</h3></Grid>
        <textarea value={this.state.body} onChange={this.updateBody} className="text-status"></textarea>
        <Button onClick={() => this.updatePost()} variant="contained">
          Update Post
        </Button>
        <Grid item md={12}><h3>Posts : </h3></Grid>
        <ListPost />
      </Grid>
    )
  }
}

export default PostComponent