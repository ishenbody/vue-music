<template>
    <div>
        <MusicListView title="新歌榜" :musiclist="hotMusic"/>
        <MusicListView title="热歌榜" :musiclist="newMusic"/>
        <MusicListView title="摇滚榜" :musiclist="rockMusic"/>
    </div>
</template>
<script>

import MusicListView from "./MusicListView"

export default {
    name:"MusicList",
    data(){
        return{
            hotMusic:[],
            newMusic:[],
            rockMusic:[]
        }
    },
    components:{
        MusicListView
    },
    mounted(){
        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type:1,
            size:6,
            offset:0
        }).then(res => {
            this.hotMusic = res.data.song_list
        }).catch(error =>{
            console.log(error);
        })

        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type:2,
            size:6,
            offset:0
        }).then(res => {
            this.newMusic = res.data.song_list
        }).catch(error =>{
            console.log(error);
        })

        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type:11,
            size:3,
            offset:0
        }).then(res => {
            this.rockMusic = res.data.song_list
        }).catch(error =>{
            console.log(error);
        })
    }
}
</script>