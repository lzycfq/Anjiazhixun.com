    function ShowDiv(show_div,bg_div){
            document.getElementById(show_div).style.display='block';
            document.getElementById(bg_div).style.display='block' ;
            var bgdiv = document.getElementById(bg_div);
            bgdiv.style.width = document.body.scrollWidth;
            $("#"+bg_div).height($(document).height());
        };
        //关闭弹出层
        function CloseDiv(show_div,bg_div)
        {
            document.getElementById(show_div).style.display='none';
            document.getElementById(bg_div).style.display='none';
        };

 //看房补贴
            var houseAllowance = function (button) {
                var form = button.parent().parent();
                var phone = form.find('input[name=phone]');
                var element = button.attr('rel');
                var name = form.find('input[name=name]');
                var sex = form.find('input[name=sex]:checked');
                $.ajax({
                    type:"post",
                    url:"{{route('home.customer.store')}}",
                    data:{'phone':phone.val(),'info_type':2,'building_id':"{{$building->id}}",'name':name.val(),'sex':sex.val(),
                        'title':'看房补贴,{{$building->name}}','element':element,'_token':"{{csrf_token()}}"},
                    dataType:'json',
                    success : function(data) {
                        if (data.success){
                            trackEvent('楼盘','展示','看房补贴','留电',element)
                            alert(data.message);
                            window.location.reload();
                        }else{
                            alert(data.message)
                        }
                    }
                });
            };
	

            //买房咨询
            var houseConsultation = function (button) {
                var form = button.parent().parent();
                var phone = form.find('input[name=phone]');
                var content = form.find('textarea[name=content]');
                var element = button.attr('rel');
                $.ajax({
                    type:"post",
                    url:"{{route('home.customer.store')}}",
                    data:{'phone':phone.val(),'info_type':4,'content':content.val(),'title':'买房咨询,{{$building->name}}','building_id':"{{$building->id}}",
                        'element':element,'_token':"{{csrf_token()}}"},
                    dataType:'JSON',
                    success : function(data) {
                        if (data.success){
                            trackEvent('楼盘','展示','','留电',element)
                            alert(data.message);
                            window.location.reload();
                        }else{
                            alert(data.message)
                        }
                    }
                });
            };
		
  //预约电话
        var customer = function (button) {
            var phone = button.parent().find('input[name=phone]');
            var element = button.attr('rel');
            $.ajax({
                type:"post",
                url:"{{route('home.customer.store')}}",
                data:{'phone':phone.val(),'building_id':"{{$building->id}}",'initiative':0,'info_type':1,'title':"{{$building->name}}",
                    'element':element,'_token':"{{csrf_token()}}"},
                dataType:'json',
                success : function(data) {
                    if (data.success){
                        trackEvent('楼盘','展示','{{$building->name}}','留电',element)
                        alert(data.message);
                        window.location.reload();
                    }else{
                        alert(data.message)
                    }
                }
            });
        };

        //手机端直接拨打电话
        var dialing = function (button) {
        	
            var element = button.attr('rel');
            $.ajax({
                type:"post",
                url:"{{route('home.customer.dialing')}}",
                data:{'building_id':"{{$building->id}}",'initiative':1,'info_type':6,'title':"{{$building->name}}",
                    'element':element,'_token':"{{csrf_token()}}"},
                dataType:'json',
                async:true,
                success : function(data) {
                    if (data.success){
                        trackEvent('楼盘','展示','{{$building->name}}','直呼',element);
                        //window.location.href = 'tel:'+ data.service_no;
                    }else{
                        alert(data.message)
                    }
                }
            });

        };
        //预约电话
    var customer = function (button) {
        var phone = button.parent().find('input[name=phone]');
        var element = button.attr('rel');
        $.ajax({
            type:"post",
            url:"{{route('home.customer.store')}}",
            data:{'phone':phone.val(),'building_id':"{{$building->id}}",'initiative':0,'info_type':1,'title':"{{$building->name}}",
                'element':element,'_token':"{{csrf_token()}}"},
            dataType:'json',
            success : function(data) {
                if (data.success){
                    trackEvent('楼盘','展示','{{$building->name}}','留电',element)
                    alert(data.message);
                    window.location.reload();
                }else{
                    alert(data.message)
                }
            }
        });
    };

    //手机端直接拨打电话
	var dialing = function (button) {
		alert("aa")
     document.getElementById("boda").style.display = "block";
		var gb4=document.getElementById("close");
        gb4.onclick=function(){
         document.getElementById('boda').style.display = "none";
         }
	    var element = button.attr('rel');
        $.ajax({
            type:"post",
            url:"{{route('home.customer.dialing')}}",
            data:{'building_id':"{{$building->id}}",'initiative':1,'info_type':6,'title':"{{$building->name}}",
                'element':element,'_token':"{{csrf_token()}}"},
            dataType:'json',
            success : function(data) {
                if (data.success){
                    trackEvent('楼盘','展示','{{$building->name}}','直呼',element);
                    //window.location.href = 'tel:'+ data.service_no;
                }else{
                    alert(data.message)
                }
            }
        });
    }

//底部footer 隐藏打开
var btn1 = document.getElementById("tanchubutie");
var gb1=document.getElementById("butie-guanbi");
var btn2 = document.getElementById("tanchuliuyan");
var gb2=document.getElementById("liuyan-guanbi");



btn1.onclick = function() {

document.getElementById('butie').style.display = "block";
document.getElementById('liuyan').style.display = "none";

};
gb1.onclick=function(){
document.getElementById('butie').style.display = "none";
};
btn2.onclick = function() {
document.getElementById('liuyan').style.display = "block";
document.getElementById('butie').style.display = "none";

};
gb2.onclick=function(){
document.getElementById('liuyan').style.display = "none";
};

//微信分享
  $(function(){
            var share_url=window.location.href.split('#')[0];
            $.ajax({
                url:"{{route('home.wechat.sigAndNon')}}",
                data:{share_url:share_url},
                type: "GET",
                async:true,
                cache: false,
                dataType: "json",
                success: function(data){
                    wx.config({
                        debug: false,
                        appId: 'wxba9f8efc379bae93',
                        timestamp:data.timestamp,
                        nonceStr:data.noncestr,
                        signature:data.signature,
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'hideOptionMenu',
                            'onMenuShareAppMessage'
                        ]
                    });

                    wx.ready(function(){
                        wx.checkJsApi({
                            jsApiList: [
                                'getLocation',
                                'onMenuShareTimeline',
                                'onMenuShareAppMessage'
                            ],
                            success: function (res) {
                                //alert(res.errMsg);
                            }
                        });

                        wx.onMenuShareAppMessage({
                            title: "{{$building->name}}",
                            desc: "{{$building->share_content?$building->share_content:'官方直售，抢先挑好房!'}}",
                            link: "{{URL::full()}}",
                            imgUrl: "{{$building->icon?$building->icon:'http://www.anjiazhixun.com/img/suluetu.jpg'}}",

                            success: function (res) {
                                alert('分享成功啦');

                            },
                            cancel: function (res) {
                                alert('已取消分享到朋友');
                            },
                            fail: function (res) {
                                alert(res.errMsg);
                            }
                        });

                        wx.onMenuShareWeibo({
                            title: "{{$building->name}}", // 分享标题
                            desc: "{{$building->share_content?$building->share_content:'官方直售，抢先挑好房!'}}",
                            link: "{{URL::full()}}", // 分享链接
                            imgUrl: "{{$building->icon?$building->icon:'http://www.anjiazhixun.com/img/suluetu.jpg'}}", // 分享图标
                            success: function () { // 用户确认分享后执行的回调函数
                                alert('分享成功啦');

                            },
                            cancel: function () {
                                alert('已取消分享到微博');

                            }
                        });

                        wx.onMenuShareQZone({
                            title: "{{$building->name}}", // 分享标题
                            desc: "{{$building->share_content?$building->share_content:'官方直售，抢先挑好房!'}}",
                            link: "{{URL::full()}}", // 分享链接
                            imgUrl: "{{$building->icon?$building->icon:'http://www.anjiazhixun.com/img/suluetu.jpg'}}", // 分享图标
                            success: function () {
                                alert('分享成功');

                            },
                            cancel: function () {
                                alert('已取消分享到空间');

                            }
                        });
                        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
                        wx.onMenuShareTimeline({
                            title: "{{$building->name}}",
                            desc: "{{$building->share_content?$building->share_content:'官方直售，抢先挑好房!'}}",
                            link: "{{URL::full()}}",
                            imgUrl: "{{$building->icon?$building->icon:'http://www.anjiazhixun.com/img/suluetu.jpg'}}",

                            success: function (res) {
                                alert('分享成功啦');
                            },
                            cancel: function (res) {
                                alert('已取消分享到朋友圈');
                            },
                            fail: function (res) {
                                alert(res.errMsg);
                            }
                        });

                        wx.error(function (res) {
                            alert(res.errMsg);
                        });
                    });
                },
                error: function() {
                    // alert('ajax request failed!!!!');
                    // return;
                }
            });
        });