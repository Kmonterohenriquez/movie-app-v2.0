import axios from 'axios'
import { ITEM_CASTS } from './types'
import {API_KEY} from './API_KEY'

const getItemCasts =  (type, id)=>  dispatch=>{
     axios.get(`http://api.themoviedb.org/3/${type}/${id}/casts?api_key=${API_KEY}`)
    .then( res => dispatch({
        type: ITEM_CASTS,
        payload: res.data.cast
    }))
}

export default getItemCasts