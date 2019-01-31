$(window).on('load',function(){
	waterfall();
	var dataInt={"data":[{"src":'c3.jpg'},{"src":'c2.jpg'},{"src":'c1.jpg'},{"src":'c4.jpg'}]};
	$(window).on('scroll',function(){
		if(checkScrollSlide){
			$.each(dataInt.data,function(key,value){
				var oBox = $('<div>').addClass('box').appendTo($('#main'));
				var oPic = $('<div>').addClass('pic').appendTo($(oBox));
				var oImg = $('<img>').attr('src','img/'+$(value).attr('src')).appendTo($(oPic));	
			})
			waterfall();
		}
	})
})

function waterfall(){
	//获取
	var $boxs=$('#main>div');
	var boxWidth = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/boxWidth);
	$('#main').width(boxWidth*cols).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index,value){
		var h = $boxs.eq(index).outerHeight();
		if(index<cols){
			hArr[index] = h;
		}else{
			var minH = Math.min.apply(null,hArr);
			var minHIndex = $.inArray(minH,hArr);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*boxWidth+'px'
			})
			hArr[minHIndex]+=$boxs.eq(index).outerHeight();
		}
	})
	console.log(hArr);
}
function checkScrollSlide(){
	var $lastBox = $('#main>div').last();
	var lastBoxDis = $lastBox.offset().top+Math.floor($lastBox.outerWidth()/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return (lastBoxDis<scrollTop+documentH?true:false);

}