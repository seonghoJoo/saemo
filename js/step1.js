const $li1 = $( '.category_item:nth-child(3n+1)' );
const $li2 = $( '.category_item:nth-child(3n+2)' );
const $li3 = $( '.category_item:nth-child(3n)' );


/*step1 start*/
$li1.hover(function (e) {
    //this라는 키워드가 있음 : 그 요소
    // this는 순수 자바스크립트 요소 객체 (jQuery 객체가 아님)
    // 순수 자바스크립트객체 => jquery객체로 변경
    // HOW? $(this)
    //hover 취소
    console.log($(this).children().index());

    if($(this).children().eq(0).hasClass("on")){
        // on 클래스 제거
        $(this).children().eq(0).removeClass("on");

        $(this).css({
            "height":"110px"
        });
        $(this).next().next().css({
            "height":"110px"
        });
        $(this).next().css({
            "height":"110px"
        });
        $(this).children().eq(2).css({
            "height":"0"
        });
    }
    //hover 선택
    else{
        // 클릭한 요소의 on 클래스 추가
        $(this).children().eq(0).addClass("on");

        $(this).css({
            "height":"160px"
        });
        $(this).next().next().css({
            "height":"160px"
        });
        $(this).next().css({
            "height":"160px"
        });
        $(this).children().eq(2).css({
            "height":"100px"
        });
    }
});//#$li1.hover() end

$li2.hover(function (e) {
    //this라는 키워드가 있음 : 그 요소
    // this는 순수 자바스크립트 요소 객체 (jQuery 객체가 아님)
    // 순수 자바스크립트객체 => jquery객체로 변경
    // HOW? $(this)
    //hover 취소
    console.log($(this).children().index());

    if($(this).children().eq(0).hasClass("on")){
        // on 클래스 제거
        $(this).children().eq(0).removeClass("on");
        $(this).css({
            "height":"110px"
        });
        $(this).next().css({
            "height":"110px"
        });
        $(this).before().css({
            "height":"110px"
        });
        $(this).children().eq(2).css({
            "height":"0"
        });
        $('.category_detail_box').removeClass('move_center');
    }
    //hover 선택
    else{
        // 클릭한 요소의 on 클래스 추가
        $(this).children().eq(0).addClass("on");
        $(this).css({
            "height":"160px"
        });
        $(this).next().css({
            "height":"160px"
        });
        $(this).before().css({
            "height":"160px"
        });
        $(this).children().eq(2).css({
            "height":"100px"
        });
        $('.category_detail_box').addClass('move_center');

    }
});//#$li2.hover() end

$li3.hover(function (e) {
    //this라는 키워드가 있음 : 그 요소
    // this는 순수 자바스크립트 요소 객체 (jQuery 객체가 아님)
    // 순수 자바스크립트객체 => jquery객체로 변경
    // HOW? $(this)
    //hover 취소
    console.log($(this).children().index());

    if($(this).children().eq(0).hasClass("on")){
        // on 클래스 제거
        $(this).children().eq(0).removeClass("on");
        $(this).css({
            "height":"110px"
        });
        $(this).before().before().css({
            "height":"110px"
        });
        $(this).before().css({
            "height":"110px"
        });
        $(this).children().eq(2).css({
            "height":"0"
        });
        $('.category_detail_box').removeClass('move_right');
    }
    //hover 선택
    else{
        // 클릭한 요소의 on 클래스 추가
        $(this).children().eq(0).addClass("on");
        $(this).css({
            "height":"160px"
        });
        $(this).before().before().css({
            "height":"160px"
        });
        $(this).before().css({
            "height":"160px"
        });
        $(this).children().eq(2).css({
            "height":"100px"
        });
        $('.category_detail_box').addClass('move_right');
    }
});//#$li3.hover() end
/*step1 end*/



