
$(function(){
	$('.lentren').click(function(){
			$('body').animate({scrollTopL:0});
			return false;
		})
});
/*$(function(){
	$(window).scroll(function(){
		if($('body').scrollTop()>300){
			$('.logo').addClass('chucam');
			$('.navbar').addClass('nentrang')
			.addClass('navbar-light')
			.removeClass('navbar-dark');
			$('.lentren').addclass('hienthi');
		}
		else if($('body').scrollTop()<=100) {
			$('.logo').removeClass('chucam');
			$('.navbar').removeClass('nentrang')
			.removeClass('navbar-light')
			.addClass('navbar-dark');
			$('.lentren').removeClass('hienthi');
		}
	});
});*/
$(function(){
	$(window).scroll(function(){
			$('.logo').addClass('chucam');
			$('.navbar').addClass('nentrang')
			.addClass('navbar-light')
			.removeClass('navbar-dark');
			/*$('.scroll').addClass('hienthi');*/
	})	
});