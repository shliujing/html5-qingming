var loaderimages = {
	progress : $(".load_val"),
	init : function() {
		this.preload();
	},

	preload : function() {
		var _this = this;
		_this.preloadAssets(_this.allImages, "", function(e) { 
			var percent = Math.floor((e.completedCount / e.totalCount)*100);
			_this.setPreloaderPercent(percent)
		}, function(e) {
			_this.loaderComplete();
		});
	},

	preloadAssets : function(assets, prefix, progress, complete) {
		var imageTypes = ['jpg', 'png', 'jpeg', 'tiff', 'gif'];
		var loader = new PxLoader();
		for(var i = 0; i < assets.length; i++) {
			var extension = assets[ i ].substr( (assets[ i ].lastIndexOf('.') +1) );

			if ($.inArray(extension, imageTypes) != -1) {
				loader.add(new PxLoaderImage(assets[i] )); 
			}
		}
		loader.addProgressListener(progress);
		loader.addCompletionListener(complete);
		loader.start();
	},

	setPreloaderPercent: function( percentage ) {
		var _this = this;
		$(".load_anime").css({
			'-webkit-background-size': '155px '+percentage+'px',
		    '-moz-background-size': '155px '+percentage+'px',
		    '-o-background-size': '155px '+percentage+'px',
		    'background-size': '155px '+percentage+'px'
		})
		_this.progress.text(percentage+'%'); 
	},

	loaderComplete : function(){
		var _this = this;

		$(".load_anime").addClass('load_forwards').removeClass("load_wave animate");
		$(".load_val").addClass('load_val_hide').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
			$(".loading").addClass('load_end');
			setTimeout(function(){
				$(".loading").addClass("fadeOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
					$(".loading").remove();
				});
				$(".layer").eq(0).addClass("page_animate");
			},400);
			pages.setwh();
		});
		$('.loading').hide();
		
	},

	allImages: [
		"http://img.cyol.com/qingming/images/loading.jpg",
        "http://img.cyol.com/qingming/images/p0.1.jpg",
        "http://img.cyol.com/qingming/images/p1.1.jpg",
        "http://img.cyol.com/qingming/images/p2.1.jpg",
        "http://img.cyol.com/qingming/images/p3.1.jpg",
        "http://img.cyol.com/qingming/images/p4.1.jpg",
        "http://img.cyol.com/qingming/images/p5.1.jpg",
        "http://img.cyol.com/qingming/images/p6.1.jpg",
        "http://img.cyol.com/qingming/images/p7.1.jpg",
        "http://img.cyol.com/qingming/images/p8.1.jpg",
        "http://img.cyol.com/qingming/images/p9.1.jpg",
        "http://img.cyol.com/qingming/images/p10.1.jpg",
        "http://img.cyol.com/qingming/images/p0.2.png",
        "http://img.cyol.com/qingming/images/p1.2.png",
        "http://img.cyol.com/qingming/images/p2.2.png",
        "http://img.cyol.com/qingming/images/p3.2.png",
        "http://img.cyol.com/qingming/images/p4.2.png",
        "http://img.cyol.com/qingming/images/p5.2.png",
        "http://img.cyol.com/qingming/images/p6.2.png",
        "http://img.cyol.com/qingming/images/p7.2.png",
        "http://img.cyol.com/qingming/images/p8.2.png",
        "http://img.cyol.com/qingming/images/p9.2.png",
        "http://img.cyol.com/qingming/images/p10.2.png",

	]
};
$(function(){
	
	loaderimages.init();
	
})
