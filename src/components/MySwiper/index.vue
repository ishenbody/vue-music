<template>
    <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in imgs" :key="index">
                <img :src="item" alt />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
</template>

<script>

export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination"
                }
            }
        };
    },
    props:{
        imgs:{
            type:Array,
            default:function(){
                return []
            }
        }
    }
};
</script>