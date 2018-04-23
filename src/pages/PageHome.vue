<template>
  <div class="col-full">
    <h1>Welcome To The Forum!</h1>
    <ForumList :forums="forums"/>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data'
import ForumList from '@/components/ForumList'
console.log(sourceData)

export default {
  components: {
    ForumList
  },

  data () {
    return {
      forums: Object.values(sourceData.forums)  ,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

