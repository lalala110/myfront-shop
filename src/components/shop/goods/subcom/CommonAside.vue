<template>

    <div class="left-220">
        <ul class="side-img-list">
        123
            <li v-for="(item, i) in goodslist" :key="item.id">
                <div class="img-box">
                    <label>{{ i + 1 }}</label>
                    <img :src="item.img_url">
                </div>
                <div class="txt-box">
                    <a href="/goods/show-98.html">{{ item.title }}</a>
                    <span>{{ item.add_time | date }}</span>
                </div>
            </li>
        
        </ul>
    </div>
</template>

<script>
    export default {
      
        props: ['goodslist'],
    
        filters: {
         
            date(tplDate) {
                let date = new Date(tplDate);
                return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            }
        },
        created(){
            console.log(this.goodslist)
        }
    }
</script>

<style scoped>
</style>