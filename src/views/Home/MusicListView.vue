<template>
    <div class="collection-block">
        <div class="block-padding">
            <div class="title">
                <h3>{{ title }}</h3>
                <a href="#">更多</a>
            </div>
            <div class="list clearfix">
                <!-- 
                    不需要：0 2 3 5
                    需要的：1 4

                    对3进行取余：0 2 3 5 true
                    1 4 -> 1 -> false
                 -->
                <router-link 
                    :to="{name:'Player',params:{songid:item.song_id}}"
                    class="item"
                    v-for="(item,index) in musiclist"
                    :key="index"
                    :class="{'clear-padding' : index%3 !== 1}"
                >
                    <div class="img-warpper">
                        <img :src="item.pic_big" alt="">
                    </div>
                    <div class="main">{{ cutString(item.title) }}</div>
                    <div class="gray">{{ cutString(item.author) }}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"MusicListView",
    data(){
        return{
           
        }
    },
    props:{
        musiclist:{
            type:Array,
            default:function(){
                return []
            }
        },
        title:{
            type:String,
            default:"歌曲帮"
        }
    },
    methods:{
        cutString(str){
            if(str.length > 8){
                return str.substring(0,8)+"..."
            }
            return str;
        }
    }
}
</script>
<style scoped>
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
}

.list {
    width: 100%;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
}

.clear-padding {
    padding: 0 !important;
}

.main {
    margin-top: 4px;
    font-size: 12px;
}

.gray {
    font-size: 12px;
    color: #999;
}

.btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
}
</style>