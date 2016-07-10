 $(window).on("load",function(){
  $.getJSON('http://count.cyol.com/qm/index.php?callback=?', function(data){
	//alert(data);
	$('title').html('清明祭英烈，共铸中华魂！已有'+data+'位献花者');
  });
  // 音频加载
  var $audio = $('audio');
  if($audio.length > 0){
	$('.music_blk').prepend('<span class="music music_on" ></span>');
  }

  $('.music_blk').on('click', '.music', function(){
	var $t = $(this);
	if(!$t.hasClass('music_on')){
	  $t.addClass('music_on');
	  $audio[0].play();
	} else{
	  $t.removeClass('music_on');
	  $audio[0].pause();
	}
  })
});

 $(function(){
                    $(".click1").click(function(){
                      $(".w1").fadeIn(1);
                      $(".w3").fadeIn(1500);
                      $.getJSON('http://count.cyol.com/qm/index.php?callback=?', function(data){
                        //alert(data);
                        $('title').html('清明祭英烈，共铸中华魂！您是第'+data+'位献花者');
                        $('.num').html(data);
                      });
                    });
                    $(".click2").click(function(){
                      $(".w2").fadeIn(1);
                      $('.msg1').css("top","40%");
                      t1=$('.msg1').css('top');
                      t=parseInt(t1); 
                      //alert(t);
                      h0=$('.msg').height();
                      h1=$('.msg1').height();
                      h=h0-h1;
                      //alert(h);
                      function msg(){  
                      setInterval(function() {
                        if (t>h) {
                          var sd=1;
                          t=t-sd;
                          $('.msg1').css("top",t+"px");
                        };          
                        if(t<=h){
                          t=-1;
                          $('.msg1').css("top",t+"px");
                        };    
                      },40);
                    };
                    msg();
                    });
                    $(".close").click(function(){
                      $(".w1").fadeOut(1);
                      $(".w2").fadeOut(1);
                      $(".w3").fadeOut(1);
                    });
                    $(".submit").click(function(){
                      $.post('post.php',{message:$('#message').val()},function(data){

                      });
                      alert("提交成功，等待审核。");
                      $('#message').val("");
                    });
var a=new Swiper(".swiper-container",{mode:"vertical",onSlideChangeStart:function(){switch(a.activeIndex){case 0:$("#s0").addClass("ani");break;case 1:$("#s1").addClass("ani");break;case 2:$("#s2").addClass("ani"),$("#s2 .wmw").css("opacity","1"),$("#s2 .wmw *").css("opacity","1"),$("#s2").parallax();break;case 3:$("#s3").addClass("ani").parallax();break;case 4:$("#s4").addClass("ani");break;case 5:$("#s5").addClass("ani");break;case 6:$("#s6").addClass("ani").parallax(),$("#s6 .wmw").css("opacity","1"),$("#s6 .wmw *").css("opacity","1");break;case 7:$("#s7").addClass("ani"),$("#s7 .container0").css("opacity","1");break;case 8:$("#s8").addClass("ani");break;case 9:$("#s9").addClass("ani");break;case 10:$("#s10").addClass("ani").parallax(),$("#s10 .wmw").css("opacity","1"),$("#s10 .wmw *").css("opacity","1");break;case 11:$("#s11").addClass("ani");break;case 12:$("#s12").addClass("ani");}},onSlideChangeEnd:function(){switch(a.activeIndex){case 0:$("#s1").removeClass("ani");break;case 1:$("#s0").removeClass("ani"),$("#s2").removeClass("ani"),$("#s2 .wmw").css("opacity","0"),$("#s2 .wmw *").css("opacity","0");break;case 2:$("#s1").removeClass("ani"),$("#s3").removeClass("ani");break;case 3:$("#s2").removeClass("ani"),$("#s2 .wmw").css("opacity","0"),$("#s2 .wmw *").css("opacity","0"),$("#s4").removeClass("ani");break;case 4:$("#s3").removeClass("ani"),$("#s5").removeClass("ani");break;case 5:$("#s4").removeClass("ani"),$("#s6").removeClass("ani"),$("#s6 .wmw").css("opacity","0"),$("#s6 .wmw *").css("opacity","0");break;case 6:$("#s5").removeClass("ani"),$("#s7").removeClass("ani"),$("#s7 .container0").css("opacity","0");break;case 7:$("#s6").removeClass("ani"),$("#s6 .wmw").css("opacity","0"),$("#s6 .wmw *").css("opacity","0"),$("#s8").removeClass("ani");break;case 8:$("#s7").removeClass("ani"),$("#s7 .container0").css("opacity","0"),$("#s9").removeClass("ani");break;case 9:$("#s8").removeClass("ani"),$("#s10").removeClass("ani"),$("#s10 .wmw").css("opacity","0"),$("#s10 .wmw *").css("opacity","0");break;case 10:$("#s9").removeClass("ani"),$("#s11").removeClass("ani");break;case 11:$("#s10").removeClass("ani"),$("#s10 .wmw").css("opacity","0"),$("#s10 .wmw *").css("opacity","0"),$("#s12").removeClass("ani");break;case 12:$("#s11").removeClass("ani")}}});$("#s0").addClass("ani").parallax()
                  });
var dataForWeixin={
  appId:  "",
  img:  "",
  url:  "http://webapp1.cyol.com/qingming18/",
  title:  "清明祭英烈，共铸中华魂！",
  desc: "清明祭英烈，共铸中华魂！",
  fakeid: "",
};
(function(){
  var onBridgeReady=function(){
    // 发送给好友; 
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
      WeixinJSBridge.invoke('sendAppMessage',{
        "appid":    dataForWeixin.appId,
        "img_url":    dataForWeixin.img,
        "img_width":  "120",
        "img_height": "120",
        "link":       dataForWeixin.url,
        "desc":       dataForWeixin.desc,
        "title":      dataForWeixin.title
      }, function(res){});
    });
    // 分享到朋友圈;
    WeixinJSBridge.on('menu:share:timeline', function(argv){
      WeixinJSBridge.invoke('shareTimeline',{
      "img_url":dataForWeixin.img,
      "img_width":"120",
      "img_height":"120",
      "link":dataForWeixin.url,
      "desc":dataForWeixin.desc,
      "title":dataForWeixin.title
      }, function(res){});
    });
  };
  if(document.addEventListener){
    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
  }else if(document.attachEvent){
    document.attachEvent('WeixinJSBridgeReady'   , onBridgeReady);
    document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
  }
})();