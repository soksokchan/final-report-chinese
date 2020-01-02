function next() {  
    var ppt_a = document.getElementById("ppt_a");
    var ppt_b = document.getElementById("ppt_b");
        ppt_a.style.display = "none";       
        ppt_b.style.display = "block";


}
function next_1() {  
    var ppt_a = document.getElementById("ppt_a");
    var ppt_b = document.getElementById("ppt_b");
        ppt_b.style.display = "none";       
        ppt_a.style.display = "block";


}

function section_introduction() { 
  var a = document.getElementById("part_b");
   var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  document.getElementById("iframe_a").src="";
  document.getElementById("iframe_b").src="";
  document.getElementById("play").src="";    
    c.style.display = "none";
    d.style.display = "none";
    b.style.display = "none";
    a.style.display = "block";
  var p_a = document.getElementById("p_a");
  var p_b = document.getElementById("p_b");
  var p_c = document.getElementById("p_c");
  var p_d = document.getElementById("p_d");
    p_a.style.backgroundColor='rgb(255,69,69)';
  	p_b.style.backgroundColor='rgb(255,152,103)';
    p_c.style.backgroundColor='rgb(255,152,103)';
    p_d.style.backgroundColor='rgb(255,152,103)';
}
function section_manual() { 
  var a = document.getElementById("part_b");
   var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  document.getElementById("iframe_a").src="";
  document.getElementById("iframe_b").src="";
  document.getElementById("play").src="";    
    c.style.display = "none";
    d.style.display = "none";
    a.style.display = "none";
    b.style.display = "block";

  var p_b = document.getElementById("p_a");
  var p_b = document.getElementById("p_b");
  var p_c = document.getElementById("p_c");
  var p_d = document.getElementById("p_d");
    p_b.style.backgroundColor='rgb(255,69,69)';
  	p_a.style.backgroundColor='rgb(255,152,103)';
    p_c.style.backgroundColor='rgb(255,152,103)';
    p_d.style.backgroundColor='rgb(255,152,103)';
  
}
function section_airport() {   
  var a = document.getElementById("part_b");
   var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  document.getElementById("iframe_a").src="";
  document.getElementById("iframe_b").src="";
  document.getElementById("play").src="";
  var ppt_a = document.getElementById("ppt_a");
  var ppt_b = document.getElementById("ppt_b");
        ppt_b.style.display = "none";       
        ppt_a.style.display = "block";
    
    a.style.display = "none";
    d.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
  
  var p_a = document.getElementById("p_a");
  var p_b = document.getElementById("p_b");
  var p_c = document.getElementById("p_c");
  var p_d = document.getElementById("p_d");
    p_c.style.backgroundColor='rgb(255,69,69)';
  	p_a.style.backgroundColor='rgb(255,152,103)';
    p_d.style.backgroundColor='rgb(255,152,103)';
    p_b.style.backgroundColor='rgb(255,152,103)';
}

function section_different() {  
  var a = document.getElementById("part_b");
   var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  document.getElementById("iframe_a").src="";
  document.getElementById("iframe_b").src="";
  document.getElementById("play").src="https://drive.google.com/file/d/1kqiKlI1tFyVWrrDMTQAWP0jkJDXtqhyj/preview";
  
    c.style.display = "none";
    b.style.display = "none";
    a.style.display = "none";
    d.style.display = "block";
  var p_a = document.getElementById("p_a");
  var p_b = document.getElementById("p_b");
  var p_c = document.getElementById("p_c");
  var p_d = document.getElementById("p_d");
    p_d.style.backgroundColor='rgb(255,69,69)';
  	p_b.style.backgroundColor='rgb(255,152,103)';
    p_c.style.backgroundColor='rgb(255,152,103)';
    p_a.style.backgroundColor='rgb(255,152,103)';
}