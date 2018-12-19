import React, { Component } from 'react';
import { ApiPost } from '../../utils/ajaxRequestHelper.js'
import UserList from '../UserList'
import Grid from '@material-ui/core/Grid';

class Homepage extends Component {
    state = {
      ListUser: [],
      showAdd: true,
      showEdit: false,
      dataEdit: {}
    };
  componentWillMount () {
    this.getPostList()
  }
  getPostList () {
    ApiPost('getListusers').doRequest()
    .on('done', res => {
      this.setState({ListUser: res.body})
    })
  }
  render() {
    const User = this.state.ListUser
    return (
      <Grid container spacing={24} className="containers-home">
        <Grid item md={12}> <h2> List Total User </h2></Grid>
        <UserList ListUser={User}/>
      </Grid>
    );
  }
}

export default Homepage;
