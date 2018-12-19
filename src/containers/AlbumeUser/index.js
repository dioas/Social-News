import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import { ApiPost } from '../../utils/ajaxRequestHelper.js'

class AlbumList extends React.Component {
  state = {
    AlbumList: []
  }
  componentDidMount () {
    this.getAlbums()
  }
  getAlbums () {
    const Id = this.props.match.params.userId
    ApiPost('getAlbumsList').doRequest({query: { userId: Id}})
      .on('done', res => {
        this.setState({AlbumList: res.body})
      })
  }
  renderNumberList = (data) => {
    const listItems = data.map((number, idx) =>
        <Grid item md={4} id={number.id} key={number.id.toString()} className="get-user">
          <Link to={`/yourphotos/${number.id}`} key={idx}>
            <Paper> 
                <Grid container className="wrapper">
                  <Grid item md={6} className="age">Title Album</Grid>
                  <Grid item md={6} className="website">: {number.title}</Grid>
                </Grid>
            </Paper>
          </Link>
        </Grid>
      )
    return listItems
  }
  render() {
    const ListAlbum = () => this.renderNumberList(this.state.AlbumList)
    return (
      <Grid container spacing={24}>
        <ListAlbum />
      </Grid>
    )
  }
}

export default AlbumList