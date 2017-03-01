$(function(){

// 放大镜
	$('.small').mouseover(function(){
        $('.shadow,.big').show();
        $(this).css('cursor','move');
        $('.small').mousemove(function(ent){
            var x = ent.pageX - $('#fangdajing').offset().left - $('.shadow').width()/2;
            var y = ent.pageY - $('#fangdajing').offset().top - $('.shadow').height()/2;
            if (x < 0) {
                x = 0;
            } else if (x > $('#fangdajing').width() - $('.shadow').width()) {
                x = $('#fangdajing').width() - $('.shadow').width();
            }
            if (y < 0) {
                y = 0;
            } else if (y > $('#fangdajing').height() - $('.shadow').height()) {
                y = $('#fangdajing').height() - $('.shadow').height();
            }
            $('.shadow').css({
            	'left':x,
            	'top':y
            });
            $('.big').scrollTop(y*($('.big img').height())/($('.small').height()));
            $('.big').scrollLeft(x*($('.big img').width())/($('.small').width()));
        })
    }).mouseout(function(){
        $('.shadow,.big').hide();
    });
// 三级级联
var city = [
	['昌平区','朝阳区','海淀区'],
	['石家庄市','保定市','邯郸市'],
	['郑州市','洛阳市','安阳市']
];
var county = [
	[
		['北七家','回龙观','霍营'],
		['朝阳1','朝阳2','朝阳3'],
		['海淀1','海淀2','海淀3']
	],
	[
		['新华区','桥东区','桥西区'],
		['保定1','保定2','保定3'],
		['邯郸1','邯郸2','邯郸3']
	],
	[
		['二七区','金水区','中原区'],
		['洛阳1','洛阳2','洛阳3'],
		['安阳1','安阳2','安阳3']
	]
];
var index1,index2,div_str;
$('#sheng').change(function(){
	$('#xian').html('<option value="">--请选择--</option>');
	div_str = '地址：';
	index1 = $(this).attr('value');
	div_str += $('#sheng option').eq(parseInt(index1)+1).text();
	$('.stock .address').text(div_str+'\t');
	var result = city[index1];
	var str = '<option value="">--请选择--</option>';
	for(var i = 0; i < result.length; i++){
		str += '<option value="'+i+'">'+result[i]+'</option>';
	}
	$('#shi').html(str);
});

$('#shi').change(function(){
	div_str = '地址：' + $('#sheng option').eq(parseInt(index1)+1).text() +'\t';
	index2 = $(this).attr('value');
	div_str += $('#shi option').eq(parseInt(index2)+1).text();
	$('.stock .address').text(div_str+'\t');
	var result = county[index1][index2];
	var str = '<option value="">--请选择--</option>';
	for(var i = 0; i < result.length; i++){
		str += '<option value="'+i+'">'+result[i]+'</option>';
	}
	$('#xian').html(str);
});

$('#xian').change(function(){
	div_str = '地址：' + $('#sheng option').eq(parseInt(index1)+1).text() +'\t' + $('#shi option').eq(parseInt(index2)+1).text() +'\t';
	var index3 = $(this).attr('value');
	div_str += $('#xian option').eq(parseInt(index3)+1).text();
	$('.stock .address').text(div_str+'\t');
});

})