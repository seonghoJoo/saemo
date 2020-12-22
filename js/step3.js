
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

// function nextBtnOn(countFlag){
//     console.log("nextBtnOn step3");
//     if(countFlag==true){
//         $nextBtnStep3.css({
//             "background-color": "#FF6333",
//             "color": "#fff"
//         });
//     }else{
//         $nextBtnStep3.css({
//             "background-color": "#eee",
//             "color": "#000"
//         });
//     }
// }