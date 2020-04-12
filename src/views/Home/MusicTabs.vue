<template>
    <div class="tabs">
        <tabs :currentIndex="currentIndex" @changeCurrentIndex="getCurrentIndex">
            <tab
                v-for="(element,index) in allMusicData"
                :key="index"
                :label="element.billboard.name"
                :index="index+1"
            >
                <div class="panel hotsongs on">
                    <ul class="list">
                        <li 
                            class="song url"
                            v-for="(item,index) in element.song_list"
                            :key="index"
                        >
                            <div class="poster">
                                <img :src="item.pic_big" alt="">
                            </div>
                            <div class="info">
                                <div class="name">{{ item.title }}</div>
                                <div class="author">{{ item.author }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </tab>
        </tabs>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "",
    data() {
        return {
            currentIndex:1,
            allMusicData: []
        };
    },
    created() {
        /**
         * 多并发请求
         */
        function getNewMusic() {
            return axios.get("/baidu_music_api/v1/restserver/ting", {
                params: {
                    method: "baidu.ting.billboard.billList",
                    type: 1,
                    size: 5,
                    offset: 0
                }
            });
        }
        function getHotMusic() {
            return axios.get("/baidu_music_api/v1/restserver/ting", {
                params: {
                    method: "baidu.ting.billboard.billList",
                    type: 2,
                    size: 5,
                    offset: 0
                }
            });
        }
        function getRockMusic() {
            return axios.get("/baidu_music_api/v1/restserver/ting", {
                params: {
                    method: "baidu.ting.billboard.billList",
                    type: 11,
                    size: 5,
                    offset: 0
                }
            });
        }
        axios.all([getNewMusic(), getHotMusic(), getRockMusic()]).then(
            axios.spread((newData, hotData, rockData) => {
                this.allMusicData.push(
                    newData.data,
                    hotData.data,
                    rockData.data
                );
            })
        );
    },
    methods:{
        getCurrentIndex(index){
            this.currentIndex = index
        }
    }
};
</script>
<style scoped>
.tabs {
    padding: 10px;
    background: #fff;
}
.musictop {
    background: #fff;
    padding: 10px;
}

.panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background: #fff;
}

.list {
    padding-top: 0;
    height: 375px;
}

.panel .list li {
    height: 60px;
    border-bottom: 1px solid #eee;
    padding-left: 0;
    display: flex;
    padding-top: 10px;
}

.panel .list li .poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
}

.panel .list li .poster img {
    border: 1px solid #eee;
}
.info {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.info .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
}

.info .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
}

.more-songs {
    color: #999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
}
</style>