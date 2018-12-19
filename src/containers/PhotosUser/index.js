import React, { Component } from 'react';
import { ApiPost } from '../../utils/ajaxRequestHelper.js'
import Photo from './components/PhotoTile.js'
import Grid from '@material-ui/core/Grid';

class Photos extends Component {
    state = {
      ListPhoto: [],
      showAdd: true,
      showEdit: false,
      dataEdit: {}
    };
  componentWillMount () {
    this.getPhotosList()
  }
  getPhotosList () {
    const Id = this.props.match.params.albumId
    ApiPost('getListPhotos').doRequest({query: { albumId: Id}})
    .on('done', res => {
      this.setState({ListPhoto: res.body})
    })
  }
  render() {
    const Photos = this.state.ListPhoto
    return (
      <Grid container spacing={24} className="containers-home">
        <Grid item md={12}> <h2> Total Photos </h2></Grid>
        <Photo ListPhoto={Photos}/>
      </Grid>
    );
  }
}

export default Photos;
