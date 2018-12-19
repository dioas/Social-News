import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ApiPost } from '../../utils/ajaxRequestHelper.js';
import Divider from '@material-ui/core/Divider';
class Todos extends React.Component {
  state = {
    Todos: []
  }
  componentDidMount () {
    this.getTodos()
  }
  getTodos () {
    const Id = this.props.match.params.userId
    ApiPost('getListTodos').doRequest({query: { userId: Id}})
      .on('done', res => {
        this.setState({Todos: res.body})
      })
  }
  renderNumberList = (data) => {
    const listItems = data.map((number, idx) =>
        <ListItem divider key={idx} button>
          <ListItemText primary={number.title} />
          {number.completed && <ListItemText className="text-right" primary="DONE"/>}
          <Divider />
        </ListItem>
      )
    return listItems
  }
  render() {
    const ListTodos = () => this.renderNumberList(this.state.Todos)
    return (
      <List>
        <ListItem>
          <ListItemText primary="LIST TODO" />
        </ListItem>
        <ListTodos />
      </List>
    )
  }
}

export default Todos