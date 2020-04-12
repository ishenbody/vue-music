<template>
    <div class="home">
        <MusicList />
        <Swiper :imgs="imgs"/>
        <MusicTabs />
    </div>
</template>

<script>
import MusicList from "./MusicList";
import Swiper from "../../components/MySwiper";
import MusicTabs from "./MusicTabs"

export default {
    name: "Home",
    data() {
        return {
            imgs: [
                require("../../assets/img/b1.jpg"),
                require("../../assets/img/b2.jpg"),
                require("../../assets/img/b3.jpg")
            ]
        };
    },
    components: {
        MusicList,
        Swiper,
        MusicTabs
    },
    created(){
        console.log("created");
    },
    mounted(){
        console.log("mounted");
    },
    activated(){
        console.log("activated");
    },
    deactivated(){
        console.log("deactivated");
    }
};
</script>
