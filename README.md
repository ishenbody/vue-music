# vue-music

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 组件的分类
    1.智能组件：获取数据，处理数据，响应业务
    2.木偶组件：展示效果
    3.每次回到首页的渲染问题：
        1.首页每次进入或者每次回到首页，都需要重新刷新
            新闻、视频类等，数据更新特别快的场景
        2.首页第一次进入获取数据，之后再次进入就是读取缓存
            数据更新不快。没必要每次进入重新获取
    4.缓存增加：keep-alive 会增加两个生命周期函数