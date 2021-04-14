//day88-1_script.js
$(function(){
    var $ct34 =$('.ct34'),
        $dropZone =$ct34.find('.centerCover')
        $box = $ct34.find('.box'),
        boxHide ={width:0,height:0,boderRadius:160},
        boxShow = {width:160,hegiht:160,boderRadius:0},
        txt = '',
        $stop =$ct34.find('.btStop');
        //start : 드래그가 시작될때.
        //drag : 드래그 되는 동안.
        //stop : 드래그가 정지되었을때.
    $box.draggable({
        revert: true,
        revertDuration:100,
        contaiment:'.ct34 section',
        zIndex:20,
        drag:function(){
            $box.removeClass('that');
            $(this).addClass('that');
        }
    });
    $dropZone.droppable({
        accept:'.box',
        drop:function(){
            console.log('저 박스가 드랍되었습니다.');
            $box.stop().animate(boxShow)
            $('.that').animate(boxHide, function(){
                txt =$(this).find('h4').text();
                $('.ct34 .centerCover h4').text(txt);
                //레코드 회전,실행중인 음악 정지 후 this 음악 플레이
            });
        }

    });
    $stop.on('click',function(){
        $box.stop().animate(boxShow);
        $box.removeClass('that');
        $('.ct34 .centerCover h4').text('DROP HERE');
        });
});;
}););