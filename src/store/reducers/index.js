import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import postReducer from './postsReducer'
import commentReducer from './commentsReducer'

export default combineReducers({
    users: userReducer,
    posts: postReducer,
    comments: commentReducer
})