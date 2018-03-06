<template>
    <div>
        <!-- 面包屑导航 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link to="">首页</router-link>
                <router-link to="">购物商城</router-link>
            </div>
        </div>
    <div class="section">
    <div class="wrapper">
        <div class="wrap-box">
            <!--类别菜单-->
            <div class="left-220" style="margin:0;">
                <div class="banner-nav">
                    <ul>
                    <!--此处声明下面可重复循环-->
                     
                        <li v-for="item in top.catelist" :key="item.id">
                            <h3>
                                <i class="iconfont icon-arrow-right"></i>
                                <span>{{item.title}}</span>
                                <!-- <p>
                                 
                                    手机通讯
                                 
                                    摄影摄像
                                 
                                    存储设备
                                 
                                </p> -->
                               <p>
                                   <span v-for="subItem in item.subcates" :key="subItem.id"> {{subItem.title}} &nbsp;</span>
                               </p>
                            </h3>
                            <!-- 鼠标弹出层 -->
                            <div class="item-box">
                                        <dl>
                                            <dt><a href="/goods/40.html">{{ item.title }}</a></dt>
                                            <dd>
                                                <router-link to="" v-for="subitem in item.subcates" :key="subitem.id">{{ subitem.title }}&nbsp;</router-link>
                                            </dd>
                                        </dl>
                                    </div>
                        </li>
                     
                     
                    </ul>
                </div>
            </div>
            <!--/类别菜单-->
             
            <!--幻灯片-->
             <div class="left-705">
                        <div class="banner-img">
                            <el-carousel style="height: 100%">
                                <el-carousel-item v-for="item in top.sliderlist" :key="item.id">
                                    <img :src="item.img_url" :alt="item.title">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
            <!--/幻灯片-->
             
             <!-- 商品详情的列表 -->
           <app-aside :goodslist="top.toplist" ></app-aside>
        </div>
    </div>
</div>

  
    <list-main></list-main>
    </div>
</template>

<script>
  import appAside from "./subcom/CommonAside.vue"
  import listMain from "./subcom/ListMain.vue"
    export default {
    data() {
        return {
            top:{
                    catelist: [],
                    sliderlist: [],
                    toplist: []
                  

            }
        }
    },
    components: {
        appAside,
        listMain
    },
    methods:{
        getGoodsList(){
            this.$axios.get(this.$api.goodsTop).then((res)=>{
                
                   if(res.data.status == 0) {
                        this.top = res.data.message;
                        // console.log(this.top);
                    }
            })
        }
    },
    created(){
        this.getGoodsList();
        
    }
    }
</script>

<style scoped>

</style>