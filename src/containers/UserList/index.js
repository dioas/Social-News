import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

class UserList extends React.Component {
  renderNumberList = (data) => {
    const listItems = data.map((number, idx) =>
        <Grid item md={4} id={number.id} key={number.id.toString()} className="get-user">
          <Link to={`/users/${number.id}/post`} key={idx}>
            <Paper> 
                <Grid container className="wrapper">
                  <Grid item md={6} className="name">Username </Grid>
                  <Grid item md={6} className="name">: {number.username}</Grid>
                  <Grid item md={6} className="age">Email </Grid>
                  <Grid item md={6} className="website">: {number.email}</Grid>
                  <Grid item md={6} className="age">Website</Grid>
                  <Grid item md={6} className="website">: {number.website}</Grid>
                </Grid>
            </Paper>
          </Link>
        </Grid>
      )
    return listItems
  }
  render() {
    const ListUser = () => this.renderNumberList(this.props.ListUser)
    return (
      <Grid container spacing={24}>
        <ListUser />
      </Grid>
    )
  }
}

export default UserList