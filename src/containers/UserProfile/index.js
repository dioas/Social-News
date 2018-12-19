import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ApiPost } from '../../utils/ajaxRequestHelper.js'
import { Card, CardContent } from '@material-ui/core';
import UserTabMenu from './components/UserTabMenu';

class UserList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ListPost: [],
      userData: {},
      showAdd: true,
      showEdit: false,
      dataEdit: {},
      value: 0
    };
  }
  componentDidMount () {
    this.getPostList()
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  getPostList () {
    const Id = this.props.match.params.userId
    ApiPost('getUser').doRequest({params: { id: Id}})
    .on('done', res => {
      this.setState({userData: res.body})
    })
  }
  render() {
    const userData = this.state.userData
    const { value } = this.state
    return (
      <Grid container spacing={24} className="containers-home">
        <Grid item md={12}> <h2> User Profile </h2></Grid>
        {userData.address && 
          <Grid item md={12}>
          <Paper className="container-papers">
            <div className="wrapper-profile">
              <Card>
                <CardContent>
                  <Grid container className="profile">
                    <Grid item md={12}>
                      <Grid container>
                        <Grid item md={6}>UserName</Grid>
                        <Grid item md={6}>: {userData.username}</Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container>
                        <Grid item md={6}>Name</Grid>
                        <Grid item md={6}>: {userData.name}</Grid>
                      </Grid>                 
                    </Grid>
                    <Grid item md={12}>
                      <Grid container>
                        <Grid item md={6}>Email</Grid>
                        <Grid item md={6}>: {userData.email}</Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container>
                        <Grid item md={6}>Address</Grid>
                        <Grid item md={6}>: {userData.address.street} {userData.address.suite} ,{userData.address.city} {userData.address.zipcode}</Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container>
                        <Grid item md={6}>Phone</Grid>
                        <Grid item md={6}>: {userData.phone}</Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container>
                        <Grid item md={6}>Website</Grid>
                        <Grid item md={6}>: {userData.website}</Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container>
                        <Grid item md={6}>Company</Grid>
                        <Grid item md={6}>: {userData.company.name}</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </div>
            <UserTabMenu {...this.props} value={value} userId={this.props.match.params.userId} handleChange={this.handleChange}/>
          </Paper>
        </Grid>
        }
        
      </Grid>
    );
  }
}

export default UserList