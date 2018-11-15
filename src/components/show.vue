<template>
	<div id="allbanner">
		<div class="swiper-container headswiper">
			<div class="swiper-wrapper">

				<div class="swiper-slide" v-for="(item,index) in bannerlist">
					<img :src="item.picurl" />
				</div>

			</div>

			<div class="swiper-pagination"></div>
		</div>
		<!-- 广告+标题-->
		<div id="Anjia-second">
			<div class="second-xiangxi">
				<p class="xiangxi-line" v-for="(item,index) in guangao"><strong class="second-xiangxi-strong">{{item.biaotiname}}</strong><button>{{item.button1}}</button><button>{{item.button1}}</button><button>{{item.button1}}</button></p>
				<div class="dongtai">
					<div class="guanggao" v-for="(item,index) in guangaolunbo">
						<ul>
							<li>
								<a style="text-decoration: none;color: black;">{{item.listwenzi}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--广告结束-->
		<!--视频-->
		<div v-if="true">
			<div class="m" v-for="(item,index) in wapvideo">
				<video controls x5-playsinline="" playsinline="true" webkit-playsinline="true" x-webkit-airplay="true" x5-video-player-type="h5" x5-video-player-fullscreen="" x5-video-orientation="portraint">
					<source :src="item.video" type="video/webm" />
				</video>
			</div>
		</div>
		<!--视频结束-->
		<div class='LBall' v-for="(loupan,index) in loupans">
			<!-- 1:楼盘商品介绍 -->
			<div v-if="loupan.type == 1">
				<div class='anjia-loupanjieshao'>
					<div class='maidian-thought-1'>&nbsp;{{loupan.loupanbiaoti}}&nbsp;</div>
					<div class='anjia-wenzi'>{{loupan.loupanwenben}}</div>
					<div class='anjia-image'><img :src='loupan.images' /></div>
				</div>
			</div>
			<!-- 1:楼盘商品介绍结束 -->
			<!--按钮组件-->
			<div class='tantou' v-else-if="loupan.type == 2">
				<div class='tantou-xinxi'>
					<button class='tantou-lejie'>{{loupan.lejie}}</button>
					<button class='tantou-bodas' catchtap='phone'>{{loupan.yuyue}}</button>
				</div>
				<div class='tantou-xinxi'>
					<form id="yuyueSubmit" method="get" action="">
						<input type="number" class="yuyuephone" name="yuyuephone" placeholder="输入您电话" id="yuyuephone" maxlength="11" />
						<button type='submit' class='yuyuebtn'>{{loupan.boda}}</button>
					</form>
				</div>
			</div>
			<!--按钮组件结束-->
		</div>
		<!--	商品列表结束-->
		<!--底层轮播户型图-->
		<div class="swiper-container footerswiper">
			<div class="swiper-wrapper">

				<div class="swiper-slide" v-for="(item,index) in footerlist">
					<div class='anjia-table'>
						<div class='table-nr'>
							<div class='left'>
								<div class='table-wenzi'>类型：{{item.leixing}}</div>
								<div class='table-wenzi'>房型：{{item.fangxing}}</div>
								<div class='table-wenzi'>面积：{{item.mianji}}</div>
							</div>
							<div class='right'>
								<div class='table-wenzi'>特点：{{item.tedian1}}</div>
								<div class='table-wenzi'>特点：{{item.tedian2}}</div>
								<div class='table-wenzi'>特点：{{item.tedian3}}</div>
							</div>
						</div>
					</div>
					<img class="anjia-tables" :src="item.images" />
				</div>

			</div>

			<div class="swiper-button-prev  swiper-button-black footerprev"></div>
			<div class="swiper-button-next   swiper-button-black footerprev"></div>
		</div>

		<div id="Anjia-maidian-5">
			<button class="yuyueinput-2">
			<a>想要了解更多房源和优惠信息？</a>
		</button>
			<button class="yuyueajax-2" onclick="dialing($(this))" rel="了解更多">
			现在拨打
		</button>
		</div>
		<!--结束-->
		
		<!--底部栏目-->
		<footer id="Anjia-footer">

			<div class="Anjia_footer-1" id="tanchubutie"><b class="b1"><img src="/../../static/img/moblie-icon/icon/icon-看房补贴.png"></b></div>

			<div class="Anjia_footer-1" id="tanchuliuyan"> <b class="b2"><img src="/../../static/img/moblie-icon/icon/icon-留言咨询.png"></b></div>
			<div class="Anjia_footer-1" onclick="ShowDiv('MyDiv_1','fade_1')"><b class="b3"><img src="/../../static/img/moblie-icon/icon/icon-查看户型.png"></b></div>
			<div class="Anjia_footer-2" align="center" onclick="dialing($(this))" rel="底部拨打电话">
				<b class="b4"><img src="/../../static/img/moblie-icon/icon/icon-免费拨打电话.png"><span>一键拨打</span></b>

			</div>

		</footer>
		<!--	看房补贴弹窗-->
		<div id="butie">
			<div class="butie-a">

				<p align="right" id="butie-guanbi" style="margin-right: 5%; font-weight: 600;font-size: 17px;">x</p>
				<form method="post" action="" id="kanfangbutie">
					<p><label>电话</label> ： <input type="text" class="maifang-phone" name="phone" placeholder="必填 " id="maifang-phone" required data-rule-mobile="true" data-msg-required="请输入手机号" data-msg-mobile="请输入正确格式" /></p>
					<p><label>姓名</label> ： <input type="text" class="maifang-name" name="name" required="" placeholder="请输入姓名" id="maifang-name">
						<input type="radio" class="sex" name="sex" value='男' checked style="display: none;" /><label style="display: none;">男</label>
						<input type="radio" class="sex" name="sex" value="女" style="display: none;" /><label style="display: none;">女</label>
					</p>
					<p>看房补贴：
						<a>50元看房现金红包</a>
					</p>
					<p>领取提示：
						<a>请正确填写您的姓名和手机号码，点击确定后，生成看房补贴二维码，请截图或保存好该二维码，我们有专人跟您联系。</a>
					</p>

					<p><input type="button" value="确定" class="butieAjax" name="butieAjax" id="butieAjax" onclick="houseAllowance($(this))"></p>
				</form>
				<p align="center"><img src="/../../static/img/erweima.png" class="butie-erweima"></p>
				<p align="center">
					<a>看房专属二维码补贴</a>
				</p>
			</div>
		</div>
		<!--留言补贴-->
		<div id="liuyan">

			<div class="liuyan-a">
				<form method="post" id="liuyanForm">
					<p align="right" id="liuyan-guanbi" style="margin-right: 5%; font-weight: 600;font-size: 17px;">x</p>

					<p><label>电话</label> ： <input type="text" class="liuyan-phone" name="phone" placeholder="请输入电话 " id="liuyan-phone" data-rule-mobile="true" data-msg-required="请输入手机号" data-msg-mobile="请输入正确格式" required /></p>
					<p><label>姓名</label> ： <input type="text" class="liuyan-name" name="name" placeholder="请输入姓名" id="liuyan-name" required>
						<input type="radio" name="sex" value='male' style="display: none;" /><label style="display: none;">男</label>
						<input type="radio" name="sex" value="female" style="display: none;" checked/><label style="display: none;">女</label></p>

					<p><label class="liuyan-lab">咨询内容：</label><textarea name="content" id="liuyan-text" rows="5" cols="30" required></textarea></p>
					<p>温馨提示：请正确填写您的姓名和手机号码，点击确定后，非晚间时间23:00-次日7:00，我们1小时内有专人跟您联系。</p>
					<p><input type="button" value="确定" class="liuyanAjax" name="liuyanAjax" id="liuyanAjax" onclick="houseConsultation($(this))" rel="看房咨询"></p>
				</form>
			</div>
		</div>
		<!--查看户型-->

		<div id="fade_1" class="black_overlay">
		</div>
		<div id="MyDiv_1" class="white_content">
			<div style="text-align: right; cursor: default; line-height: 30px; height: 30px;">
				<span style="font-size: 16px; float: right; margin-right: 5px; color: black;" onclick="CloseDiv('MyDiv_1','fade_1')">关闭</span></p>
			</div>
			<div class="swiper-container swiper-container3">
				<div class="swiper-wrapper">

					<div class="swiper-slide" v-for="(tchuxing,index) in tanchuxing">
						<div class="wenzi-huxing">

							<p class="dandu">产品：{{tchuxing.huxingleixing}}</p>
							<p align="left" style="font-size: 1.2em;">户型面积：约{{tchuxing.mianji}}
								<a></a>m²</p>
							<p align="left" style="font-size: 1.2em;">户型特点：约{{tchuxing.huxingtedian}}
								<a>
								</a>
							</p>
							<div class="huxing-img-1">
								<img :src="tchuxing.huxingimage">
							</div>
						</div>

					</div>

				</div>
				<div class="swiper-button-next swiper-button-black gd next"></div>
				<div class="swiper-button-prev swiper-button-black gd prev"></div>
			</div>
		</div>

	
<!--show拨打div-->
<div id="boda">
	<div class="dianhua"><a class="bdcolor" href="tel:4000000" style="text-decoration: none; color: white;">4000000</a><img id="close" src="../../static/img/moblie-icon/icon/close.png"/></div>
	<div id="bodas"><a class="bdcolor" href="tel:4000000" style="text-decoration: none; color: black;">拨打</a></div>
</div>

	</div>
</template>


<script>
	import '../../static/css/wapshowcss.css'
	export default {

		name: 'app',

		data() {
			return {
				bannerlist: [],
				guangao: [],
				guangaolunbo: [],
				wapvideo: [],
				loupans: [],
				footerlist: [],
				tanchuxing:[]

			}
		},
		created() {
			this.datalunbo();
			this.databiaoti();
			this.dataguangaolunbo();
			this.datashiping();
			this.dataloupans();
			this.datafooterlist();
			this.datatanchuxing();
		
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
			},
//			标题+按钮
			databiaoti(){ //正确
			  var that=this
				axios.get('/api/json/biaoti.json').then(res => {
					that.guangao = res.data //请求出来的标题加三个按钮数据	
				}).catch(function(error) {
					console.log(error);
				})
			},
//			动态轮播广告
			dataguangaolunbo(){ //正确
			  var that=this
				axios.get('/api/json/wenlunbo.json').then(res => {
					that.guangaolunbo = res.data //请求出来的动态广告数据	
				}).catch(function(error) {
					console.log(error);
				})
			},
			//			视频
			datashiping(){ //正确
			  var that=this
				axios.get('/api/json/datashiping.json').then(res => {
					that.wapvideo = res.data //请求出来的视频数据	
				}).catch(function(error) {
					console.log(error);
				})
			},
			dataloupans(){
				 var that=this
				axios.get('/api/json/LP.json').then(res => {
					that.loupans = res.data //请求出来的商品列表数据	
				}).catch(function(error) {
					console.log(error);
				})
			},
			datafooterlist(){
				 var that=this
				axios.get('/api/json/huxing.json').then(res => {
					that.footerlist = res.data //请求出来的底部户型图数据	
				}).catch(function(error) {
					console.log(error);
				})
			},
			
			
			datatanchuxing(){
				 var that=this
				axios.get('/api/json/tedian.json').then(res => {
					console.log(res)
					that.tanchuxing = res.data //请求出来的底部户型图数据	
				}).catch(function(error) {
					console.log(error);
				})
			},
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
			new Swiper('.footerswiper', {
				pagination: {
					el: '.swiper-pagination',
				},

				loop: true,
				autoplay: {
					delay: 4000,
					stopOnLastSlide: false,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				observer: true, //很重要

			})
			new Swiper('.swiper-container3', {
				

				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-p2',
					clickable: true,
				},
				navigation: {
					nextEl: '.next',
					prevEl: '.prev',
				},
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true, //修改swiper的父元素时，自动初始化swiper
				spaceBetween: 30,
				centeredSlides: true,
			});
 
 	        
           
 
 
		}
		

	}
</script>