<template>
	<div>
    <div class="col-large push-top">
        <h1>{{thread.title}}</h1>

					<router-link
						:to="{name: 'ThreadEdit', id: this.id}"
						class="btn-green btn-small"
						tag="button"
					>
						Edit Thread
					</router-link>
				
				<p>
					By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt"/>
					<span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">{{repliesCount}} replies by {{contributorsCount}} contributors</span>
				</p>
				<PostList :posts="posts"/>
				<PostEditor
					:threadId="id"
				/>
    </div>
  </div>
</template>

<script>	
	import PostList from '@/components/PostList'
	import PostEditor from '@/components/PostEditor'
	export default {
		components: {
			PostList,
			PostEditor
		},

		props: {
			id: {
				required: true,
				type: String
			}
		},

		computed: {
			thread () {
				return this.$store.state.threads[this.id]
			},

			repliesCount () {
				return this.$store.getters.threadRepliesCount(this.thread['.key'])
			},

			contributorsCount () {
				// find the replies
				const replies = Object.keys(this.thread.posts)
					.filter(postId => postId !== this.thread.firstPostId)
					.map(postId => this.$store.state.posts[postId])
				// get user ids
				const userIds = replies.map(post => post.userId)
				// count unqiue ids
				return userIds.filter((item, index) => index === userIds.indexOf(item)).length

			},

			posts () {
				const postIds = Object.values(this.thread.posts)
				return Object.values(this.$store.state.posts)
					.filter(post => postIds.includes(post['.key']))
			}
		}
	}
</script>

<style scoped>

</style>