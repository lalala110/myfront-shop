<template>
    <div>
        <!-- 导航栏 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link :to="{name:'shop'}">首页</router-link>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a>
                <a href="/goods/42/1.html">商品详情</a>

            </div>
        </div>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box">
                                <!-- 商品放大镜部分 -->
                                <div class="magnifier" id="magnifier1">
                                    <div class="magnifier-container">
                                        <div class="images-cover"></div>
                                        <!--当前图片显示容器-->
                                        <div class="move-view"></div>
                                        <!--跟随鼠标移动的盒子-->
                                    </div>
                                    <div class="magnifier-assembly">
                                        <div class="magnifier-btn">
                                            <span class="magnifier-btn-left">&lt;</span>
                                            <span class="magnifier-btn-right">&gt;</span>
                                        </div>
                                        <!--按钮组-->
                                        <div class="magnifier-line">
                                            <ul class="clearfix animation03">
                                                <li>
                                                    <div class="small-img">
                                                        <img src="images/1.png" />
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        <!--缩略图-->
                                    </div>
                                    <div class="magnifier-view"></div>
                                    <!--经过放大的图片显示容器-->
                                </div>
                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->
                            <div class="goods-spec">
                                <!-- <h1>奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</h1> -->
                                <h1>{{ productDetail.goodsinfo.title}}</h1>
                                <p class="subtitle">{{ productDetail.goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{ productDetail.goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{ productDetail.goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em class="price" id="commoditySellPrice">¥{{ productDetail.goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>

                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">

                                                <el-input-number size="mini" v-model="num"></el-input-number>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{productDetail.goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div class="btn-buy" id="buyButton">
                                                <button class="buy" onclick="cartAdd(this,'/',1,'/shopping.html');">立即购买</button>
                                                <button class="add" onclick="cartAdd(this,'/',0,'/cart.html');">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>

                            </div>
                            <!--/商品信息-->
                        </div>

                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <el-tabs type="border-card">
                                <el-tab-pane label="商品介绍">
                                    <div v-html="productDetail.goodsinfo.content"></div>
                                </el-tab-pane>
                                <el-tab-pane label="商品评论">
                                    <!-- 评论 - 抽取为公共组件, 需要一个id来获取默认的评论列表以及发表评论 -->
                                    <comments :id="id"></comments>
                                </el-tab-pane>
                            </el-tabs>
                        </div>

                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <!-- <app-aside :goodslist="top.hotgoodslist" ></app-aside> -->
                                <app-aside :goodslist="productDetail.hotgoodslist"></app-aside>
                            </div>
                        </div>
                    </div>
                    <!--/页面右边-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//导入放大镜的插件
// import "../../../lib/imgzoom/css/magnifier.css";
// import "../../../lib/imgzoom/js/magnifier";

// import $ from "jQuery";
import appAside from "./subcom/CommonAside.vue";
import comments from "./subcom/Commondialog";
export default {
  data() {
    return {
      num: "",
      productDetail: {
        goodsinfo: {},
        imglist: [],
        hotgoodslist: []
      },
      id: this.$route.params.id
    };
  },
  components: {
    appAside,
    comments
  },
  methods: {
    getproductDetail() {
      this.$axios.get(this.$api.goodsDetail + this.id).then(res => {
        if (res.data.status == 0) {
          this.productDetail = res.data.message;
        }
      });
    }

    //挂载
    //   mounted(){
    //       	var magnifierConfig = {
    // 		magnifier : "#magnifier1",//最外层的大容器
    // 		width : 500,//承载容器宽
    // 		height : 500,//承载容器高
    // 		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
    // 		zoom : 5//缩放比例
    // 	};

    // 	var _magnifier = $().imgzoon(magnifierConfig);
    //   }
  },
  created() {
    console.log(this.$route.params.id);
    this.getproductDetail();
    console.log(this.productDetail.goodsinfo);
  }
};
</script>

<style scoped>

</style>