<template>
    <div>
        <HeadNav />
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
import HeadNav from "../components/HeadNav";
export default {
    name:"Layout",
    components: {
        HeadNav
    }
};
</script>