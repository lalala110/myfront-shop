<template>
    <div>

        <div class="tab-content" style="display: block;">
            <!--网友评论-->
            <!--取得评论总数 , 记得阻止默认的浏览器刷新提交 -->
            <form id="commentForm" name="commentForm" class="form-box" @submit.prevent="sendComments">
                <div class="avatar-box">
                    <i class="iconfont icon-user-full"></i>
                </div>
                <div class="conn-box">
                    <div class="editor">
                        <textarea id="txtContent" v-model="comments.comments" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                        <span class="Validform_checktip"></span>
                    </div>
                    <div class="subcon">
                        <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                        <span class="Validform_checktip"></span>
                    </div>
                </div>
            </form>

            <ul id="commentList" class="list-box">
                <p v-if="comments.length == 0" style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
                <li v-for="(item, i) in comments" :key="i">
                    <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="inner-box">
                        <div class="info">
                            <span>{{ item.user_name }}</span>
                            <!-- <span>456</span> -->
                            <span>{{ item.add_time }}</span>
                        </div>
                        <p>{{ item.content }}</p>
                    </div>
                </li>
            </ul>
            <!--放置页码-->

            <!--/放置页码-->
        </div>

        <!--/网友评论-->

    </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      comments:"",
      commentext: {
        commentext: ""
      }
    };
  },
  methods: {
    //获取发表评论的列表
    getCommentsList() {
      let url = `${this.$api.commentList}goods/${
        this.id
      }?pageIndex=1&pageSize=10`;
      this.$axios.get(url).then(res => {
        //    console.log(res.data.status)
        if (res.data.status == 0) {
            
          this.comments = res.data.message;
          console.log(this.comments);
        }
      });
    },
    //实现发表评论的功能
       
             
    sendComments() {
       
        // http://139.199.192.48:6060/site/validate/comment/post/goods/102
        //  comment: `/site/validate/comment/post/`,  
         let url = `${this.$api.comment}goods/${
       this.id}`;
        this.$axios.post(url).then((res)=>{
            
            console.log(res);
        })
    }
  },
  created() {
    this.getCommentsList();
    // this.sendComments();
  }
};
</script>

<style scoped>

</style>