import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../../../store/actions/usersAction'
import { getPosts } from '../../../../store/actions/postsAction'
import { getComments } from '../../../../store/actions/commentsAction'

import {
  Typography,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Divider
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

class Posts extends Component {
  componentDidMount() {
    this.props.getUsers()
    this.props.getPosts()
    this.props.getComments()
  }

  getUserById(userId) {
    const { users } = this.props.users
    const user = users.find(user => user.id === userId)
    return user
  }

  getCommentsByPostId(postId) {
    const { comments } = this.props.comments
    
    return comments.filter(comment => comment.postId === postId)
  }

  render() {
    const postId = this.props.match.params.id
    let { posts } = this.props.posts

    posts = posts.map(post => {
      return {
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body,
        user: this.getUserById(post.userId),
        comments: this.getCommentsByPostId(post.id)
      }
    })

    const post = posts.filter(post => post.id == postId)

    return (
      <React.Fragment>
        {post.map(post =>
          <div key={post.id}>
            <br></br>
            <Typography variant="h4" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Written by <b>{post.user.name}</b>
            </Typography>
            <br></br>
            <Typography variant="body1" gutterBottom>
              {post.body}
            </Typography>
            <br></br>
            <Typography variant="overline" display="block" gutterBottom>
              Comentarios:
            </Typography>

            {post.comments.map(comment =>
              <React.Fragment>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" src={'https://ui-avatars.com/api/?name=' + comment.name + '&background=random'} />
                    }
                    title={comment.name}
                    subheader={comment.email}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {comment.body}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
                <br />
              </React.Fragment>
            )}
          </div>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ users: state.users, posts: state.posts, comments: state.comments })

export default connect(mapStateToProps, { getUsers, getPosts, getComments })(Posts)