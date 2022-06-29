let creatAcc= document.querySelector("#creatAcc");
let fish = document.querySelector("#fish");
let login = document.querySelector("#login");
let i=1;
let clickArrow = false;
let arrow =  document.querySelector("#arrow");
arrow.onclick = function swapNewPage(){
    if(clickArrow== false){
       document.getElementById("login").style.marginTop= "-500px";
       document.getElementById("login").style.transitionDuration="2s";
       document.getElementById("arrow").style.left= "700px";
       document.getElementById("arrow").style.top ="100px";
       document.getElementById("signin").style.marginLeft="0px";
       clickArrow=true;
    }
    else{
        document.getElementById("login").style.marginTop= "180px";
        clickArrow=false;
        document.getElementById("signin").style.marginLeft="700px";
        document.getElementById("arrow").style.left= "730px";
       document.getElementById("arrow").style.top ="140px";
    }
}
 function goToSignIn(){
    document.getElementById("login").style.marginTop= "-500px";
       document.getElementById("login").style.transitionDuration="2s";
       document.getElementById("arrow").style.left= "700px";
       document.getElementById("arrow").style.top ="100px";
       document.getElementById("signin").style.marginLeft="0px";
       clickArrow=true;
}
goToSignIn();
let signInGmail= document.getElementById("signInGmail");
let signInName= document.getElementById("signInName");
let signInPassword= document.getElementById("signInPassword");
let signinProblem =document.getElementById("signinProblem");
let contentErrSign = signinProblem.innerHTML;
let ErrProblem = "";
function DangKy(){
   var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    if( regExp.test(document.getElementById("signInGmail").value)){
      ErrProblem+="";
    }
    else{
      ErrProblem+="*Gmail không hợp lệ!!! ";
      document.getElementById("signInGmail").value="";
    }
   for(let dem=0;dem<= document.getElementById("signInName").value.length--;dem++){
      if(document.getElementById("signInName").value[dem]==" "  ){
         ErrProblem+="*Tên không hợp lệ!!! ";
         document.getElementById("signInName").value="";
         break;
      }
      if(document.getElementById("signInName").value.length--<=0){
         ErrProblem+="*Tên không hợp lệ!!! \n";
         break;
      }
      if(dem== document.getElementById("signInName").value.length--){
         ErrProblem+="\n";
      }
   }
   for(let dem=0; dem<= document.getElementById("signInPassword").value.length--;dem++){
      if(document.getElementById("signInName").value[dem]==" "  ){
         ErrProblem+="Mật khẩu không hợp lệ";
         document.getElementById("signInPassword").value="";
         break;
      }
      if(document.getElementById("signInPassword").value.length--<=0){
         ErrProblem+="*Mật khẩu không hợp lệ ";
         break;
      }
      if(dem == document.getElementById("signInPassword").value.length--){
         ErrProblem+="\n";
      }
   }
   signinProblem.innerHTML= ErrProblem.toString();
   ErrProblem="";
}