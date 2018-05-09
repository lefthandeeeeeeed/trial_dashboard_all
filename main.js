// copied from Liveweave dEzHSB
// グラフ1（売上高）
var drawGraphBar = function(dataBar){
  var ctx = document.getElementById('graphBar_1').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBar[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa"
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBar[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4"
  };
  // ラベル(横軸)
  var label = dataBar[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#ffffff"
    },
    ticks: {
      fontSize: 12
    }
  }];
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f"
    },
    ticks: {
  
      fontSize: 12
    }
  }];
  var scales = {xAxes: yAxes};
  // グラフ全体の設定
    // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: scales
  };
  var myChart = new Chart(ctx, config);
};


// グラフ2（限界利益）
var drawGraphBar2 = function(dataBar2){
  var ctx = document.getElementById('graphBar_2').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBar2[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa"
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBar2[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4"
  };
  // ラベル(横軸)
  var label = dataBar2[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#ffffff"
    },
    ticks: {
      fontSize: 12
    }
  }];
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f"
    },
    ticks: {
         fontSize: 12
    }
  }];
  var scales = {xAxes: yAxes};
  // グラフ全体の設定
  // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: scales
  };
  var myChart = new Chart(ctx, config);
};

// グラフ3（固定費原価）
var drawGraphBar3 = function(dataBar3){
  var ctx = document.getElementById('graphBar_3').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBar3[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa"
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBar3[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4"
  };
  // ラベル(横軸)
  var label = dataBar3[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#ffffff"
    },
    ticks: {
      fontSize: 12
    }
  }];
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f"
    },
    ticks: {
        fontSize: 12
    }
  }];
  var scales = {xAxes: yAxes};
  // グラフ全体の設定
  // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: scales
  };
  var myChart = new Chart(ctx, config);
};

// グラフ4（売上総利益）
var drawGraphBar4 = function(dataBar4){
  var ctx = document.getElementById('graphBar_4').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBar4[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa"
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBar4[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4"
  };
  // ラベル(横軸)
  var label = dataBar4[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#ffffff"
    },
    ticks: {
      fontSize: 12
    }
  }];
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f"
    },
    ticks: {
         fontSize: 12
    }
  }];
  var scales = {xAxes: yAxes};
  // グラフ全体の設定
   // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: scales
  };
  var myChart = new Chart(ctx, config);
};


// グラフ5（販管費）
var drawGraphBar5 = function(dataBar5){
  var ctx = document.getElementById('graphBar_5').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBar5[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa"
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBar5[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4"
  };
  // ラベル(横軸)
  var label = dataBar5[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#ffffff"
    },
    ticks: {
      fontSize: 12
    }
  }];
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f"
    },
    ticks: {
          fontSize: 12
    }
  }];
  var scales = {xAxes: yAxes};
  // グラフ全体の設定
   // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: scales
  };
  var myChart = new Chart(ctx, config);
};

// グラフ6（営業利益）
var drawGraphBar6 = function(dataBar6){
  var ctx = document.getElementById('graphBar_6').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBar6[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa"
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBar6[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4"
  };
  // ラベル(横軸)
  var label = dataBar6[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#ffffff"
    },
    ticks: {
      fontSize: 12
    }
  }];
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f"
    },
    ticks: {
       fontSize: 12
    }
  }];
  var scales = {xAxes: yAxes};
  // グラフ全体の設定
   // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: scales
  };
  var myChart = new Chart(ctx, config);
};

//////////////データ////////////////
window.onload=function () {
    var dataBar = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [1321 ,1285 ,1358 ,1391 ,1271 ,1360 ,1478 ,1453 ,1426 ,1428 ,1436 ,1445],
                [1330 ,1296 ,1428 ,1343 ,1315 ,1369 ,1570 ,1640 ,1458 ,1482 ,1466 ,1757]];
    drawGraphBar(dataBar);
  
    var dataBar2 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [265 ,267 ,287 ,295 ,270 ,280 ,275 ,276 ,276 ,276 ,280 ,273],
                [314 ,297 ,320 ,268 ,234 ,241 ,297 ,281 ,250 ,276 ,332 ,342]];
    drawGraphBar2(dataBar2);

    var dataBar3 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [71 ,71 ,71 ,71 ,71 ,71 ,71 ,71 ,71 ,75 ,75 ,75],
                [71 ,71 ,67 ,71 ,71 ,72 ,75 ,85 ,74 ,77 ,73 ,80]];
    drawGraphBar3(dataBar3);

    var dataBar4 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [195 ,196 ,216 ,225 ,200 ,210 ,204 ,205 ,205 ,201 ,204 ,198],
                [243 ,226 ,253 ,197 ,163 ,169 ,222 ,196 ,176 ,199 ,259 ,262]];
    drawGraphBar4(dataBar4);
  
    var dataBar5 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [102 ,102 ,102 ,102 ,102 ,102 ,96 ,96 ,96 ,96 ,96 ,96],
                [85 ,99 ,86 ,94 ,88 ,82 ,99 ,77 ,114 ,83 ,90 ,89]];
    drawGraphBar5(dataBar5);
  
    var dataBar6 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [93 ,94 ,114 ,123 ,98 ,108 ,108 ,109 ,109 ,105 ,108 ,102],
                [157 ,127 ,167 ,103 ,75 ,87 ,123 ,119 ,63 ,116 ,169 ,173]];
    drawGraphBar6(dataBar6);
};
