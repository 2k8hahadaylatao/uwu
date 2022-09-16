
let box = document.getElementById("box");
let creatAcc = document.getElementById("creatAcc");
let creatNew = document.getElementById("creatNew");
creatAcc.onmouseover= function() { 
    document.getElementById("box").style.boxShadow=" -5px 7px 10px black";
    document.getElementById("box").style.transitionDuration= "1s";
    //boxShadow=" black 5px 7px 10px";
}
creatAcc.onmouseout=function() { 
    document.getElementById("box").style.boxShadow=" -1px 1px 10px black"
    //boxShadow=" black 5px 7px 10px";
}
creatNew.onclick= function(){
    rotatecomplete=1;
    document.getElementById("login").style.left =" 1900px";
    document.getElementById("signin").style.left =" 650px";
    document.getElementById("login").style.transitionDuration="1s";
    document.getElementById("signin").style.transitionDuration="1s";
    document.getElementById("rotateImg").style.transform="rotate(0deg)";
}
let rotateImg = document.getElementById("rotateImg");
let login = document.getElementById("login");
let rotatecomplete = 2;
rotateImg.onclick= function(){
    if(rotatecomplete==2){
        rotatecomplete=1;
        document.getElementById("login").style.left =" 1900px";
        document.getElementById("signin").style.left =" 650px";
        document.getElementById("login").style.transitionDuration="1s";
        document.getElementById("signin").style.transitionDuration="1s";
        document.getElementById("rotateImg").style.transform="rotate(0deg)";
          }
    else if(rotatecomplete==1){
    document.getElementById("login").style.left =" 650px";
    document.getElementById("signin").style.left =" 1900px";
    document.getElementById("login").style.transitionDuration="1s";
    rotatecomplete=2;
    document.getElementById("signin").style.transitionDuration="1s";
    document.getElementById("rotateImg").style.transform="rotate(360deg)";
    document.getElementById("eye").style.top="230px";
    }
    
        console.log(rotatecomplete);
}
let eye=document.getElementById("eye");
let eyeS= document.getElementById("eyeS");
let eyeconfirm= true;
let eyeconfirmS= true;
eye.onclick = function(){
    if(eyeconfirm==true){
    document.getElementById("eye").className="fa-solid fa-eye-slash fa-2x";
    document.getElementById("loginPass").setAttribute("type","text");
    
    eyeconfirm=false;
    }
    else{
        document.getElementById("eye").className="fa-solid fa-eye fa-2x";
        
        document.getElementById("loginPass").setAttribute("type","password");
        eyeconfirm=true;
    }
}
eyeS.onclick = function(){
    if(eyeconfirmS==true){
    document.getElementById("eyeS").className="fa-solid fa-eye-slash fa-2x";
    
    document.getElementById("signinPass").setAttribute("type","text");
    eyeconfirmS=false;
    }
    else{
        document.getElementById("eyeS").className="fa-solid fa-eye fa-2x";
        
        document.getElementById("signinPass").setAttribute("type","password");
        eyeconfirmS=true;
    }
}


