<template>
    <div>
        <div class="section" v-for="item in Productlist" :key="item.level1cateid">

            <!--子类-->
            <div class="main-tit" >
                <h2>{{item.catetitle}}</h2>
                <p>

                    <a v-for="subitem in item.level2catelist" :key="subitem.subcateid">{{ subitem.subcatetitle }}</a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">

                    <ul class="img-list">
                        <!-- <router-link :to="{name: 'goodsDetail', params: {id: subitem.artID}}"> -->
                        <li v-for="listItem in  item.datas" :key="listItem.artID">
                            <router-link :to="{name: 'goodsDetail', params: {id: listItem.artID}}">
                                <div class="img-box">
                                    <img :src="listItem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{listItem.artTitle}}</h3>
                                    <p class="price">
                                        <b>¥{{listItem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{listItem.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{listItem.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                        <!-- </router-link> -->

                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      Productlist: []
    };
  },
  methods: {
    getGoodsList() {
      this.$axios.get(this.$api.goodsContent).then(res => {
        console.log(res.data.message);
        if (res.data.status == 0) {
          this.Productlist = res.data.message;
        }
      });
    }
  },
  created() {
    this.getGoodsList();
  }
};
</script>

<style scoped>

</style>