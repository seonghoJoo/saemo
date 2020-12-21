
let countFlag = false;
const $crewPopulationInput = $('.crew_population_input');
$crewPopulationInput.keyup(function (e) {
    let val = $crewPopulationInput.val();
    if(val>=10 && val<=30){
        countFlag= true;
        nextBtnOn(countFlag);
    }else{
        countFlag= false;
        nextBtnOn(countFlag);
    }

});

function nextBtnOn(countFlag){
    if(countFlag==true){
        $nextBtn3.css({
            "background-color": "#FF6333",
            "color": "#fff"
        });
    }else{
        $nextBtn3.css({
            "background-color": "#eee",
            "color": "#000"
        });
    }
}