$(function() {
    $(".flexslider").flexslider({
		slideshowSpeed: 5000, //展示时间间隔ms
		animationSpeed: 500, //滚动时间ms  
		touch: true //是否支持触屏滑动
	});
});	



function section_introduction() {
  var div1 = document.getElementById("myDIV1");
  var div2 = document.getElementById("myDIV2");
  var div3 = document.getElementById("myDIV3");
  var t1 = document.getElementById("t1");
  var t2 = document.getElementById("t2");
  var t3 = document.getElementById("t3");
 
   document.getElementById("b_v1").src="";
   document.getElementById("b_v2").src="";
   document.getElementById("b_v3").src="";
   document.getElementById("v1").src="";
   document.getElementById("v2").src="";
   document.getElementById("play").src="";    
    t1.style.display = "none"
    t2.style.display = "none"
    t3.style.display = "none"

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
  var ppt_6 = document.getElementById("ppt_6");
  var ppt_7 = document.getElementById("ppt_7");
  var ppt_8 = document.getElementById("ppt_8");
  var ppt_9 = document.getElementById("ppt_9");
  var ppt_10 = document.getElementById("ppt_10");
  var ppt_11 = document.getElementById("ppt_11");
  var ppt_12 = document.getElementById("ppt_12");
  var ppt_13 = document.getElementById("ppt_13");
  
   document.getElementById("b_v1").src="";
   document.getElementById("b_v2").src="";
   document.getElementById("b_v3").src="";
   document.getElementById("v1").src="";
   document.getElementById("v2").src="";
  document.getElementById("play").src="";

  
    ppt_2.style.display = "none";
    ppt_3.style.display = "none";
    ppt_4.style.display = "none";
    ppt_5.style.display = "none";
    ppt_6.style.display = "none";
    ppt_7.style.display = "none";
    ppt_8.style.display = "none";
    ppt_9.style.display = "none";
    ppt_10.style.display = "none";
    ppt_11.style.display = "none";
    ppt_12.style.display = "none";
    ppt_13.style.display = "none";
    
  
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
  
  
        te0.style.display = "block";
        p1.style.display = "block";
        te1.style.display = "none";
        te2.style.display = "none";
        goback.style.display = "none";
  
}

function section_different() {


  
   document.getElementById("b_v1").src="";
   document.getElementById("b_v2").src="";
   document.getElementById("b_v3").src="";
   document.getElementById("v1").src="";
   document.getElementById("v2").src="";
  
      document.getElementById("play").src="https://drive.google.com/file/d/1kqiKlI1tFyVWrrDMTQAWP0jkJDXtqhyj/preview";


  
  
}
function section_friend() {
  var part_e_1 = document.getElementById("part_e_1");
  var part_e_2 = document.getElementById("part_e_2");
  part_e_1.style.backgroundColor='rgb(255,152,103)';
  part_e_2.style.backgroundColor='rgb(255,152,103)';
  return false;
  
  
}
// 首頁
function myFunction_a() {
  var part = document.getElementById("part");
  var part_a = document.getElementById("part_a");  

  var part_b = document.getElementById("part_b");
  var part_c = document.getElementById("part_c");
  var part_d = document.getElementById("part_d");
  var part_e = document.getElementById("part_e");

        part_a.style.display = "none";
  
        part.style.display = "block";
        part_b.style.display = "block";
  
        part_c.style.display = "block";
        part_d.style.display = "block";
        part_e.style.display = "block";


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
   var ppt_3 = document.getElementById("ppt_3");                                   ppt_2.style.display = "none";    
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
function next_4() {    
    var ppt_4 = document.getElementById("ppt_4");
   var ppt_5 = document.getElementById("ppt_5");  
        ppt_4.style.display = "none";    
        ppt_5.style.display = "block";

}
function back_5() {    
    var ppt_4 = document.getElementById("ppt_4");
   var ppt_5 = document.getElementById("ppt_5");  
        ppt_5.style.display = "none";    
        ppt_4.style.display = "block";
      

}
function next_5() {    
    var ppt_5 = document.getElementById("ppt_5");
   var ppt_6 = document.getElementById("ppt_6");  
        ppt_5.style.display = "none";    
        ppt_6.style.display = "block";

}
function back_6() {    
    var ppt_5= document.getElementById("ppt_5");
   var ppt_6 = document.getElementById("ppt_6");  
        ppt_6.style.display = "none";    
        ppt_5.style.display = "block";
      

}
function next_6() {    
    var ppt_6 = document.getElementById("ppt_6");
   var ppt_7 = document.getElementById("ppt_7");  
        ppt_6.style.display = "none";    
        ppt_7.style.display = "block";

}
function back_7() {    
    var ppt_6= document.getElementById("ppt_6");
   var ppt_7 = document.getElementById("ppt_7");  
        ppt_7.style.display = "none";    
        ppt_6.style.display = "block";
      

}
function next_7() {    
    var ppt_7 = document.getElementById("ppt_7");
   var ppt_8 = document.getElementById("ppt_8");  
        ppt_7.style.display = "none";    
        ppt_8.style.display = "block";

}
function back_8() {    
    var ppt_7= document.getElementById("ppt_7");
   var ppt_8 = document.getElementById("ppt_8");  
        ppt_8.style.display = "none";    
        ppt_7.style.display = "block";
      

}
function next_8() {    
    var ppt_8 = document.getElementById("ppt_8");
   var ppt_9 = document.getElementById("ppt_9");  
        ppt_8.style.display = "none";    
        ppt_9.style.display = "block";

}
function back_9() {    
    var ppt_8= document.getElementById("ppt_8");
   var ppt_9 = document.getElementById("ppt_9");  
        ppt_9.style.display = "none";    
        ppt_8.style.display = "block";
      

}
function next_9() {    
    var ppt_9 = document.getElementById("ppt_9");
   var ppt_10 = document.getElementById("ppt_10");  
        ppt_9.style.display = "none";    
        ppt_10.style.display = "block";

}

function back_10() {    
    var ppt_9= document.getElementById("ppt_9");
   var ppt_10 = document.getElementById("ppt_10");  
        ppt_10.style.display = "none";    
        ppt_9.style.display = "block";
      

}
function next_10() {    
    var ppt_10 = document.getElementById("ppt_10");
   var ppt_11 = document.getElementById("ppt_11");  
        ppt_10.style.display = "none";    
        ppt_11.style.display = "block";

}
function back_11() {    
    var ppt_10= document.getElementById("ppt_10");
   var ppt_11 = document.getElementById("ppt_11");  
        ppt_11.style.display = "none";    
        ppt_10.style.display = "block";
      

}
function next_11() {    
    var ppt_11 = document.getElementById("ppt_11");
   var ppt_12 = document.getElementById("ppt_12");  
        ppt_11.style.display = "none";    
        ppt_12.style.display = "block";

}
function back_12() {    
    var ppt_11= document.getElementById("ppt_11");
   var ppt_12 = document.getElementById("ppt_12");  
        ppt_12.style.display = "none";    
        ppt_11.style.display = "block";
      

}
function next_12() {    
    var ppt_12 = document.getElementById("ppt_12");
   var ppt_13 = document.getElementById("ppt_13");  
        ppt_12.style.display = "none";    
        ppt_13.style.display = "block";

}
function back_13() {    
    var ppt_12= document.getElementById("ppt_12");
   var ppt_13 = document.getElementById("ppt_13");  
        ppt_13.style.display = "none";    
        ppt_12.style.display = "block";
      

}
function next_13() {    
    var ppt_13 = document.getElementById("ppt_13");
   var ppt_14 = document.getElementById("ppt_14");  
        ppt_13.style.display = "none";    
        ppt_14.style.display = "block";

}
function back_14() {    
    var ppt_13= document.getElementById("ppt_13");
   var ppt_14 = document.getElementById("ppt_14");  
        ppt_14.style.display = "none";    
        ppt_13.style.display = "block";
      

}
function next_14() {    
    var ppt_14 = document.getElementById("ppt_14");
   var ppt_15 = document.getElementById("ppt_15");  
        ppt_14.style.display = "none";    
        ppt_15.style.display = "block";

}
function back_15() {    
    var ppt_14= document.getElementById("ppt_14");
   var ppt_15 = document.getElementById("ppt_15");  
        ppt_15.style.display = "none";    
        ppt_14.style.display = "block";
      

}
function next_15() {    
    var ppt_15 = document.getElementById("ppt_15");
   var ppt_16 = document.getElementById("ppt_16");  
        ppt_15.style.display = "none";    
        ppt_16.style.display = "block";

}
function back_16() {    
    var ppt_15= document.getElementById("ppt_15");
   var ppt_16 = document.getElementById("ppt_16");  
        ppt_16.style.display = "none";    
        ppt_15.style.display = "block";
      

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