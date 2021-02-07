import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../../store/actions/usersAction'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

class Users extends Component {
    componentDidMount() {
      this.props.getUsers()
    }

    render() {
        const { users } = this.props.users

        return (
          <React.Fragment>
            <h1>Users</h1>
            <List>
              {users.map(user =>
              
                <div>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" src={'https://ui-avatars.com/api/?name=' + user.name + '&background=random'} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            { user.email }
                          </Typography>
                          {" - " + user.address.street } { user.address.suite }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              
              )}
          </List>
          </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(Users)