<template>
  <div class="wallpaper-list">
	  <h1>Single Page</h1>

	  <div class="wallpaperbox">
	  	<div class="flexbox">
		  	<div>ID {{ singleWallpaper.id }}</div>
		  	<div>Album id {{ singleWallpaper.albumId }}</div>
	  	</div>
	  	<div class="featured-image">
	  		<img :src="singleWallpaper.url" :alt="singleWallpaper.title">
	  	</div>

	  	<h1>{{ singleWallpaper.title }}</h1>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'WallpaperSingle', // Name of Component
  data() {
  	return {
  		singleWallpaper: ''
  	}
  },

  created: function () {
     this.fetchData();
     console.log('route', this.$route.params.id);
  },        

  methods: {
    fetchData: function () {
    	var params = this.$route.params.id;
        this.$http.get('https://jsonplaceholder.typicode.com/photos/'+params)
        	.then(response => {
        		this.singleWallpaper = response.data
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
.wallpaper-list .wallpaperbox h1 {
	text-align: left!important;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
	font-size: 18px;
	text-transform: uppercase;
}
.wallpaper-list .wallpaperbox .featured-image img{
	width: 100%;
	height: auto;
}
.flexbox {
	display: flex;
	display: -webkit-flexbox;
	justify-content: space-between;
}
.flexbox div {
	padding: 20px
}
</style>