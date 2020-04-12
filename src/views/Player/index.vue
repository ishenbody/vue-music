<template>
    <div class="play" v-if="songInfo.songinfo">
        <div class="header">
            <div class="title">
                <router-link to="/">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
                <div class="music-info">
                    <p>{{ songInfo.songinfo.title }}</p>
                    <p class="author">{{ songInfo.songinfo.author }}</p>
                </div>
                <router-link to="/search">
                    <i class="iconfont icon-sousuo right"></i>
                </router-link>
            </div>
        </div>
        <div class="song-info">
            <div class="song-info-img">
                <img :src="songInfo.songinfo.pic_huge" alt="">
                <LRC :songid="songid" :currentTime="currentTime" :duration="duration"/>
            </div>
            <div class="iconbox">
                <i class="iconfont icon-shoucang2 left"></i>
                <i class="box"></i>
                <i class="iconfont icon-xiazai right"></i>
            </div>
        </div>
        <div class="song">
            <audio ref="player" :src="songInfo.bitrate.show_link" controls></audio>
        </div>
    </div>
</template>
<script>

import LRC from "./LRC"

/**
 * 异步渲染数据问题
 * 
 * 播放音乐，根据时间歌词滚动
 *     正在播放音乐的总时长
 *     正在播放音乐的当前播放时间
 */

export default {
    name:"Player",
    data(){
        return{
            songInfo:{},
            currentTime:0,
            duration:0
        }
    },
    components:{
        LRC
    },
    props:{
        songid:{
            type:[String,Number],
            required:true
        }
    },
    mounted(){
        this.$api.getMusicPlayer({
            method:"baidu.ting.song.play",
            songid:this.songid
        }).then(res =>{
            this.songInfo = res.data;
            // 定时器，最后执行
            // setTimeout(() =>{
            //     this.addEventHandle();
            // })
            // 数据拿到了，不代表页面被更新了
            this.$nextTick(() =>{
                // DOM更新了
                this.addEventHandle();
            })
        })
    },
    beforeDestroy(){
        /**
         * 1.销毁子组件
         * 2.接触时间绑定
         * 3.移除定时器
         */
        this.removeEventHandle();
    },
    methods:{
        addEventHandle(){
            this.$refs.player.addEventListener("timeupdate",this.currentTimeHandle)
            this.$refs.player.addEventListener("canplay",this.durationHandle)
        },
        removeEventHandle(){
            this.$refs.player.removeEventListener("timeupdate",this.currentTimeHandle)
            this.$refs.player.removeEventListener("canplay",this.durationHandle)
        },
        currentTimeHandle(event){
            this.currentTime = this.$refs.player.currentTime
        },
        durationHandle(event){
            this.duration = this.$refs.player.duration
        }
    }
}
</script>
<style scoped>
.header {
    padding: 15px;
}

.music-info {
    flex: 1;
    font-size: 20px;
}

.title {
    display: flex;
    text-align: center;
}

.left {
    font-size: 30px;
}

.ca {
    color: red;
}

.right {
    font-size: 30px;
}

.song-info {
    padding: 15px;
}

.song-info-img {
    text-align: center;
}

.song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
    margin-top: 10px;
    min-height: 50px;
}

.iconbox {
    display: flex;
    margin-top: 30px;
}

.iconbox .box {
    flex: 1;
}

.song {
    width: 100%;
    text-align: center;
}

.song audio {
    width: 80%;
}

.active {
    color: #222;
}

.author {
    font-size: 12px;
    color: #999;
}
</style>