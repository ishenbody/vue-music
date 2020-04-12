import axios from "../utils/request"
import base from "./base"

const api = {
    getMusicList(params){
        return axios.get(base.basaUrl + base.musiclist,{
            params:params
        })
    },
    getMusicPlayer(params){
        return axios.get(base.basaUrl + base.musiclist,{
            params:params
        })
    },
    getMusicLRC(params){
        return axios.get(base.basaUrl + base.musiclist,{
            params:params
        })
    }
}

export default api;