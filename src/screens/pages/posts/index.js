import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../../store/actions/usersAction'
import { getPosts } from '../../../store/actions/postsAction'
import {
  Grid,
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  Avatar,
  Button,
  Typography
} from '@material-ui/core'
import {Link} from 'react-router-dom'

class Posts extends Component {
  componentDidMount() {
    this.props.getUsers()
    this.props.getPosts()
  }

  getUserById(userId) {
    const { users } = this.props.users
    const user = users.find(user => user.id === userId)
    return user
  }

  render() {
    let { posts } = this.props.posts
    posts = posts.map(post => {
      return {
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body,
        user: this.getUserById(post.userId)
      }
    })

    return (
      <React.Fragment>
        <h1>Posts</h1>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          spacing={5}
        >
          {posts.map(post => 
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card>
                <CardActionArea>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" src={'https://ui-avatars.com/api/?name=' + post.user.name + '&background=random'} />
                    }
                    title={post.user.name}
                    subheader="September 14, 2016"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      { post.title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      { post.body }
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary" component={Link} to={'/posts/' + post.id}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ users: state.users, posts: state.posts })

export default connect(mapStateToProps, { getUsers, getPosts })(Posts)