import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class Photo extends React.Component {
  renderNumberList = (data) => {
    const listItems = data.map((number, idx) =>
      <Grid item md={3}>
        <Card id={number.id} key={idx} className="media">
          <CardActionArea>
            <CardMedia
              image={number.url}
              title={number.title}
              className="img-wrapper"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {number.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      )
    return listItems
  }
  render() {
    const ListPhoto = () => this.renderNumberList(this.props.ListPhoto)
    return (
      <Grid container spacing={24}>
        <ListPhoto />
      </Grid>
    )
  }
}

export default Photo