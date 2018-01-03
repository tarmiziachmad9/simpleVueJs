<template>
  <div class="wallpaper-list">
	  <h1>Index Wallpapers</h1>

	  <div v-for="wallpaper in getList.slice(0,15)" class="wallpaperbox">
	  	<div class="media">
	  		<img :src="wallpaper.thumbnailUrl">
	  	</div>
	  	<div class="media-body">
	  		<h2><router-link :to="{name: 'wallpaper.single', params: {id: wallpaper.id}}">{{ wallpaper.title }}</router-link></h2>
	  	</div>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'Wallpapers', // name of Component
  data() {
  	return {
  		getList: ''
  	}
  },

  created: function () {
     this.fetchData();
  },        

  methods: {
    fetchData: function () {
        this.$http.get('https://jsonplaceholder.typicode.com/photos/')
        	.then(response => {
        		this.getList = response.data
        	})

    }
  }

}
</script>

<style scoped>
.wallpaper-list {
	width: 100%;
	max-width: 700px;
	margin: auto;
}
.wallpaper-list h1 {
	text-align: center;
}
.wallpaper-list .wallpaperbox	{
	text-align: left!important;
	position: relative;
	width: 100%;
	background-color: #f2f2f2;
	margin-bottom: 10px;
}
.wallpaper-list .wallpaperbox .media {
	padding-right: 10px;
}
.wallpaper-list .wallpaperbox .media, .wallpaper-list .wallpaperbox .media-body {
	display: table-cell;
	vertical-align: top;
}
.wallpaper-list .wallpaperbox .media-body h2 {
	max-width: 300px;
	font-size: 1.2rem;
}
</style>