const $crewNameLenLimit = $('.crew_name_len_limit');
const $crewIntroLenLimit = $('.crew_intro_len_limit');

const $crew_name = $('.crew_name_input');
const $crew_intro = $('.crew_intro_input');
// /*step1 end*/
/*step2 start*/
const nameExp = /^[가-힣|a-zA-Z]{2,10}$/;
const introExp = /^[가-힣|a-zA-z|\d]{0,20}$/;
let nameFlag = false, crewFlag = true,imgFlag=true;
$crew_name.keyup(function (e) {

    let val = $crew_name.val();
    val = val.substr(0,10);
    $crewNameLenLimit.text("("+val.length+" / 10자)");    //글자수 실시간 카운팅
    if(nameExp.test(val)){
        $nameMsg.removeClass("ok");
        //ajax를 사용하여 중복체크
        nameFlag = true;
        nextBtnOn2(nameFlag,crewFlag,imgFlag);
    }else{
        $nameMsg.addClass("ok");
        nameFlag = false;
        nextBtnOn2(nameFlag,crewFlag,imgFlag);
    }// if ~ else end


});//#$crew_name.onkeydown() end
$crew_intro.keyup(function (e) {
    let val = $crew_intro.val();
    val = val.substr(0,20);
    $crewIntroLenLimit.text("("+val.length+" /20자)");    //글자수 실시간 카운팅
    if(introExp.test(val)){
        //ajax를 사용하여 중복체크
        crewFlag = true;
        nextBtnOn2(nameFlag,crewFlag,imgFlag);
    }else{
        crewFlag = false;
        nextBtnOn2(nameFlag,crewFlag,imgFlag);
    }// if ~ else end
});//#$crew_name.onkeydown() end
function nextBtnOn2(nameFlag, crewFlag, imgFlag){
    console.log("nextBtnOn step2");
    if(nameFlag==true && crewFlag==true && imgFlag==true){
        $nextBtnStep2.css({
            "background-color": "#FF6333",
            "color": "#fff"
        });
        $nextBtnStep2.removeAttr('disabled');

    }else{
        $nextBtnStep2.attr("disabled","disabled");
        $nextBtnStep2.css({
            "background-color": "#eee",
            "color": "#000"
        });
    }
}

const $crewImageItem = $('.crew_image_item input');
const $crewImageSelectedImg = $('.crew_image_selected img');

$crewImageItem.change(function (e) {
    e.preventDefault();
    let src = $(this).next().children().data("src");
    console.log(src);
    $crewImageSelectedImg.attr("src", src);
});

/*step2 end*/