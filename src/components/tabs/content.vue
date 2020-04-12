<script>
export default {
    name:"Content",
    data(){
        return{

        }
    },
    props:{
        showContent:{
            type:Array,
            default:function(){
                return []
            }
        }
    },

    //   <Tab label="导航1" index="1">
    //     <div>内容1</div>
    //   </Tab>
    //   <Tab label="导航2" index="2">
    //     <div>内容2</div>
    //   </Tab>
    //   <Tab label="导航3" index="3">
    //     <div>内容3</div>
    //   </Tab>

    render(){
        return(
            <div>
                {
                    this.showContent.map((element,index) =>{
                        return <div>{ element.active ? element.$slots.default : '' }</div>
                    })
                }
            </div>
        )
    }
}
</script>