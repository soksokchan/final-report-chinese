$(function() {
    $(".flexslider").flexslider({
		slideshowSpeed: 5000, //展示时间间隔ms
		animationSpeed: 500, //滚动时间ms  
		touch: true //是否支持触屏滑动
	});
});	
function home() {
   var home = document.getElementById("home");
  var a = document.getElementById("part_b");
   var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  document.getElementById("b_v1").src="";
   document.getElementById("b_v2").src="";
   document.getElementById("b_v3").src="";
   document.getElementById("v1").src="";
   document.getElementById("v2").src="";
   document.getElementById("play").src="";
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    b.style.display = "none";
    home.style.display = "block";
}

function section_introduction() {
  var div1 = document.getElementById("myDIV1");
  var div2 = document.getElementById("myDIV2");
  var div3 = document.getElementById("myDIV3");
  var t1 = document.getElementById("t1");
  var t2 = document.getElementById("t2");
  var t3 = document.getElementById("t3");
  var a = document.getElementById("part_b");
  var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  var home = document.getElementById("home");
   document.getElementById("b_v1").src="";
   document.getElementById("b_v2").src="";
   document.getElementById("b_v3").src="";
   document.getElementById("v1").src="";
   document.getElementById("v2").src="";
   document.getElementById("play").src="";
    home.style.display = "none"
    t1.style.display = "none"
    t2.style.display = "none"
    t3.style.display = "none"
    b.style.display = "none"
    c.style.display = "none"
    d.style.display = "none"
    a.style.display = "block"
    div1.style.display = "block"
    div2.style.display = "block"
    div3.style.display = "block"
}
function section_manual() {
  var ppt_1 = document.getElementById("ppt_1");
  var ppt_2 = document.getElementById("ppt_2");
  var ppt_3 = document.getElementById("ppt_3");
  var ppt_4 = document.getElementById("ppt_4");
  var ppt_5 = document.getElementById("ppt_5");
  var a = document.getElementById("part_b");
  var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  var home = document.getElementById("home");
   document.getElementById("b_v1").src="";
   document.getElementById("b_v2").src="";
   document.getElementById("b_v3").src="";
   document.getElementById("v1").src="";
   document.getElementById("v2").src="";
  document.getElementById("play").src="";
    home.style.display = "none"
    a.style.display = "none"
    c.style.display = "none"
    d.style.display = "none"
    b.style.display = "block";
  
    ppt_2.style.display = "none";
    ppt_3.style.display = "none";
    ppt_4.style.display = "none";
    ppt_5.style.display = "none";
    ppt_1.style.display = "block";
  
}
function section_airport() {
    var te0 = document.getElementById("te0");
   var p1 = document.getElementById("p1");
  var te1 = document.getElementById("te1");
  var te2 = document.getElementById("te2");
  var goback = document.getElementById("goback");
    document.getElementById("b_v1").src="";
   document.getElementById("b_v2").src="";
   document.getElementById("b_v3").src="";
   document.getElementById("v1").src="";
   document.getElementById("v2").src="";
  document.getElementById("play").src="";
   var a = document.getElementById("part_b");
  var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  var home = document.getElementById("home");
    home.style.display = "none"
    a.style.display = "none"
    b.style.display = "none"
    d.style.display = "none"
    c.style.display = "block";
  
        te0.style.display = "block";
        p1.style.display = "block";
        te1.style.display = "none";
        te2.style.display = "none";
        goback.style.display = "none";
  
}

function section_different() {

   var a = document.getElementById("part_b");
  var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  var home = document.getElementById("home");
   document.getElementById("b_v1").src="";
   document.getElementById("b_v2").src="";
   document.getElementById("b_v3").src="";
   document.getElementById("v1").src="";
   document.getElementById("v2").src="";
      document.getElementById("play").src="https://drive.google.com/file/d/1kqiKlI1tFyVWrrDMTQAWP0jkJDXtqhyj/preview";

    home.style.display = "none"
    a.style.display = "none"
    b.style.display = "none"
    c.style.display = "none"
    d.style.display = "block";
  
  
}
// 首頁
function myFunction_a() {
  var part = document.getElementById("part");
  var part_a = document.getElementById("part_a");  
  var a = document.getElementById("home");    
  var t1 = document.getElementById("t1");

        part_a.style.display = "none";
        part.style.display = "block";
        a.style.display = "block";


}
// 認識我的嘉
function myFunction1() {
    var div1 = document.getElementById("myDIV1");
    var div2 = document.getElementById("myDIV2");
   var div3 = document.getElementById("myDIV3");
  var t1 = document.getElementById("t1");
  var goback= document.getElementById("goback");
  document.getElementById("b_v1").src="https://drive.google.com/file/d/1EYKBF4XOKDf2ibTFqq1zhyg1dvRM_HMX/preview";
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none"; 
        t1.style.display = "block";
        goback.style.display = "block";

}
function myFunction2() {
    var div1 = document.getElementById("myDIV1");
    var div2 = document.getElementById("myDIV2");
   var div3 = document.getElementById("myDIV3");
  var t2 = document.getElementById("t2");
  var goback= document.getElementById("goback");
 document.getElementById("b_v2").src="https://drive.google.com/file/d/1v7rvw2z4sM42BSIakkMMlYi7V2issYdd/preview";
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none"; 
        t2.style.display = "block";
        goback.style.display = "block";

}
function myFunction3() {
    var div1 = document.getElementById("myDIV1");
    var div2 = document.getElementById("myDIV2");
   var div3 = document.getElementById("myDIV3");
  var t3 = document.getElementById("t3");
  var goback= document.getElementById("goback");
document.getElementById("b_v3").src="https://drive.google.com/file/d/1YwUFb1pKKuTQ5MNHiq1_tXNWECAVx1N_/preview";
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none"; 
        t3.style.display = "block";
        goback.style.display = "block";

}

function myFunction_b1() {
    var div1 = document.getElementById("myDIV1");
    var div2 = document.getElementById("myDIV2");
   var div3 = document.getElementById("myDIV3");
  var t3 = document.getElementById("t3");
  var t2 = document.getElementById("t2");
  var t1 = document.getElementById("t1");
  var goback= document.getElementById("goback");
    document.getElementById("b_v1").src="";
   document.getElementById("b_v2").src="";
   document.getElementById("b_v3").src="";
        div1.style.display = "block";
        div2.style.display = "block";
        div3.style.display = "block"; 
        t3.style.display = "none";
        t2.style.display = "none";
        t1.style.display = "none";
        goback.style.display = "none";

}

//我嘉的手冊
function next_1() {    
    var ppt_1 = document.getElementById("ppt_1");
   var ppt_2 = document.getElementById("ppt_2");  
        ppt_1.style.display = "none";    
        ppt_2.style.display = "block";

}
function back_2() {    
    var ppt_1 = document.getElementById("ppt_1");
   var ppt_2 = document.getElementById("ppt_2");  
        ppt_2.style.display = "none";    
        ppt_1.style.display = "block";

}
function next_2() {    
    var ppt_2 = document.getElementById("ppt_2");
   var ppt_3 = document.getElementById("ppt_3");         ppt_2.style.display = "none";    
        ppt_3.style.display = "block";

}
function back_3() {    
    var ppt_2 = document.getElementById("ppt_2");
   var ppt_3 = document.getElementById("ppt_3");         ppt_3.style.display = "none";    
        ppt_2.style.display = "block";

}
function next_3() {    
    var ppt_3 = document.getElementById("ppt_3");
   var ppt_4 = document.getElementById("ppt_4");  
        ppt_3.style.display = "none";    
        ppt_4.style.display = "block";

}
function back_4() {    
    var ppt_3 = document.getElementById("ppt_3");
   var ppt_4 = document.getElementById("ppt_4");  
        ppt_4.style.display = "none";    
        ppt_3.style.display = "block";

}
function back_5() {    
    var ppt_4 = document.getElementById("ppt_4");
   var ppt_5 = document.getElementById("ppt_5");  
        ppt_5.style.display = "none";    
        ppt_4.style.display = "block";
      

}
function next_4() {    
    var ppt_4 = document.getElementById("ppt_4");
   var ppt_5 = document.getElementById("ppt_5");  
        ppt_4.style.display = "none";    
        ppt_5.style.display = "block";

}
//機場到我嘉
function myair1() {    
    var div1 = document.getElementById("te0");
   var p1 = document.getElementById("p1");
   var t1 = document.getElementById("te1");
  var goback = document.getElementById("goback");
  
        div1.style.display = "none";
        p1.style.display = "none";
        goback.style.display = "block";
        t1.style.display = "block";

}
function myair2() {
    var div1 = document.getElementById("te0");
   var p1 = document.getElementById("p1");
   var t2 = document.getElementById("te2");
  var goback = document.getElementById("goback");
  
        div1.style.display = "none";
        p1.style.display = "none";
        goback.style.display = "block";
        t2.style.display = "block";

}
function myFunction_d1() {
    var te0 = document.getElementById("te0");
   var p1 = document.getElementById("p1");
  var te1 = document.getElementById("te1");
  var te2 = document.getElementById("te2");
  var goback = document.getElementById("goback");
  document.getElementById("v1").src="";
  document.getElementById("v2").src="";
        te0.style.display = "block";
        p1.style.display = "block";
        te1.style.display = "none";
        te2.style.display = "none";
        goback.style.display = "none";

}