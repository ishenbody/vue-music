module.exports = {
    devServer:{
        proxy:{
            "/baidu_music_api":{
                target:"http://tingapi.ting.baidu.com/",
                pathRewrite:{ // 重写路径
                    "^/baidu_music_api":""
                },
                changeOrigin:true // 允许跨域
            },
        }
    }
}