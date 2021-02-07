import {
  GET_COMMENTS,
  COMMENTS_ERROR,
} from '../types'
import axios from 'axios'

export const getComments = () => async dispatch => {
    
  try{
    const res = await axios.get(`http://jsonplaceholder.typicode.com/comments`)
    dispatch( {
      type: GET_COMMENTS,
      payload: res.data
    })
  }
  catch(e){
    dispatch( {
      type: COMMENTS_ERROR,
      payload: console.log(e),
    })
  }

}