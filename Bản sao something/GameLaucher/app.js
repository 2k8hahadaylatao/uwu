import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
        import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider} 
        from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js'
        import {
        getDatabase,ref,set,onValue,get,child,onDisconnect
      } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js';
      import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
      import { collection, addDoc, updateDoc,setDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"; 
        const firebaseConfig = {
          apiKey: "AIzaSyATxWvLcs-Hygng6exRrQ7BXrMPwWwHryc",
          authDomain: "my-project-5-328c9.firebaseapp.com",
          projectId: "my-project-5-328c9",
          storageBucket: "my-project-5-328c9.appspot.com",
          messagingSenderId: "314343954446",
          appId: "1:314343954446:web:22371cf67d9b073d13045f",
          measurementId: "G-SHX9H9YS27"
        };
        // Initialize Firebase
const app = initializeApp(firebaseConfig); const firestore = getFirestore(app);
const auth = getAuth(app);               const analytics = getAnalytics(app);
const database = getDatabase(app);       const user = auth.currentUser;
const provider = new GoogleAuthProvider();
class Arena{
    constructor(arenaNumber) {
        this.arenaNumber = arenaNumber;
    }
    logNum(){
        console.log(this.arenaNumber);
    }
}
let data;
let uid;
let email;
let name;
let rank;
let WinRank;
let playerRefImg;
let playerRefName;
let playerRefRank;
let numAr;
let countArena = 0;
let yourField;
let enermyField;
let Win;
// Bạn là RED
let winner = document.getElementById("winner");
let loser = document.getElementById("loser");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        uid= user.uid;
        email = user.email;
        playerRefName=ref(database, `users/${uid}/username`);
        playerRefImg=ref(database, `users/${uid}/profile_picture`);
        let playerRefRank= ref(database, `users/${uid}/rank`);
        onValue(playerRefImg, (snapshot) => {
        data = snapshot.val();    
        document.getElementById("playerImg").src = data;   
        });
        onValue(playerRefName, (snapshot) => {
        name = snapshot.val();  
        document.getElementById("playerName").innerHTML = `Name: ${name}`;   
        });
        onValue(playerRefRank, (snapshot) => {
        rank = snapshot.val();   
        document.getElementById("playerScore").innerHTML = `Rank: ${rank}`;   
        });   
        for (let i = 0; i < 1000; i++) {
            onValue(ref(database, `Arena${i}/RED/name`),(e)=>{
                if(e.val()==name )
                {
                    countArena = i;
                    alert("Bạn là RED");
                    onValue(ref(database, `Arena${i}/BLUE/name`),(e)=>{
                        document.getElementById("playerName2").innerHTML = `Name: ${e.val()}`;
                    })
                    onValue(ref(database, `Arena${i}/BLUE/rank`),(s)=>{
                        document.getElementById("playerScore2").innerHTML = `Rank: ${s.val()}`;
                        console.log(s.val());
                    });
                    onValue(ref(database, `Arena${i}/BLUE/profile_picture`),(d)=>{
                        document.getElementById("playerImg2").src = d.val();
                        console.log(d.val());
                    });
                    
                }
            })    
            onValue(ref(database, `Arena${i}/BLUE/name`),(e)=>{
                if(e.val()==name )
                {
                    countArena = i;
                    alert("Bạn là BLUE");
                    onValue(ref(database, `Arena${i}/RED/name`),(r)=>{
                        document.getElementById("playerName2").innerHTML = `Name: ${r.val()}`;
                    });
                    onValue(ref(database, `Arena${i}/RED/rank`),(s)=>{
                        document.getElementById("playerScore2").innerHTML = `Rank: ${s.val()}`;
                        console.log(s.val());
                    });
                    onValue(ref(database, `Arena${i}/RED/profile_picture`),(d)=>{
                        document.getElementById("playerImg2").src = d.val();
                        console.log(d.val());
                    });
                }
            })          
        }
    }
    if(!user){
        console.log("thoát cái dịt mẹ mà thoát");
        // let find = false;
        // for( let i = 1; i<=200 ; i++ ){
        //     onValue(ref(database,`Arena${i}/RED/name`),(s)=>{
        //         if( s.val() == name){ 
        //     set(ref(database,`Arena${i}/RED/`),{});
        //     set(ref(database,`Arena${i}/RED/online`),false);
        //     set(ref(database,`Arena${i}/RED/ready`),false);
        //     set(ref(database,`Arena${i}/BLUE/ready`),false);
        //     set(ref(database,`Arena${i}/msg`),{
        //         msg0: "is Running",
        //         msg1:"",
        //     });
        //     set(ref(database,`Arena${i}/onBattle`),false);
        //     set(ref(database,`Arena${i}/count`),"RED");
        //     set(ref(database,`Arena${i}/Win`),"");
        //     find = true;
        //         }
        //     });
        //     onValue(ref(database,`Arena${i}/BLUE/name`),(s)=>{
        //         if(s.val()==name){
        //     set(ref(database,`Arena${i}/BLUE/`),{});
        //     set(ref(database,`Arena${i}/RED/ready`),false);
        //     set(ref(database,`Arena${i}/BLUE/ready`),false);
        //     set(ref(database,`Arena${i}/BLUE/online`),false);
        //     set(ref(database,`Arena${i}/msg`),{
        //         msg0: "is Running",
        //         msg1:"",
        //     });
        //     set(ref(database,`Arena${i}/onBattle`),false);
        //     set(ref(database,`Arena${i}/count`),"RED");
        //     set(ref(database,`Arena${i}/Win`),"");
        //     find = true;
        //         }
        //     });
        // }
        // setTimeout(() => {
        //     location.reload()    
        //     }, 1600);
         }
});
let num = [
    "a","b","c","d",'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"A","B",'C',"D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S"
]
function runGame(){
const block= 50;
const blockSize= 15;
const color = [
    "WHITE","BLUE","RED","GREEN","YELLOW","LIME","ORANGE"
];
const plane =[
[

],
[
    [
        [0,0,4,0,0],
        [3,3,3,3,3],
        [0,0,3,0,0],
        [0,3,3,3,0],
        [0,0,0,0,0],
    ],
    [
        [0,3,0,0,0],
        [0,3,0,3,0],
        [4,3,3,3,0],
        [0,3,0,3,0],
        [0,3,0,0,0]
    ],
    [
        [0,0,0,0,0],
        [0,3,3,3,0],
        [0,0,3,0,0],
        [3,3,3,3,3],
        [0,0,4,0,0],
    ],
    [
        [0,0,0,3,0],
        [0,3,0,3,0],
        [0,3,3,3,4],
        [0,3,0,3,0],
        [0,0,0,3,0]
    ],
    []
],

[
    [
        [0,0,0,5,5,0,0,0],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,1,1,0,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    [
    [0,1,1,0,0,0,0,0],  
    [0,1,1,0,0,0,0,0],   
    [0,1,1,0,1,1,0,0],  
    [5,1,1,1,1,1,0,0],  
    [5,1,1,1,1,1,0,0],  
    [0,1,1,0,1,1,0,0],  
    [0,1,1,0,0,0,0,0],  
    [0,1,1,0,0,0,0,0],  
    ],
    [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,1,1,0,0,0],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [0,0,0,5,5,0,0,0],
    ],
    [
            [0,0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1,0],
            [0,0,1,1,0,1,1,0],  
            [0,0,1,1,1,1,1,5],  
            [0,0,1,1,1,1,1,5],  
            [0,0,1,1,0,1,1,0],
            [0,0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1,0]
    ],
    []
],

[
    [
        [2,0,2],
        [2,6,2],
        [2,0,2],
    ],
    [
        [2,2,2],
        [0,6,0],
        [2,2,2],
    ],
    [
        [2,0,2],
        [2,6,2],
        [2,0,2],
    ],
    [
        [2,2,2],
        [0,6,0],
        [2,2,2],
    ],
    []

]
]
const white = 0;
const canvas= document.getElementById("field");
const ctx= canvas.getContext("2d");
ctx.canvas.height = block * blockSize;
ctx.canvas.width = block * blockSize;
class Field{
    constructor(ctx){
        this.ctx= ctx;
        this.grid = this.newField();
    }
    newField(){
        return Array.from({length:block}, ()=> Array(block).fill(0));
    }
    draw(x,y,colorId){
        this.ctx.fillStyle=color[colorId] || color[0];
        this.ctx.fillRect(x*blockSize,y*blockSize,blockSize,blockSize);
        this.fillStyle = "black";
        this.ctx.strokeRect(x*blockSize,y*blockSize,blockSize,blockSize);
    }
    buildField(){
        for(let row=0; row< this.grid.length; row++){
            for(let col=0; col< this.grid[0].length; col++){
                this.draw(col,row,this.grid[row][col]);
            }
        }
    }
}

let field = new Field(ctx);
field.buildField();
class KeyPressListener {
    constructor(keyCode, callback) {
      let keySafe = true;
      this.keydownFunction = function(event) {
        if (event.code === keyCode) {
           if (keySafe) {
              keySafe = false;
              callback();
           }  
        }
     };
     this.keyupFunction = function(event) {
        if (event.code === keyCode) {
           keySafe = true;
        }         
     };
     document.addEventListener("keydown", this.keydownFunction);
     document.addEventListener("keyup", this.keyupFunction);
    }
  
    unbind() { 
      document.removeEventListener("keydown", this.keydownFunction);
      document.removeEventListener("keyup", this.keyupFunction);
    }
  
  
  }
class Plane{
    constructor(id) {
        this.id= id;
        this.plane = plane[id];
        this.index = 0;
        this.colPos= 0;
        this.rowPos=0;
    }
    drawPlane(){
        for(let row=0; row < this.plane[this.index].length; row++){
            for(let col = 0;col<this.plane[this.index].length; col++){
                if(this.plane[this.index][row][col]!= white){
                    field.draw(col+this.colPos,row+this.rowPos,this.id)
                    
                }
            }                     
        }
        if(this.id == 1 && this.index== 0 ){
            field.draw(2+this.colPos,0+this.rowPos,4);
            
        }
        if(this.id == 2 && this.index== 0){
            field.draw(3+this.colPos,0+this.rowPos,5);
            field.draw(4+this.colPos,0+this.rowPos,5);
        }
        if(this.id == 3){
            field.draw(1+this.colPos,1+this.rowPos,6);
        }
        if(this.id == 1 && this.index== 1){
            field.draw(0+this.colPos,2+this.rowPos,4);
            
        }
        if(this.id == 2 && this.index== 1){
            field.draw(0+this.colPos,3+this.rowPos,5);
            field.draw(0+this.colPos,4+this.rowPos,5);
        }
        if(this.id == 1 && this.index== 2){
            field.draw(2+this.colPos,4+this.rowPos,4);
            
        }
        if(this.id == 2 && this.index== 2){
            field.draw(3+this.colPos,7+this.rowPos,5);
            field.draw(4+this.colPos,7+this.rowPos,5);
        }
        if(this.id == 1 && this.index== 3){
            field.draw(4+this.colPos,2+this.rowPos,4);
            
        }
        if(this.id == 2 && this.index== 3){
            field.draw(7+this.colPos,3+this.rowPos,5);
            field.draw(7+this.colPos,4+this.rowPos,5);
        }

    }
    reset(){
        for(let row=0; row < this.plane[this.index].length; row++){
            for(let col = 0;col<this.plane[this.index].length; col++){
                    field.draw(col+this.colPos,row+this.rowPos,0)
            }                     
        }
    }
    moveLeft(){
        if(!this.check(this.rowPos, this.colPos-1,this.plane[this.index])){
        this.reset();
        this.colPos--;
        this.drawPlane();}
    }
    moveRight(){
        if(!this.check(this.rowPos, this.colPos+1,this.plane[this.index])){
        this.reset();
        this.colPos++;
        this.drawPlane();}
    }
    moveUp(){
        if(!this.check(this.rowPos-1, this.colPos,this.plane[this.index])){
            this.reset();
        this.rowPos--;
        this.drawPlane();}
    }
    moveDown(){
        if(!this.check(this.rowPos+1, this.colPos,this.plane[this.index])){
        this.reset();
        this.rowPos++;
        this.drawPlane();}
    }
    rotate(){
        if(!this.check(this.rowPos, this.colPos,this.plane[this.index+1])){
        this.index= (this.index+1)%4;
        this.reset();
        this.drawPlane();}
    }
    check(nextRow,nextCol,nextIndex){

        for(let row=0; row < nextIndex.length; row++){
            for(let col = 0;col<nextIndex[0].length; col++){
                if(nextIndex[row][col]!= white){
                    if((col + nextCol > 49)||(row+nextRow>49) || (col + nextCol < 0)||(row+nextRow< 0)||
                    field.grid[row+nextRow][col+nextCol]!== white)return true;
                }
            }                     
        }
    }
    wall(){
        for(let row=0; row < this.plane[this.index].length; row++){
            for(let col = 0;col<this.plane[this.index].length; col++){
                if(this.plane[this.index][row][col]==4){
                    field.grid[row+this.rowPos][col+this.colPos]=4;
                }
                if(this.plane[this.index][row][col]==5){
                    field.grid[row+this.rowPos][col+this.colPos]=5;
                }
                if(this.plane[this.index][row][col]==6){
                    field.grid[row+this.rowPos][col+this.colPos]=6;
                }
                if(this.plane[this.index][row][col]!= white && this.plane[this.index][row][col]!=4 &&
                    this.plane[this.index][row][col]!=5 && this.plane[this.index][row][col]!=6){
                    field.grid[row+this.rowPos][col+this.colPos]=this.id;
                }
            }                     
        }
        field.buildField();
    }

}
let checking = false;
let weight = 0;
let maxWeight =200;

document.getElementById("smallPlane").onclick =function() {

    let planes = new Plane(3);
    if(weight+25>maxWeight){
        checking = true;    
    }
    if(checking==false ){
        weight+=25;
        document.getElementById("w").innerHTML= weight+" l/t<br> -------<br> 200 l/t"
    
    checking = true;
    planes.drawPlane();
    new KeyPressListener("KeyA", ()=>{
        planes.moveLeft();
    });
    new KeyPressListener("KeyS", ()=>{
        planes.moveDown();
    });
    new KeyPressListener("KeyD", ()=>{
        planes.moveRight();
        
    });
    new KeyPressListener("KeyW", ()=>{
        planes.moveUp();
    });
    new KeyPressListener("Space",()=>{
        planes.rotate();
    } );
    new KeyPressListener("Enter",()=>{
        checking=false;
        planes.wall();
    } );
}
    else{
        
        alert("Chưa hoàn thành xong máy bay trước đó hoặc quá trọng lượng");
    }
    
}
document.getElementById("normalPlane").onclick =function () {
    let planes = new Plane(1);
    if(weight+50>maxWeight){
        checking = true;
        
    }
    if(checking==false ){
        weight+=50;
        document.getElementById("w").innerHTML= weight+" l/t<br> -------<br> 200 l/t"
    
    planes.drawPlane(); 
    checking=true;
    new KeyPressListener("KeyA", ()=>{
        planes.moveLeft();
    });
    new KeyPressListener("KeyS", ()=>{
        planes.moveDown();
    });
    new KeyPressListener("KeyD", ()=>{
        planes.moveRight();
    });
    new KeyPressListener("KeyW", ()=>{
        planes.moveUp();
    });
    new KeyPressListener("Space",()=>{
        planes.rotate();
    } );
    new KeyPressListener("Enter",()=>{
        checking=false;
        planes.wall();
    } );
}

    else{
        alert("Chưa hoàn thành xong máy bay trước đó hoặc quá trọng lượng");
    }
}
document.getElementById("bigPlane").onclick =function () {
    let planes = new Plane(2);
    if(weight+100>maxWeight){
        checking = true;     
    }
    if(checking==false ){
        weight+=100;
        document.getElementById("w").innerHTML= weight+" l/t<br> -------<br> 200 l/t"
    
    planes.drawPlane(); 
    checking=true;
    new KeyPressListener("KeyA", ()=>{
        planes.moveLeft();
    });
    new KeyPressListener("KeyS", ()=>{
        planes.moveDown();
    });
    new KeyPressListener("KeyD", ()=>{
        planes.moveRight();
    });
    new KeyPressListener("KeyW", ()=>{
        planes.moveUp();
    });
    new KeyPressListener("Space",()=>{
        planes.rotate();
    } );
    new KeyPressListener("Enter",()=>{
        checking=false;
        planes.wall();
    } );}
    else{
        alert("Chưa hoàn thành xong máy bay trước đó hoặc quá trọng lượng");
    }
}
let nowRow = 7.8;
let thuaRow =0;
let nowCol = 1113.5;
let thuaCol = 0;
new KeyPressListener("ArrowUp",()=>{    
    document.getElementById("row").style.top = `6px`;
    nowRow=7;
    thuaRow=0;
})
new KeyPressListener("ArrowDown",()=>{
    nowRow+=15;
    nowRow-=thuaRow;
    if(thuaRow==2){
        thuaRow =1;
    }else
    thuaRow++;
    document.getElementById("row").style.top = `${nowRow}px`;
})
new KeyPressListener("ArrowLeft",()=>{
    nowCol-=15;
    nowCol+=thuaCol;
    if(thuaCol==2){
        thuaCol =1;
    }else
    thuaCol++;
    document.getElementById("col").style.left= `${nowCol}px`;
})
new KeyPressListener("ArrowRight",()=>{
    nowCol = 1113.5;
    document.getElementById("col").style.left= `${nowCol}px`;
    thuaCol=0;
})

new KeyPressListener("KeyE",()=>{
    
    if( weight != 0 &&checking== false) {
    document.getElementById("w").innerHTML= weight+" l/t<br> -------<br> 200 l/t";
    document.getElementById("w").innerHTML= `${weight} l/t<br> -------<br> ${weight} l/t`;
    checking= true;
    document.getElementById("smallPlane").style.marginTop="-10000px";
let nho;
let dbRef = ref(getDatabase());
let BLUEname;
let REDname;
for(let i=1; i<=1000;i++){
onValue(ref(database, `Arena${i}/RED/name`),(e)=>{
    REDname = e.val();
    
});
console.log(REDname);
if(REDname==name )
    {
        nho=i;
        set(ref(database,`Arena${nho}/RED/field`),field.grid);
        set(ref(database, `Arena${nho}/RED/ready`),true);
    }
onValue(ref(database, `Arena${i}/BLUE/name`),(e)=>{
    BLUEname=e.val();
});
console.log(BLUEname);
if(BLUEname==name )
    {
        nho=i;
        set(ref(database, `Arena${nho}/BLUE/field`),field.grid);
        set(ref(database, `Arena${nho}/BLUE/ready`),true);
    }
}

console.log(nho);
onValue(ref(database,`Arena${nho}/RED/ready`),(e)=>{
    onValue(ref(database, `Arena${nho}/BLUE/ready`),(r)=>{
        console.log(e.val(),r.val());
        if(e.val()==true && r.val()==true){
            alert("Start battle");
            set(ref(database,`Arena${nho}/Starting`),true)
        }
    });
})
//RED
onValue(ref(database, `Arena${nho}/RED/name`),(e)=>{
    if(e.val()==name )
    {
        onValue(ref(database,`Arena${nho}/BLUE/field`),(snapshot)=>{
            let enemyField =  snapshot.val();
            document.getElementById("cod").onclick= function(){
                let cod= document.getElementById("coordinate").value;
                let count;
                let dbRef= ref(getDatabase());
                if(cod[0]>="A" && cod[0]<="S" && cod[1]>='0' )
                {
                    get(child(dbRef,`Arena${nho}/count`)).then((countMsg) =>{
                        count=countMsg.val();
                    if(count=="RED"){
                        //cod length
                        if( cod.length == 3){
                            let row=num.indexOf(cod[0]);
                            let shot =0;
                            let col = (cod[1]+cod[2])-1;
                            console.log(col,row);
                            if(enemyField[col][row]==0){
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} không bắn trúng gì cả của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                
                            }
                            if(enemyField[col][row]==7){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng xác máy bay cmnr `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==8){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng xác máy bay cmnr `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==9){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} không bắn trúng gì cả `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==1){
                                let cleanPlane = false;
                                enemyField[col][row]=9;
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 9){
                                            shot++;
                                            if(shot == 5){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-4; i<=4;i++){
                                        for(let j = -4 ; j<=4;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 9){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 4){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 1){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó luôn `);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                            }
                            if(enemyField[col][row]==3){
                                enemyField[col][row]=8;
                                let cleanPlane=false;
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 8){
                                            shot++;
                                            if(shot == 3){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 8){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 3){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 6){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ luôn máy bay đó `);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            }
                            if(enemyField[col][row]==2){
                                enemyField[col][row]=7;
                                let cleanPlane=false;
                                for( let i =-7; i<=7;i++){
                                    for(let j = -7 ; j<=7;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 7){
                                            shot++;
                                            if(shot == 8) {
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó `);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                            }
                            if(enemyField[col][row]==4){
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 9){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 4){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 1){
                                            enemyField[i+col][j+row]=0;
                                        }
                                    }
                                }
                                console.table(enemyField);
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            if(enemyField[col][row]==5){
                                let shot =0;
                                enemyField[col][row]=10;
                                if(enemyField[col+1][row]==10 || enemyField[col-1][row]==10|| enemyField[col][row+1]==10||
                                enemyField[col][row-1]==10){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                }
                                
                                console.table(enemyField);
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            if(enemyField[col][row]==6){
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 6){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 3){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 8){
                                            enemyField[i+col][j+row]=0;
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                
                            }
                        }
                        if(cod.length ==2){ 
                            let row=num.indexOf(cod[0]);
                            let shot =0;
                            let col = cod[1]-1;
                            console.log(col,row);
                            //Set cod
                            if(enemyField[col][row]==0){
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} không bắn trúng gì cả của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                
                            }
                            if(enemyField[col][row]==7){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng xác máy bay cmnr `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==8){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng xác máy bay cmnr `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==9){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} không bắn trúng gì cả `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==1){
                                let cleanPlane = false;
                                enemyField[col][row]=9;
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 9){
                                            shot++;
                                            if(shot == 5){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-4; i<=4;i++){
                                        for(let j = -4 ; j<=4;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 9){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 4){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 1){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó luôn `);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                            }
                            if(enemyField[col][row]==3){
                                enemyField[col][row]=8;
                                let cleanPlane=false;
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 8){
                                            shot++;
                                            if(shot == 3){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 8){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 3){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 6){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ luôn máy bay đó `);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            }
                            if(enemyField[col][row]==2){
                                enemyField[col][row]=7;
                                let cleanPlane=false;
                                for( let i =-7; i<=7;i++){
                                    for(let j = -7 ; j<=7;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 7){
                                            shot++;
                                            if(shot == 8) {
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó `);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                            }
                            if(enemyField[col][row]==4){
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 9){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 4){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 1){
                                            enemyField[i+col][j+row]=0;
                                        }
                                    }
                                }
                                console.table(enemyField);
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            if(enemyField[col][row]==5){
                                let shot =0;
                                enemyField[col][row]=10;
                                if(enemyField[col+1][row]==10 || enemyField[col-1][row]==10|| enemyField[col][row+1]==10||
                                enemyField[col][row-1]==10){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                }
                                
                                console.table(enemyField);
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            if(enemyField[col][row]==6){
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 6){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 3){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 8){
                                            enemyField[i+col][j+row]=0;
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                
                            }
                            
                        }
                         }
                         else{
                            alert("chưa đến lượt bạn");
                        }
                    });
                }
                else {
                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:${cod}`);
                    // let p = document.createElement("p");
                    // let text= document.createTextNode(`${cod}`)
                    // let ChatLog = document.getElementById("chatLog"); 
                    // p.appendChild(text);
                    // ChatLog.appendChild(p);
                };
                    if(cod[0]>="a" && cod[0]<="z" && cod[1]>='0' )
                {
                    get(child(dbRef,`Arena${nho}/count`)).then((countMsg) =>{
                        count=countMsg.val();
                    if(count=="RED"){
                        //cod length
                        if( cod.length == 3){
                            let row=num.indexOf(cod[0]);
                            let shot =0;
                            let col = (cod[1]+cod[2])-1;
                            console.log(col,row);
                            if(enemyField[col][row]==0){
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} không bắn trúng gì cả của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                
                            }
                            if(enemyField[col][row]==7){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng xác máy bay cmnr `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==8){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng xác máy bay cmnr `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==9){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} không bắn trúng gì cả `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==1){
                                let cleanPlane = false;
                                enemyField[col][row]=9;
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 9){
                                            shot++;
                                            if(shot == 5){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-4; i<=4;i++){
                                        for(let j = -4 ; j<=4;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 9){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 4){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 1){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó luôn `);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                            }
                            if(enemyField[col][row]==3){
                                enemyField[col][row]=8;
                                let cleanPlane=false;
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 8){
                                            shot++;
                                            if(shot == 3){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 8){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 3){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 6){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ luôn máy bay đó `);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            }
                            if(enemyField[col][row]==2){
                                enemyField[col][row]=7;
                                let cleanPlane=false;
                                for( let i =-7; i<=7;i++){
                                    for(let j = -7 ; j<=7;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 7){
                                            shot++;
                                            if(shot == 8) {
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó `);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                            }
                            if(enemyField[col][row]==4){
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 9){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 4){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 1){
                                            enemyField[i+col][j+row]=0;
                                        }
                                    }
                                }
                                console.table(enemyField);
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            if(enemyField[col][row]==5){
                                let shot =0;
                                enemyField[col][row]=10;
                                if(enemyField[col+1][row]==10 || enemyField[col-1][row]==10|| enemyField[col][row+1]==10||
                                enemyField[col][row-1]==10){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                }
                                
                                console.table(enemyField);
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            if(enemyField[col][row]==6){
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 6){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 3){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 8){
                                            enemyField[i+col][j+row]=0;
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                
                            }
                        }
                        if(cod.length ==2){ 
                            let row=num.indexOf(cod[0]);
                            let shot =0;
                            let col = cod[1]-1;
                            console.log(col,row);
                            //Set cod
                            if(enemyField[col][row]==0){
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} không bắn trúng gì cả của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                
                            }
                            if(enemyField[col][row]==7){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng xác máy bay cmnr `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==8){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng xác máy bay cmnr `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==9){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} không bắn trúng gì cả `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==1){
                                let cleanPlane = false;
                                enemyField[col][row]=9;
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 9){
                                            shot++;
                                            if(shot == 5){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-4; i<=4;i++){
                                        for(let j = -4 ; j<=4;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 9){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 4){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 1){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó luôn `);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                            }
                            if(enemyField[col][row]==3){
                                enemyField[col][row]=8;
                                let cleanPlane=false;
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 8){
                                            shot++;
                                            if(shot == 3){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 8){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 3){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 6){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ luôn máy bay đó `);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            }
                            if(enemyField[col][row]==2){
                                enemyField[col][row]=7;
                                let cleanPlane=false;
                                for( let i =-7; i<=7;i++){
                                    for(let j = -7 ; j<=7;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 7){
                                            shot++;
                                            if(shot == 8) {
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                                if(cleanPlane == true){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó `);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                }
                            }
                            if(enemyField[col][row]==4){
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 9){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 4){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 1){
                                            enemyField[i+col][j+row]=0;
                                        }
                                    }
                                }
                                console.table(enemyField);
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            if(enemyField[col][row]==5){
                                let shot =0;
                                enemyField[col][row]=10;
                                if(enemyField[col+1][row]==10 || enemyField[col-1][row]==10|| enemyField[col][row+1]==10||
                                enemyField[col][row-1]==10){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                }
                                
                                console.table(enemyField);
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                            }
                            if(enemyField[col][row]==6){
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){};
                                        if(enemyField[i+col][j+row]== 6){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 3){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 8){
                                            enemyField[i+col][j+row]=0;
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/BLUE/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"BLUE");
                                
                            }
                            
                        }
                         }
                         else{
                            alert("chưa đến lượt bạn");
                        }
                    });
                }
                else {
                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:${cod}`);
                    // let p = document.createElement("p");
                    // let text= document.createTextNode(`${cod}`)
                    // let ChatLog = document.getElementById("chatLog"); 
                    // p.appendChild(text);
                    // ChatLog.appendChild(p);
                };
            }
        });

    }
});
//BLUE
onValue(ref(database, `Arena${nho}/BLUE/name`),(e)=>{
    if(e.val()==name )
    {
        onValue(ref(database, `Arena${nho}/RED/field`),(snapshot)=>{
            let enemyField =  snapshot.val();
            document.getElementById("cod").onclick= function(){
                let cod= document.getElementById("coordinate").value;
                let count;
                let dbRef= ref(getDatabase());
                if(cod[0]>="A" && cod[0]<="S" && cod[1]>='0')
                {
                    get(child(dbRef,`Arena${nho}/count`)).then((countMsg) =>{
                        count=countMsg.val();
                    if(count=="BLUE"){
                        if( cod.length == 3){
                            let row=num.indexOf(cod[0]);
                            let shot =0;
                            let col = (cod[1]+cod[2])-1;
                            console.log(col,row);
                            ///
                            if(enemyField[col][row]==0){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} không bắn trúng gì cả của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==7){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==8){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==9){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==3){
                                let cleanPlane = false;
                                enemyField[col][row]=9;
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 9){
                                            shot++;
                                            if(shot == 5){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 9){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 6){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 3){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                        set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó `);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                    }
                                
                                
                            }
                                
                            }
                            if(enemyField[col][row]==2){
                                let cleanPlane=false;
                                enemyField[col][row]=8;
                                for( let i =-7; i<=7;i++){
                                    for(let j = -7 ; j<=7;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 8){
                                            shot++;
                                            if(shot == 8){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 8){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");}
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==1){
                                enemyField[col][row]=7;
                                let cleanPlane=false;
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 7){
                                            shot++;
                                            if(shot == 8) {
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-4; i<=4;i++){
                                        for(let j = -4 ; j<=4;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 1){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 4){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==4){
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== 7){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 4){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 1){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==5){
                                let shot =0;
                                enemyField[col][row]=10;
                                if(enemyField[col+1][row]==10 || enemyField[col-1][row]==10|| enemyField[col][row+1]==10||
                                enemyField[col][row-1]==10){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==6){
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== 6){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 3){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 9){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg1`),`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng đầu của 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                        }
                        if(cod.length ==2){
                            let row=num.indexOf(cod[0]);
                            let shot =0;
                            let col = cod[1]-1;
                            console.log(col,row);
                            //Set cod 
                            if(enemyField[col][row]==0){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} không bắn trúng gì cả của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==7){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==8){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==9){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==3){
                                let cleanPlane = false;
                                enemyField[col][row]=9;
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 9){
                                            shot++;
                                            if(shot == 5){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 9){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 6){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 3){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                        set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó `);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                    }
                                
                                
                            }
                                
                            }
                            if(enemyField[col][row]==2){
                                let cleanPlane=false;
                                enemyField[col][row]=8;
                                for( let i =-7; i<=7;i++){
                                    for(let j = -7 ; j<=7;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 8){
                                            shot++;
                                            if(shot == 8){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 8){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");}
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==1){
                                enemyField[col][row]=7;
                                let cleanPlane=false;
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 7){
                                            shot++;
                                            if(shot == 8) {
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-4; i<=4;i++){
                                        for(let j = -4 ; j<=4;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 1){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 4){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==4){
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== 7){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 4){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 1){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==5){
                                let shot =0;
                                enemyField[col][row]=10;
                                if(enemyField[col+1][row]==10 || enemyField[col-1][row]==10|| enemyField[col][row+1]==10||
                                enemyField[col][row-1]==10){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==6){
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== 6){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 3){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 9){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg1`),`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng đầu của 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }

                        }
                    }
                    else{
                        alert("chưa đến lượt bạn");
                    }
                });
                }
                else {
                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:${cod}`);
                    // let p = document.createElement("p");
                    // let text= document.createTextNode(`${cod}`)
                    // let ChatLog = document.getElementById("chatLog"); 
                    // p.appendChild(text);
                    // ChatLog.appendChild(p);
                };
                    if(cod[0]>="a" && cod[0]<="z" && cod[1]>='0')
                {
                    get(child(dbRef,`Arena${nho}/count`)).then((countMsg) =>{
                        count=countMsg.val();
                    if(count=="BLUE"){
                        if( cod.length == 3){
                            let row=num.indexOf(cod[0]);
                            let shot =0;
                            let col = (cod[1]+cod[2])-1;
                            console.log(col,row);
                            ///
                            if(enemyField[col][row]==0){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} không bắn trúng gì cả của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==7){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==8){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==9){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==3){
                                let cleanPlane = false;
                                enemyField[col][row]=9;
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 9){
                                            shot++;
                                            if(shot == 5){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 9){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 6){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 3){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                        set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó `);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                    }
                                
                                
                            }
                                
                            }
                            if(enemyField[col][row]==2){
                                let cleanPlane=false;
                                enemyField[col][row]=8;
                                for( let i =-7; i<=7;i++){
                                    for(let j = -7 ; j<=7;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 8){
                                            shot++;
                                            if(shot == 8){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 8){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");}
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==1){
                                enemyField[col][row]=7;
                                let cleanPlane=false;
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 7){
                                            shot++;
                                            if(shot == 8) {
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-4; i<=4;i++){
                                        for(let j = -4 ; j<=4;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 1){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 4){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==4){
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== 7){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 4){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 1){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==5){
                                let shot =0;
                                enemyField[col][row]=10;
                                if(enemyField[col+1][row]==10 || enemyField[col-1][row]==10|| enemyField[col][row+1]==10||
                                enemyField[col][row-1]==10){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==6){
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== 6){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 3){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 9){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg1`),`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng đầu của 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                        }
                        if(cod.length ==2){
                            let row=num.indexOf(cod[0]);
                            let shot =0;
                            let col = cod[1]-1;
                            console.log(col,row);
                            //Set cod 
                            if(enemyField[col][row]==0){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} không bắn trúng gì cả của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==7){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==8){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==9){
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng xác máy bay cmnr của địch`);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==3){
                                let cleanPlane = false;
                                enemyField[col][row]=9;
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 9){
                                            shot++;
                                            if(shot == 5){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 9){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 6){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 3){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                        set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch và phá huỷ nó `);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                    }
                                
                                
                            }
                                
                            }
                            if(enemyField[col][row]==2){
                                let cleanPlane=false;
                                enemyField[col][row]=8;
                                for( let i =-7; i<=7;i++){
                                    for(let j = -7 ; j<=7;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 8){
                                            shot++;
                                            if(shot == 8){
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-2; i<=2;i++){
                                        for(let j = -2 ; j<=2;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 8){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");}
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==1){
                                enemyField[col][row]=7;
                                let cleanPlane=false;
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){}
                                        if(enemyField[i+col][j+row]== 7){
                                            shot++;
                                            if(shot == 8) {
                                                cleanPlane = true;
                                            }
                                        }
                                    }
                                }
                                if(cleanPlane == false){
                                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                if(cleanPlane == true){
                                    for( let i =-4; i<=4;i++){
                                        for(let j = -4 ; j<=4;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 1){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 4){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== undefined){
                                            }
                                        }
                                    }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                }
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==4){
                                for( let i =-4; i<=4;i++){
                                    for(let j = -4 ; j<=4;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== 7){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 4){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 1){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}:Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }
                            if(enemyField[col][row]==5){
                                let shot =0;
                                enemyField[col][row]=10;
                                if(enemyField[col+1][row]==10 || enemyField[col-1][row]==10|| enemyField[col][row+1]==10||
                                enemyField[col][row-1]==10){
                                    for( let i =-7; i<=7;i++){
                                        for(let j = -7 ; j<=7;j++){
                                            if((i+col)<0){
                                                i=-col;
                                            }
                                            if((j+row)<0){
                                                j=-row;
                                            }
                                            
                                            if(enemyField[i+col][j+row]== undefined){};
                                            if(enemyField[i+col][j+row]== 2){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 5){
                                                enemyField[i+col][j+row]=0;
                                            }
                                            if(enemyField[i+col][j+row]== 7){
                                                enemyField[i+col][j+row]=0;
                                            }
                                        }
                                    }
                                }
                                
                                set(ref(database,`Arena${nho}/msg/msg1`),`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                
                            }
                            if(enemyField[col][row]==6){
                                for( let i =-2; i<=2;i++){
                                    for(let j = -2 ; j<=2;j++){
                                        if((i+col)<0){
                                            i=-col;
                                        }
                                        if((j+row)<0){
                                            j=-row;
                                        }
                                        if(enemyField[i+col][j+row]== 6){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 3){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== 9){
                                            enemyField[i+col][j+row]=0;
                                        }
                                        if(enemyField[i+col][j+row]== undefined){
                                        }
                                    }
                                }
                                set(ref(database,`Arena${nho}/msg1`),`${name}Vị trí ${cod} bắn trúng đầu của 1 máy bay của địch`);
                                set(ref(database,`Arena${nho}/RED/field`),enemyField);
                                set(ref(database,`Arena${nho}/count`),"RED");
                                // let p = document.createElement("p");
                                // let text= document.createTextNode(`Vị trí ${cod} bắn trúng đầu của 1 máy bay `);
                                // let ChatLog = document.getElementById("chatLog"); 
                                // p.appendChild(text);
                                // ChatLog.appendChild(p);
                            }

                        }
                    }
                    else{
                        alert("chưa đến lượt bạn");
                    }
                });
                }
                else {
                    set(ref(database,`Arena${nho}/msg/msg1`),`${name}:${cod}`);
                    // let p = document.createElement("p");
                    // let text= document.createTextNode(`${cod}`)
                    // let ChatLog = document.getElementById("chatLog"); 
                    // p.appendChild(text);
                    // ChatLog.appendChild(p);
                };
            }
        });
        
    }
});


onValue(ref(database,`Arena${nho}/msg/msg1`),(msg)=>{
    if(msg.exists()!= false){
        let p = document.createElement("p");
        let text= document.createTextNode(msg.val());
        let ChatLog = document.getElementById("chatLog"); 
        p.appendChild(text);
        ChatLog.appendChild(p);
        ChatLog.scrollTop-=50;
        console.log("OK có msg");
        set(ref(database,`Arena${nho}/msg/msg1`),"");
        
        onValue(ref(database,`Arena${nho}/RED/name`),(val)=>{
            if(val.val()== name ){
                console.log("đag load field red ");
                onValue(ref(database,`Arena${nho}/RED/field`),(fieldbase)=>{
                    let myField = fieldbase.val();
                    let owo =0;
                    for(let i=0; i<50;i++){
                        for(let j=0; j<50;j++){
                            field.grid[i][j]= myField[i][j];
                            owo+= myField[i][j];
                                               
                        }
                        if(i==49 && owo == 0){
                            Win = "BLUE";
                            console.log("BLUE Win");
                            set(ref(database,`Arena${nho}/End`),"true");
                            set(ref(database,`Arena${nho}/Win`),"BLUE");
                        }
                        if(i==49 && owo != 0){
                            owo =0;
                        }
                    }
                    field.buildField();
                })
            }
        })
        onValue(ref(database,`Arena${nho}/BLUE/name`),(val)=>{
        if(val.val()==name){
            console.log("đag load field blue ");
            onValue(ref(database,`Arena${nho}/BLUE/field`),(fieldbase)=>{
                let myField= fieldbase.val();
                let owo =0;
                for(let i=0; i<50;i++){
                    for(let j=0; j<50;j++){
                        field.grid[i][j]= myField[i][j];
                        owo+= myField[i][j]; 
                        
                    }
                    if(i==49 && owo == 0){
                        Win = "RED";
                        console.log("RED Win");
                        set(ref(database,`Arena${nho}/End`),"true");
                        set(ref(database,`Arena${nho}/Win`),"RED");
                    }
                    if(i==49 && owo == 0){
                        owo =0;
                    }
                }
                field.buildField();
            })
        }
    })
    }
})
// Final here
onValue(ref(database,`Arena${nho}/End`),(End)=>{
if(End.val()!="false"){
    document.getElementById("coordinate").style.left ="-2000px";
    onValue(ref(database,`Arena${nho}/Win`),(who)=>{
        if(who.val() == "RED"){
            onValue(ref(database,`Arena${nho}/RED/name`),(val)=>{
                if(val.val()== name ){
                    document.getElementById("winner").style.top = "90px";
                    document.getElementById("winner").style.left = "350px"
                    document.getElementById("loser").style.top = "340px";
                    document.getElementById("loser").style.left = "1150px";
                    document.getElementById("plus").style.top="66px";  
                    document.getElementById("plus").style.left="370px";  
                    document.getElementById("minus").style.top="326px";
                    document.getElementById("minus").style.left="1250px";
                    onValue(ref(database,`Arena${nho}/RED/uid`),(uid)=>{
                            
                            onValue(ref(database,`Arena${nho}/RED/rank`),(rank)=>{
                                WinRank = rank.val();
                            });
                            WinRank++;
                            console.log(WinRank);
                            let cac = uid.val();
                            set(ref(database,`users/${cac}/rank`),WinRank);
                            
                        });
                
                }});
                onValue(ref(database,`Arena${nho}/BLUE/name`),(val)=>{
                    if(val.val()== name ){
                    document.getElementById("loser").style.top = "90px";
                    document.getElementById("loser").style.left = "350px"
                    document.getElementById("winner").style.top = "340px";
                    document.getElementById("winner").style.left = "1150px";
                    document.getElementById("minus").style.top="66px";  
                    document.getElementById("minus").style.left="370px";  
                    document.getElementById("plus").style.top="326px";
                    document.getElementById("plus").style.left="1250px";
                    onValue(ref(database,`Arena${nho}/BLUE/uid`),(uid)=>{
                            uid=user.uid;
                            
                            onValue(ref(database,`Arena${nho}/BLUE/rank`),(rank)=>{
                                WinRank = rank.val();
                            });
                            if(WinRank>0){
                                WinRank--;
                            }
                            let cac=uid.val()
                            set(ref(database,`users/${cac}/rank`),WinRank);
                            
                    })
                    }});
                    
        }
        if(who.val() == "BLUE"){
            onValue(ref(database,`Arena${nho}/BLUE/name`),(val)=>{
                if(val.val()== name ){
                    document.getElementById("winner").style.top = "90px";
                    document.getElementById("winner").style.left = "350px"
                    document.getElementById("loser").style.top = "340px";
                    document.getElementById("loser").style.left = "1150px";
                    document.getElementById("plus").style.top="66px";  
                    document.getElementById("plus").style.left="370px";  
                    document.getElementById("minus").style.top="326px";
                    document.getElementById("minus").style.left="1250px";
                    onValue(ref(database,`Arena${nho}/BLUE/uid`),(uid)=>{
                            
                        onValue(ref(database,`Arena${nho}/BLUE/rank`),(rank)=>{
                            WinRank = rank.val();
                        });
                        WinRank++;
                        console.log(WinRank);
                        set(ref(database,`users/${uid.val()}/rank`),WinRank);
                        setTimeout(() => {
                            window.location="http://127.0.0.1:5500/html/Home.html";
                        }, 2000);
                    });
                }});
            onValue(ref(database,`Arena${nho}/RED/name`),(val)=>{
                if(val.val()== name ){
                    document.getElementById("loser").style.top = "90px";
                    document.getElementById("loser").style.left = "350px"
                    document.getElementById("winner").style.top = "340px";
                    document.getElementById("winner").style.left = "1150px";
                    document.getElementById("minus").style.top="66px";  
                    document.getElementById("minus").style.left="370px";  
                    document.getElementById("plus").style.top="326px";
                    document.getElementById("plus").style.left="1250px";
                    onValue(ref(database,`Arena${nho}/RED/uid`),(uid)=>{
                        
                        onValue(ref(database,`Arena${nho}/BLUE/rank`),(rank)=>{
                            WinRank = rank.val();
                        });
                        if(WinRank>0){
                            WinRank--;
                        }
                        set(ref(database,`users/${uid.val()}/rank`),WinRank);
                        setTimeout(() => {
                            window.location="http://127.0.0.1:5500/html/Home.html";
                        }, 2000);
                    });
                }});
            
        }        
    });



}
});
//Leave Game
onDisconnect(ref(database,`Arena${nho}/BLUE`)).remove();
onDisconnect(ref(database,`Arena${nho}/RED`)).remove();
onDisconnect(ref(database,`Arena${nho}/BLUE/online`)).set(false);
onDisconnect(ref(database,`Arena${nho}/RED/online`)).set(false);
onDisconnect(ref(database,`Arena${nho}/Starting`)).set(false);
onDisconnect(ref(database,`Arena${nho}/Win`)).set("");
onDisconnect(ref(database,`Arena${nho}/OnBattle`)).set(false);
onDisconnect(ref(database,`Arena${nho}/End`)).set("false");
onDisconnect(ref(database,`Arena${nho}/msg`)).set({
    msg0: "is Running",
    msg1:"",
});
onDisconnect(ref(database,`Arena${nho}/count`)).set("RED");
    }
    else if(weight==0 && checking==true){
        alert("Bạn chưa có máy bay nào trên sân hoặc chưa cố định lại máy bay ")
    }
    
})
    
}

runGame();
