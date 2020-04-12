<template>
    <div class="lrcContainer">
        <div class="lrc" ref="lrc">
            <!-- 
                time[8] > currentTime <  time[8+1]
                allKeys[index] > currentTime < allKeys[index+1]
                currentTime < allKeys[index+1]  currentTime > allKeys[index]
             -->
            <!-- <p v-if="currentTime > allKeys[index] && currentTime <allKeys[index+1]" class="lrc-p" v-for="(item,name,index) in lrcs" :key="index">{{ item }}</p> -->
            <p :class="{ 'active' :currentTime > allKeys[index] && currentTime <allKeys[index+1]}" class="lrc-p" v-for="(item,name,index) in lrcs" :key="index">{{ item }}{{ scrollLRC(index) }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"LRC",
    data(){
        return{
            lrcs:[],
            allKeys:[]
        }
    },
    props:{
        songid:{
            type:[String,Number],
            required:true
        },
        currentTime:{
            type:Number,
            required:true
        },
        duration:{
            type:Number,
            required:true
        }
    },
    mounted(){
        this.$api.getMusicLRC({
            method:"baidu.ting.song.lry",
            songid:this.songid
        }).then(res =>{
            this.filterLrc(res.data)
        })
    },
    methods:{
        /**
         *                        33   <    33~39    >     39
         * 当前正在播放的时间：  time[8] < currentTime >  time[8+1]
         * {
         *  27: "怎么去拥抱 一夏天的风" 
         *  33: "天上的星星笑地上的人"  time = 33
         *  39: "总是不能懂不能觉得足够" time+1 =  39
         *  51: "如果我爱上 你的笑容"
         * }
         * 
         *  [00:21.11]怎么去拥有 一道彩虹
         *  [00:21:11]怎么去拥有 一道彩虹
         */
        /**
         * "get1_install2_app3_list4_by5_android6”
         * （每个单词后面总会携带一个数字，只有偶数才删掉），
         * 我不用循环只用正则怎么实现输出"get1InstallApp3ListBy5Android"？
         */
        filterLrc(values){
            if(!values.lrcContent)return;
            var lrc = {};
            var lyrics = values.lrcContent.split("\n");
            var reg = /\[\d*:\d*(\.|:)\d*]/g;
            for(var i = 0;i<lyrics.length;i++){
                var timeRegArr = lyrics[i].match(reg);
                if(!timeRegArr) continue; // 跳过null
                 // 获取时间
                var t = timeRegArr[0];
                // 正则匹配
                var min = parseInt(t.match(/\[\d*/i).toString().slice(1));
                var sec = parseInt(t.match(/\:\d*/i).toString().slice(1));
                // 完整时间
                var time = min * 60 + sec;
                // 获取歌词内容
                var content = lyrics[i].replace(timeRegArr,"");
                lrc[time] = content;
            }
            this.lrcs = lrc;
            this.getAllKeys(lrc);
        },
        getAllKeys(lrcArr){
            for(var key in lrcArr){
                this.allKeys.push(key);
            }
        },
        scrollLRC(index){
            if(this.currentTime > this.allKeys[index] && this.currentTime <this.allKeys[index+1]){
                this.$refs.lrc.style.top = -30 * (index - 2) + "px";
            }
        }
    }
}
</script>
<style scoped>
.active {
    color: red;
}

.lrcContainer {
    width: 100%;
    height: 150px;
    overflow: scroll;
    position: relative;
}

.lrc {
    width: 100%;
    position: absolute;
    top: 0;
}

.lrc-p {
    height: 30px;
    line-height: 30px;
}

.up30 {
    margin-top: -30px;
}
</style>