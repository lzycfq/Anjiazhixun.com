<template>
	<div class="MOGUJIE">
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
		<!--轮播-->
		<div class="swiper-container headswiper">
			<div class="swiper-wrapper">

				<div class="swiper-slide" v-for="(item,index) in bannerlist">
					<img :src="item.picurl" />
				</div>

			</div>

			<div class="swiper-pagination swiper-pagination-head"></div>
		</div>
		<!--菜单导航-->
		<div class="caidannav">
			<div class="m_nav">
					<a href="javascript:void(0);" id="msg_bijia"><img src="https://s10.mogucdn.com/mlcdn/c45406/180731_4hi3fb9jil564ae43l0a3ckdjb2f2_150x150.jpg_640x640.v1cAC.40.webp"><span>充值中心</span></a>
					<a href="javascript:void(0);" id="msg_bijia"><img src="https://s10.mogucdn.com/mlcdn/c45406/181012_4i9lf8g0jbibeff7j1k30jhdjdi9h_150x150.jpg_640x640.v1cAC.40.webp"><span>29元任选</span></a>
					<a href="javascript:void(0);" id="msg_bijia"><img src="https://s10.mogucdn.com/mlcdn/c45406/180925_49k9a7d17il0jakh8e9kh4e728iid_150x150.jpg_640x640.v1cAC.40.webp"><span>限时抢购</span></a>
					<a href="javascript:void(0);" id="msg_bijia"><img src="https://s10.mogucdn.com/mlcdn/c45406/180925_856ibaled2043iblg1320be5ld94a_150x150.jpg_640x640.v1cAC.40.webp"><span>人气女装</span></a>
					<a href="javascript:void(0);" id="msg_bijia"><img src="https://s3.mogucdn.com/mlcdn/c45406/171128_520075a1kdfcec662f0d1he68k06l_150x150.png_640x640.v1cAC.40.webp"><span>签到有礼</span></a>
					<a href="javascript:void(0);" id="msg_bijia"><img src="https://s10.mogucdn.com/mlcdn/c45406/180925_22i4d2i1gla3hdh5c8hle591be3ba_150x150.jpg_640x640.v1cAC.40.webp"><span>当季热卖</span></a>
					<a href="javascript:void(0);" id="msg_bijia"><img src="https://s10.mogucdn.com/mlcdn/c45406/180925_7fi5e5i52d2868c7j4584e875lkbh_150x150.jpg_640x640.v1cAC.40.webp"><span>内衣百货</span></a>
					<a href="javascript:void(0);" id="msg_bijia"><img src="https://s10.mogucdn.com/mlcdn/c45406/180925_8fkbjakj5e69ikc3kd0l0e7lk67b9_150x150.jpg_640x640.v1cAC.40.webp"><span>TOP鞋包</span></a>
					<a href="javascript:void(0);" id="msg_bijia"><img src="https://s10.mogucdn.com/mlcdn/c45406/180925_4i1i13klide6a5jdh3c1190gk956k_150x150.jpg_640x640.v1cAC.40.webp"><span>美妆个护</span></a>
					<a href="javascript:void(0);" id="msg_bijia"><img src="https://s10.mogucdn.com/mlcdn/c45406/180925_1a9lcke5g1d5hf35idkai39alhki4_150x150.jpg_640x640.v1cAC.40.webp"><span>9.9专区</span></a>
					
				</div>

		</div>
		
	<!--	列表-->
	<div class="mglist">
		<div class="listnav">
			<a>发现</a>
			<a>关注</a>
			<a>流行</a>			
		</div>
		<div class="listfind">
			<div class="touxiang">
				<div class="imgleft"><img src="../../static/img/moblie-icon/headtouxiang.jpg"></div>
				<div class="touxiangright">
					<p class="txtitile">三百岁仙女</p>
					<p class="txjieshao"><em class="txshengao">160</em> <em>cm</em> <em class="txshengao">43</em> <em>kg</em> | 长沙 | 工程师</p>
				</div>
			</div>
			<div style="clear: both;"></div>
			<div class="shangpingjieshao">今天份的秋梨炖好了🍐好面料自然会说话内搭和大衣都是基本款、纯色款深棕色🏿配缎面粉光泽感十足，万年不过时～#丢掉黑白灰，来一剂撞色调味##怎么大风越狠，我裙摆越浪##极简才不是随便穿穿#</div>
		    
		</div>
		<div class="showimg">
		    	<a class="left"><img src="https://s5.mogucdn.com/mlcdn/c45406/181115_6ag6ahc8hjlig031911571702df85_772x1287.jpg_500x9999.v1c7E.70.webp"/><span class="dianzan"><img src="../../static/img/moblie-icon/dianzan.png">&nbsp;28W</span></a>
		    	<a class="center"><img src="https://s11.mogucdn.com/mlcdn/c45406/181113_5kjd1h04lfd4jegh8d3jigc0fdlfh_1080x1625.jpg_500x9999.v1c7E.70.webp"><span class="dianzan"><img src="../../static/img/moblie-icon/dianzan.png">&nbsp;28W</span></a>
		    	<a class="right"><img src="https://s11.mogucdn.com/mlcdn/c45406/181115_6e3fk902g406kgbgd2i6h574a8i60_857x1430.jpg_500x9999.v1c7E.70.webp"><span class="dianzan"><img src="../../static/img/moblie-icon/dianzan.png">&nbsp;28W</span></a>
		    </div>
		    <div class="swiper">
            <ul>
            	<li><img src="https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_999x999.v1c0.100.webp"/>&nbsp;&nbsp;COVER</li>
            	<li><img src="https://s3.mogucdn.com/mlcdn/0ffcd9/180723_251aje33k834bd72g1232l401g4jk_634x566.png_600x9999.v1c7E.webp"/>&nbsp;&nbsp;NIKE</li>
            	<li><img src="https://s3.mogucdn.com/mlcdn/0ffcd9/180914_3k871iejdde5d5l10bgje317bebl6_243x242.png_999x999.v1c0.100.webp"/>&nbsp;&nbsp;KITAYAMA</li>
            	<li><img src="https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_999x999.v1c0.100.webp"/>&nbsp;&nbsp;ShakeSnake</li>
            	<li><img src="https://s11.mogucdn.com/mlcdn/0ffcd9/180830_4k22572djbj362c99di9ef3ilk7b4_310x310.png_999x999.v1c0.100.webp"/>&nbsp;&nbsp;茉莉</li>
            	
            	
            	
            </ul>
		    
	</div>
	</div>
	
		<div class="footer">
			<a style="text-align: center; color:#FB7D79;">首页</a>
				<a style="text-align: center;">商城</a>
				<a style="text-align: center;">直播</a>
				<a style="text-align: center;">我</a>
			</ul>
		</div>
	</div>
</template>
<script>

	import '../../static/css/MOGUJIE.css'
	export default {

		name: 'app',

		data() {
			return {
				bannerlist: [],
				

			}
		},
		created() {
			this.datalunbo();
			
		
		},
	
		methods: {
//			头部轮播axios
			datalunbo(){ //正确
			  var that=this
				axios.get('/api/json/lunbo.json').then(res => {
					that.bannerlist = res.data //请求出来的轮播图数据	
				}).catch(function(error) {
					console.log(error);
				})
			}
},
		
		mounted: function() {
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},

				loop: true,
				autoplay: {
					delay: 4000,
					stopOnLastSlide: false,
					disableOnInteraction: false,
				},

				observer: true, //很重要

			})
		
 	          var swiper = new Swiper('.sp', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
           
 
 
		}
		

	}
</script>
