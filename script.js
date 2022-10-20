var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all" );
request.send();
request.onload=function() {
var res = JSON.parse(request.response);
 console.log(res);
for(i=0;i<res.length;i++){
    console.log(res[i].country);
    

}

var popu=res.reduce((acc,cv)=>acc+cv.population,0);
console.log(popu);

};

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all" );
request.send();
request.onload=function() {
var res = JSON.parse(request.response);
 console.log(res);
for(i=0;i<res.length;i++){
    console.log("countryname : "+res[i].name +  "  " + "captail : "+res[i].capital +  "  " + res[i].  flag);
    

}
};



var popu=res.filter((ele)=>ele.population<300000);
console.log(popu);
var result1=popu.map((ele)=>ele.name);
console.log(result1);

var popu=res.filter((ele)=>ele.region==="Europe").map((ele)=>ele.name);
console.log(popu);




