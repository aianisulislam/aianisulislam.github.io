var newY = window.pageYOffset;
var rem, scr, starsY, moonY, farY, backY,frontY, camelY, frontH, backH, farH, winH, tempH;
document.getElementById("misdirection").style.opacity = "0" ;
document.getElementById("sorcery").style.opacity = "0" ;


function init(){
    history.scrollRestoration = 'manual';
    var element = document.getElementById("secret");
    element.parentNode.removeChild(element);
    var op = 0;
    var id = setInterval(reveal, 20);
    function reveal() {
          if (op > 1) {
            clearInterval(id);
          } else {
            op += 0.1; 
            document.getElementById("misdirection").style.opacity = op ; 
            document.getElementById("sorcery").style.opacity = op ; 
            
    
          }
        }
    
    frontH = window.getComputedStyle(document.getElementById("front"), null).getPropertyValue("height");
    backH = window.getComputedStyle(document.getElementById("back"), null).getPropertyValue("height");
    farH = window.getComputedStyle(document.getElementById("far"), null).getPropertyValue("height");
    starsY= document.getElementById("stars").offsetTop;
    moonY= document.getElementById("moon").offsetTop;
    farY= document.getElementById("far").offsetTop;
    backY= document.getElementById("back").offsetTop;
    frontY= document.getElementById("front").offsetTop;
    camelY= document.getElementById("camel").offsetTop;
    tempH = window.getComputedStyle(document.getElementById("sorcery"), null).getPropertyValue("height");
    winH = parseInt(tempH);
}

function adjust(){
    document.getElementById("stars").style.top = "0vh";
    document.getElementById("moon").style.top = "0vh";
    document.getElementById("far").style.top = "70vh";
    document.getElementById("back").style.top = "75vh";
    document.getElementById("front").style.top = "75vh";
    document.getElementById("camel").style.top = "auto";
    document.getElementById("camel").style.bottom = "18.5vh";
    document.getElementById("front").style.height = "auto" ;
    document.getElementById("back").style.height = "auto" ;
    document.getElementById("far").style.height = "auto" ;
    starsY= document.getElementById("stars").offsetTop;
    moonY= document.getElementById("moon").offsetTop;
    farY= document.getElementById("far").offsetTop;
    backY= document.getElementById("back").offsetTop;
    frontY= document.getElementById("front").offsetTop;
    camelY= document.getElementById("camel").offsetTop;
    frontH = window.getComputedStyle(document.getElementById("front"), null).getPropertyValue("height");
    backH = window.getComputedStyle(document.getElementById("back"), null).getPropertyValue("height");
    farH = window.getComputedStyle(document.getElementById("far"), null).getPropertyValue("height");
    tempH = window.getComputedStyle(document.getElementById("sorcery"), null).getPropertyValue("height");
    winH = parseInt(tempH);
    myScroll();
}
function myScroll(){
    newY = document.getElementById("misdirection").scrollTop;
    if (newY >= 100){ document.getElementsByTagName("HEADER")[0].classList.add("stickyHeader");}
    else{ document.getElementsByTagName("HEADER")[0].classList.remove("stickyHeader");}
    document.getElementById("stars").style.top = "calc(" + starsY + "px + " + newY / 100 + "px)";
    document.getElementById("stars").style.filter = "blur(" + newY / 1000 + "px)";
    document.getElementById("moon").style.top = "calc(" + moonY + "px + " + newY / 25 + "px)";
    document.getElementById("moon").style.filter = "blur(" + newY / 1000 + "px)";
    document.getElementById("far").style.top = "calc(" + farY + "px - " + newY / 25 + "px)";
    document.getElementById("far").style.filter = "blur(" + newY / 3000 + "px)";
    document.getElementById("back").style.top = "calc(" + backY + "px - " + newY / 10 + "px)";
    document.getElementById("front").style.top = "calc(" + frontY + "px - " + newY / 10 + "px)";
    document.getElementById("camel").style.top = "calc(" + camelY + "px - " + newY / 10.25 + "px)";
    document.getElementById("front").style.height = "calc(" + frontH + " + " + newY / 5 + "px)" ;
    document.getElementById("back").style.height = "calc(" + backH + " + " + newY / 10 + "px)" ;
    document.getElementById("far").style.height = "calc(" + farH + " + " + newY / 10 + "px)" ;   
}


function transit(){
    rem = newY % winH;
    scr = Math.floor(newY/winH);
    document.getElementById("demo1").innerHTML = rem;
    document.getElementById("demo2").innerHTML = scr;

switch(scr){
    case 0: //info
        document.getElementById("sorcery").style.filter = "hue-rotate("+ (-10 * rem /winH) + "deg)";
        if (rem <= 220){document.getElementById("info").style.opacity = (200 - rem) / 200 ;
            if (typeof InstallTrigger == 'undefined'){document.getElementById("img-cont").style.padding = 20 + rem + "px 20px";
                document.getElementById("info-text").style.lineHeight = 1 + rem/50 + "em";
                document.getElementById("info").style.top = 0 - rem/10 + "px" ;}
                document.getElementById("img-cont").style.opacity = (200 - rem) / 200 ;
                document.getElementById("info-text").style.opacity = (200 - rem) / 200 ;
                document.getElementById("about").style.opacity = "0" ;}
        if (rem > winH - 200){document.getElementById("about").style.opacity = (rem + 200 - winH)/200;
            if (typeof InstallTrigger == 'undefined'){document.getElementById("about-text").style.lineHeight = 2 + (winH - rem)/100 + "em";}
                document.getElementById("img-cont").style.padding = 20 + "px 20px";
                document.getElementById("info-text").style.lineHeight = 1 + "em";}
        break;
    case 1: //about
        document.getElementById("sorcery").style.filter = "hue-rotate(" + (-10 - (10 * rem /winH)) + "deg)";
        if (rem <= 220){
            if (typeof InstallTrigger == 'undefined'){document.getElementById("about-text").style.lineHeight =  2 + rem/85 + "em";
                    document.getElementById("about-text").style.marginTop = 0 - rem/5 + "px" ;}
                    document.getElementById("about").style.opacity = (200 - rem) / 200 ;
                    document.getElementById("services").style.opacity = "0" ;}
        if (rem > winH - 200){document.getElementById("services").style.opacity = (rem + 200 - winH)/200;
            if (typeof InstallTrigger == 'undefined'){document.getElementById("services").style.lineHeight =  1.2 + (winH - rem)/100;}
                    document.getElementById("about-text").style.lineHeight =  2 + "em";}
        break;
    case 2: //services
        document.getElementById("sorcery").style.filter = "hue-rotate(" + (-20 + (10 * rem /winH)) + "deg)" ;
        if (rem <= 220){
            if (typeof InstallTrigger == 'undefined'){document.getElementById("services").style.lineHeight =  1.2 + rem/100;
                    document.getElementById("servh2").style.marginTop = 0 + rem/10 + "px"};
                    document.getElementById("services").style.opacity = (200 - rem) / 200 ;
                    document.getElementById("skills").style.opacity = "0" ;}
        if (rem > winH - 200){document.getElementById("skills").style.opacity = (rem + 200 - winH)/200;
            if (typeof InstallTrigger == 'undefined'){document.getElementById("progress-list").style.height = 360 + ((winH - rem) * 240/200) + "px";
                    document.getElementById("gfx").style.height = 240 + ((winH - rem) * 160/200) + "px";
                    document.getElementById("wbd1").style.height = 110 + ((winH - rem) * 80/200) + "px";
                    document.getElementById("wbd2").style.height = 110 + ((winH - rem) * 80/200) + "px";
                    document.getElementById("gfx-text").style.lineHeight = 3.2 + ((winH - rem) * 2/200);
                    document.getElementById("graph").style.height = 160 + ((winH - rem) * 160/200) + "px";
                    document.getElementById("build").style.padding = ((winH - rem) * 40/200) + "px 0px";
                    var temp = document.getElementsByClassName("xgfx-ind"); for (var h = 0; h<4; h++){temp[h].style.padding = 5 + ((winH - rem) * 40/200) + "px 5px"};
                    var temp = document.getElementsByClassName("pie"); for (var h = 0; h<3; h++){temp[h].style.margin = ((winH - rem) * 40/200) + "px 5px"};
                    var temp = document.getElementsByClassName("pro-bar"); for (var h = 0; h<10; h++){temp[h].style.marginBottom = 16 + ((winH - rem) * 24/200) + "px"}
                    document.getElementById("services").style.lineHeight =  1.2;}}
        break;
    case 3: //skills
        document.getElementById("sorcery").style.filter = "hue-rotate(" + (-10 + (10 * rem /winH)) + "deg)" ;
        if (rem <= 220){
            if (typeof InstallTrigger == 'undefined'){document.getElementById("progress-list").style.height = 360 + (rem * 240/200) + "px";
                    document.getElementById("gfx").style.height = 240 + (rem * 160/200) + "px";
                    document.getElementById("wbd1").style.height = 110 + (rem * 80/200) + "px";
                    document.getElementById("wbd2").style.height = 110 + (rem * 80/200) + "px";
                    document.getElementById("gfx-text").style.lineHeight = 3.2 + (rem * 2/200);
                    document.getElementById("graph").style.height = 160 + (rem * 160/200) + "px";
                    document.getElementById("build").style.padding = (rem * 40/200) + "px 0px";
                    var temp = document.getElementsByClassName("xgfx-ind"); for (var h = 0; h<4; h++){temp[h].style.padding = 5 + (rem * 40/200) + "px 5px"}
                    var temp = document.getElementsByClassName("pie"); for (var h = 0; h<3; h++){temp[h].style.margin = (rem * 40/200) + "px 5px"}
                    var temp = document.getElementsByClassName("pro-bar"); for (var h = 0; h<10; h++){temp[h].style.marginBottom = 16 + (rem * 24/200) + "px"}}
                    document.getElementById("skills").style.opacity = (200 - rem) / 200;
                    document.getElementById("e&e").style.opacity = "0" ;}
        if (rem > winH - 200){
            if (typeof InstallTrigger == 'undefined'){document.getElementById("progress-list").style.height = "360px";
                    document.getElementById("gfx").style.height = "240px";
                    document.getElementById("wbd1").style.height = "110px";
                    document.getElementById("wbd2").style.height = "110px";
                    document.getElementById("gfx-text").style.lineHeight = 3.2;
                    document.getElementById("graph").style.height = "160px";
                    document.getElementById("build").style.padding = "0px 0px";
                    var temp = document.getElementsByClassName("xgfx-ind"); for (var h = 0; h<4; h++){temp[h].style.padding = "5px 5px"}
                    var temp = document.getElementsByClassName("pie"); for (var h = 0; h<3; h++){temp[h].style.margin = "0px 5px"}
                    var temp = document.getElementsByClassName("pro-bar"); for (var h = 0; h<10; h++){temp[h].style.marginBottom = "16px"}}
            
                    document.getElementById("e&e").style.opacity = (rem + 200 - winH)/200;
                    ;} 
        break;
    case 4:
    document.getElementById("sorcery").style.filter = "hue-rotate(" + (10 * rem /winH) + "deg)" ;
        break;
    case 5:
    document.getElementById("sorcery").style.filter = "hue-rotate(" + (10 + (10 * rem /winH)) + "deg)" ;
        break;
    case 6:
    document.getElementById("sorcery").style.filter = "hue-rotate(" + (20 + (10 * rem /winH)) + "deg)" ;
        break;
}}


function snap(e) {
    newY = document.getElementById("misdirection").scrollTop;
    rem = newY % winH;
    scr = Math.floor(newY/winH);
	var e = window.event || e;
    var delta = 0 - Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    if(((scr==0)&&(delta==-1))||(scr==6)&&(delta==1)){
    }else if((rem != 0)&&(delta==-1)){
        document.getElementsByTagName("LI")[scr].click();
    }else{document.getElementsByTagName("LI")[scr + delta].click();}
    
    if (typeof InstallTrigger == 'undefined'){e.preventDefault();}
    return false;
}

window.addEventListener("resize", adjust);
window.addEventListener("load", init);
document.getElementById("misdirection").addEventListener("scroll", myScroll);
document.getElementById("misdirection").addEventListener("scroll", transit);
document.getElementById("misdirection").addEventListener("wheel", snap, false);
document.getElementById("misdirection").addEventListener("MozMousePixelScroll", snap, false);
document.getElementById("cv").addEventListener("click", function(){document.location.href= "/downloads/Resume.pdf"});
document.getElementById("brand").addEventListener("click", function(){ document.getElementById("info").scrollIntoView({ block: 'start',  behavior: 'smooth' })});
document.getElementsByTagName("LI")[0].addEventListener("click", function(){ document.getElementById("misdirection").scrollTo({top: 0 * winH, behavior: 'smooth'})});
document.getElementsByTagName("LI")[1].addEventListener("click", function(){ document.getElementById("misdirection").scrollTo({top: 1 * winH, behavior: 'smooth'})});
document.getElementsByTagName("LI")[2].addEventListener("click", function(){ document.getElementById("misdirection").scrollTo({top: 2 * winH, behavior: 'smooth'})});
document.getElementsByTagName("LI")[3].addEventListener("click", function(){ document.getElementById("misdirection").scrollTo({top: 3 * winH, behavior: 'smooth'})});
document.getElementsByTagName("LI")[4].addEventListener("click", function(){ document.getElementById("misdirection").scrollTo({top: 4 * winH, behavior: 'smooth'})});
document.getElementsByTagName("LI")[5].addEventListener("click", function(){ document.getElementById("misdirection").scrollTo({top: 5 * winH, behavior: 'smooth'})});
document.getElementsByTagName("LI")[6].addEventListener("click", function(){ document.getElementById("misdirection").scrollTo({top: 6 * winH, behavior: 'smooth'})});
//document.onkeydown = function(ev){if (ev.keyCode === 123 || ((ev.ctrlKey || ev.keyCode === 224 || ev.keyCode === 17|| ev.keyCode === 91|| ev.keyCode === 93) && (ev.keyCode === 67 || ev.keyCode === 83 || ev.keyCode === 86 || ev.keyCode === 85 || ev.keyCode === 117 || (ev.shiftKey && ev.keyCode === 73)))){ev.preventDefault();ev.stopPropagation();return false;} else { return true;}};
//document.getElementsByTagName("BODY")[0].oncontextmenu = function(){return false};