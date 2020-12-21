const $crewNameLenLimit = $('.crew_name_len_limit');
const $crewIntroLenLimit = $('.crew_intro_len_limit');

const $crew_name = $('.crew_name_input');
const $crew_intro = $('.crew_intro_input');
// /*step1 end*/
/*step2 start*/
const nameExp = /^[가-힣|a-zA-Z]{2,10}$/;
const introExp = /^[가-힣|a-zA-z|\d]{0,20}$/;
let nameFlag = false, crewFlag = false,imgFlag=true;
$crew_name.keyup(function (e) {

    let val = $crew_name.val();
    $crewNameLenLimit.text("("+val.length+" / 10자)");    //글자수 실시간 카운팅
    if(nameExp.test(val)){
        //ajax를 사용하여 중복체크
        nameFlag = true;
        nextBtnOn(nameFlag,crewFlag,imgFlag);
    }else{
        nameFlag = false;
        nextBtnOn(nameFlag,crewFlag,imgFlag);
    }// if ~ else end
});//#$crew_name.onkeydown() end
$crew_intro.keyup(function (e) {
    let val = $crew_intro.val();
    $crewIntroLenLimit.text("("+val.length+" /20자)");    //글자수 실시간 카운팅
    if(introExp.test(val)){
        //ajax를 사용하여 중복체크
        crewFlag = true;
        nextBtnOn(nameFlag,crewFlag,imgFlag);
    }else{
        crewFlag = false;
        nextBtnOn(nameFlag,crewFlag,imgFlag);
    }// if ~ else end
});//#$crew_name.onkeydown() end
function nextBtnOn(nameFlag, crewFlag, imgFlag){
    if(nameFlag==true && crewFlag==true && imgFlag==true){
        $nextBtn2.css({
            "background-color": "#FF6333",
            "color": "#fff"
        });
    }else{
        $nextBtn2.css({
            "background-color": "#eee",
            "color": "#000"
        });
    }
}

/*step2 end*/