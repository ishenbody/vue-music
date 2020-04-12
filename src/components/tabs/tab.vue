<script>
export default {
    name:"Tab",
    props:{
        label:{
            type:String,
            default:"tab"
        },
        index:{
            type:[String,Number],
            default:1
        }
    },
    mounted(){
        // this.$parent.showContent.push(this.$slots.default)
        this.$parent.showContent.push(this)
    },
    computed:{
        // 处理高亮的方法
        active(){
            return this.$parent.currentIndex == this.index
        }
    },
    methods:{
        clickTabHandle(){
            this.$parent.updateCurrentIndex(this.index);
        }
    },
    render(){
        const classStyle = {
            tab:true,
            active:this.active
        }
        // jsx
        return(
            <li onClick={ this.clickTabHandle } class={ classStyle }>{ this.label }</li>
        )
    }
}
</script>
<style scoped>

.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}

</style>