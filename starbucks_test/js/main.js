
$(document).ready(function(){

	//Code to center the subscription pup-up box
	$box = $('#box');
	$box.css({
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$box.width()/2 + 'px',
		'margin-top' : -$box.height()/2 + 'px'
	});


	//Subscription pup-up
	$('.start_btn').click(function(){
		$('#lightbox').width($(window).width()).height($(window).height()).fadeIn(200);
		$('#box').fadeIn(200);

		return false;
	});

	$('#lightbox, .close').click(function(){
		$('#lightbox').width(0).height(0).fadeOut(200);
		$('#box').fadeOut(200);

		return false;
	});

	//동영상 제어
	var player=$('video')[0];
	$('#btn-play-pause').on('click',function(){
		if(player.paused){//일시정지 상태
			player.play();
			$(this).find('i').text('pause');
			$(this).attr('title','일시정지');
		}else{
			player.pause();
			$(this).find('i').text('play_arrow');
			$(this).attr('title','재생');
		}
	})

	$('#btn-replay').on('click', function(){
		player.pause();
		player.currentTime=0;
		player.play();
	})

	$('#btn-volume').on('click', function(){
		if(player.muted){//음소거 상태
			$(this).find('i').text('volume_up');
			$(this).attr('title','음소거');
			player.muted=false;
		}else{
			$(this).find('i').text('volume_off');
			$(this).attr('title','음소거해제');
			player.muted=true;
		}
	})

	$('#btn-fullscreen').on('click', function(){
		if($(this).find('i').text()=='fullscreen'){//전체화면 상태
			$('body').addClass('fullscreen');
			$(this).find('i').text('fullscreen_exit');
			$(this).attr('title','기본화면');
		}else{
			$('body').removeClass('fullscreen');
			$(this).find('i').text('fullscreen');
			$(this).attr('title','전체화면');
		}
	})

});
