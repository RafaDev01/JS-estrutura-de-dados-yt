var month = [];

var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek1 = [33,25.2,19,27,23.4,41.6,25];
var avgTempWeek2 = [41,29,33,21.2,19.5,17,33.8];

var avgTempWeek3 = [13,15.2,39,17,22.4,21.6,15];
var avgTempWeek4 = [25,22,31,31.2,15.5,16,12.8];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

for(var i=0; i<month.length;i++){
  for(var j=0; j<month[i].length;j++){
    for(var k=0; k<month[i][j].length;k++){
      console.log(month[i][j][k])
    }
  }
}

