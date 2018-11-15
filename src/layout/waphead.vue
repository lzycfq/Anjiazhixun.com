<template>
	<!--navhead-->
		<div class="HeadNav">
			<div class="Headserach">
				<a class="navbg"></a>
				<form class="search-form" action="">
				<input id="search-form-input" class="search" type="text" name="q" placeholder="风衣" data-query-word="风衣">
            </form>
               <a class="cart"  href=""></a>

			</div>
		</div>
</template>

<script>
</script>

<style>
	 .HeadNav{
			width:100%;
			height: 50px;
			border-bottom: #eaeaea 1px solid;
		}
	 .HeadNav .Headserach{
		 width: 92%;
		 height: 40px;
		 margin: 0 auto;
		position: relative;
		top: 8px;
		overflow: hidden;
		}
	.HeadNav .Headserach .navbg{
		background: url(../../static/img/moblie-icon/nav.png) no-repeat center;
	    background-size: 1.5rem auto;
		display: inline-block;
		 position: relative;
		 top: -5px;
    width: 1.5rem;
    height: 100%;
	float: left;
	}
	.HeadNav .Headserach .search-form{
	
    width: auto;
    display: block;
	float: left;
    margin-left: 4vw;
    	overflow: hidden;
	}
	
		.HeadNav .Headserach .search-form .search{
    width:290px;
    padding-left: 1.5rem;
    height: 2rem;
    font-size: 0.24rem;
    color: #999;
    border: none;
    background: #eee url(../../static/img/moblie-icon/serach.png) no-repeat 0.15rem center;
    background-size: 1.2rem auto;
    border-radius: 0.06rem;
	}
	.HeadNav .Headserach .cart{
		display: inline-block;
    width:44px;
    background-size: 1.2rem auto;
    background: url(../../static/img/moblie-icon/weilogo.png) no-repeat center;
    background-size: 1.45rem auto;
  float: right;
   position: relative;
		 top: -4px;
    height: 100%;}
</style>