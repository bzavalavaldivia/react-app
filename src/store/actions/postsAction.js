import {
  GET_POSTS,
  POSTS_ERROR,
} from '../types'
import axios from 'axios'

export const getPosts = () => async dispatch => {
    
  try{
    const res = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    dispatch( {
      type: GET_POSTS,
      payload: res.data
    })
  }
  catch(e){
    dispatch( {
      type: POSTS_ERROR,
      payload: console.log(e),
    })
  }

}