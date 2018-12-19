import React from 'react';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AdjustRounded from '@material-ui/icons/AdjustRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PostComponent from '../../PostComponent'
import AlbumeUser from '../../AlbumeUser'
import Todos from '../../Todos'
import { Route } from "react-router-dom";
const UserTabMenu = ({ match, value, handleChange, history, userId }) => (
          <div>
            <BottomNavigation
              value={value}
              onChange={handleChange}
              showLabels
            >
              <BottomNavigationAction onClick={() => history.push(`/users/${userId}/post`)} label="Recents" icon={<AdjustRounded />} />
              <BottomNavigationAction onClick={() => history.push(`/users/${userId}/albums`)} label="Album" icon={<FavoriteIcon />} />
              <BottomNavigationAction onClick={() => history.push(`/users/${userId}/todos`)} label="Todo" icon={<LocationOnIcon />} />
            </BottomNavigation>
            <Grid container item md={12} spacing={24} className="data-user">
              <Grid item md={12}>
              <Route exact path={`${match.path}/post`} component={PostComponent} />
                <Route
                  exact
                  path={match.path}
                  component={PostComponent}
                />
                <Route
                  path={`${match.path}/albums`}
                  component={AlbumeUser}
                />
                <Route
                  path={`${match.path}/todos`}
                  component={Todos}
                />
              </Grid>
            </Grid>
          </div>
)
export default UserTabMenu