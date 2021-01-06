//--------------------------------------------------------------------------------주소 찾기 . 지도 보이기
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new daum.maps.LatLng(37.0013545214342, 127.648247356919), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };
//지도를 미리 생성
var map = new daum.maps.Map(mapContainer, mapOption);
//주소-좌표 변환 객체를 생성
var geocoder = new daum.maps.services.Geocoder();
//마커를 미리 생성
var marker = new daum.maps.Marker({
    position: new daum.maps.LatLng(37.0013545214342, 127.648247356919),
    map: map
});


function sample5_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = data.address; // 최종 주소 변수
            // 주소 정보를 해당 필드에 넣는다.
            document.getElementById("sample5_address").value = addr;
            //---------------------------------------------------------------------주소 우회
            document.getElementById("addressContent").innerHTML = addr;
            // 주소로 상세 정보를 검색
            geocoder.addressSearch(data.address, function(results, status) {
                // 정상적으로 검색이 완료됐으면
                if (status === daum.maps.services.Status.OK) {

                    var result = results[0]; //첫번째 결과의 값을 활용

                    // 해당 주소에 대한 좌표를 받아서
                    var coords = new daum.maps.LatLng(result.y, result.x);
                    // 지도를 보여준다.
                    mapContainer.style.display = "block";
                    map.relayout();
                    // 지도 중심을 변경한다.
                    map.setCenter(coords);
                    // 마커를 결과값으로 받은 위치로 옮긴다.
                    marker.setPosition(coords)
                }
            });
        }
    }).open();
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}
//end 주소 찾기 . 지도 보이기

//시간 차이 보여줌 1초마다 차이가 줄어듦
//let meetingDue = 미팅시간-3일
let tomorrow = moment('2021/1/6');
function displaytime(){
    //  Date객체 생성
    let now = moment();

    //  역사 1900년대 사람들은 2000년대를 고려하지 않고 getYear라는 함수를 만들었었음
    let tmp = moment.duration(tomorrow.diff(now)).asMinutes();

    //시분초 차이 구하기
    let seconds = moment.duration(tomorrow.diff(now)).seconds();
    let minute = moment.duration(tomorrow.diff(now)).minutes();
    let hour = moment.duration(tomorrow.diff(now)).hours();

    let fullTime;
    //00:00:00으로 보이게 하기
    if(minute<10 && seconds<10){
        fullTime =  hour+":0" + minute+":0" + seconds;
    }else if(minute<10){
        fullTime =  hour+":0" + minute+":" + seconds;
    }else if(seconds<10){
        fullTime =  hour+":" + minute+":0" + seconds;
    }else{
        fullTime =  hour+":" + minute+":" + seconds;
    }

    // text 표시
    $(".remain_time").text(fullTime);

}//displayTime() end
setInterval(function (){
    displaytime();
},1000);

// 신청까지 남은시간 end

//밋팅 history chart 시작
var container = document.getElementById('chart-area');
var data = {
    categories: ["매너", "실력", "화목", "의욕", "단합"],
    series: [
        {
            // name: 'Budget',
            data: [25/50, 23/50, 22/50, 11/50, 20/50]
        },
    ]
};
var options = {
    chart: {
        title: '',
        width: 500,
        height: 480
    },
    series: {
        showDot: false,
        showArea: false
    },
    plot: {
        type: 'circle',
        hideLine: true// whether hide line or not

    },
    legend: {
        visible: false
    },
    chartExportMenu: {
        visible: false
    },
    yAxis:{
        min:0,
        max:1
    }
};
var theme = {
    series: {
        colors: [
            '#424242'
        ]
    }
};

// For apply theme

tui.chart.registerTheme('myTheme', theme);
options.theme = 'myTheme';
// 생성자()
const chart = tui.chart.radialChart(container, data, options);
chart.on('afterShowTooltip', function(params) {
    chart.hideTooltip();
});

chart.on('beforeHideTooltip', function(params) { /* 3 */
    chart.hideTooltip();
});
//밋팅 history chart end