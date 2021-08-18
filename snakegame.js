snake={
      0:[0,14],
      1:[0,13],
      2:[0,12],
      3:[0,11],
      4:[0,10],
      5:[0,9],
      6:[0,8],
      7:[0,7],
      8:[0,6],
      9:[0,5],
      10:[0,4],
      11:[0,3],
      12:[0,2],
      13:[0,1],
    };
    var tail=[0,0],head=[0,15];var countindex=0,startindex=13;
    var food=[0,20];var prev=[];
    var gamecont=true;var start=false;
    let speed=49,score=0;
   
    function snake_head_food_movement(xfood,yfood){
        prev.push(food);
        var xhead=head[0];
        var yhead=head[1];
        var xtail=tail[0];
        var ytail=tail[1];
        if(gamecont){
         xdiff=yfood-yhead;
         ydiff=xfood-xhead;
         xtaildiff=yfood-ytail;
         ytaildiff=xfood-xtail;
        if(Math.abs(ydiff)>Math.abs(xdiff) ){
            
             if(ytaildiff<=0){
                 move_AI_predict("up",ydiff,xdiff);
                }
             else{
             move_AI_predict("down",ydiff,xdiff);
             }
    
         }
    //    else  if(Math.abs(ytaildiff)>Math.abs(xtaildiff)){
    //     if(ytaildiff<=0){
    //         move_AI_predict("up",ytaildiff,xtaildiff);
    //     }
    //     else{
    //         move_AI_predict("down",ytaildiff,xtaildiff);
    //     }
    // }
    else{
           
            if(xdiff>=0)move_AI_predict("left",ydiff,xdiff);
                else
                move_AI_predict("right",ydiff,xdiff);
        }
    }
       
    }
    var leftsnake=true,downsnake=true,rightsnake=true,upsnake=true;
    function move_AI_predict(firstdir,width,length){

        if(firstdir=="up" && head[0]!=0){
           goup();
        }
        if(firstdir=="left" && head[1]!=49){
            goleft();
       }
        if(firstdir=="right"  && head[1]!=0){
            goright();
     }
        if(firstdir=="down"  && head[0]!=39){
        godown();
       }
        
    }
    snakemove={
        left:(bodypart)=>{
            
            if(bodypart[1]!=49)
            {
            if(bodypart==tail)
            $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","rgb(34, 34, 70)");
            else
            $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","green");
            bodypart[1]=bodypart[1]+1;
            $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","rgb(101, 158, 139)");
            return true;
            }
            else{
              
                    gamecont=false;
                    gameover();
                    return false;
                
               
            }
            
            
        },
        right:(bodypart)=>{
            
            if(bodypart[1]!=0){
                if(bodypart==tail)
                $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","rgb(34, 34, 70)");
                else
                $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","green");
                bodypart[1]=bodypart[1]-1;
                $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","rgb(101, 158, 139)");
                return true;
                }
                else{
                   
                        gamecont=false;
                        gameover();
                        return false;
                    
                }
        },
        up:(bodypart)=>{
           
            if(bodypart[0]!=0){
                if(bodypart==tail)
                $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","rgb(34, 34, 70)");
                else
                $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","green");
                bodypart[0]=bodypart[0]-1;
                $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","rgb(101, 158, 139)");
                return true;
              
                }
                else{
                    
                        gamecont=false;
                        gameover();
                        return false;
                    
                };
        },
        down:(bodypart)=>{
           
            if(bodypart[0]!=39){
                if(bodypart==tail)
                $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","rgb(34, 34, 70)");
                else
                $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","green");
                bodypart[0]=bodypart[0]+1;
                $(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]).css("background-color","rgb(101, 158, 139)");
                return true;
               
                }
                else{
                   
                    gamecont=false;
                    gameover();
                    return false;
                
                }
        }

        
    };
function foodmove(dir){
    if(dir=="left"){
        if(food[1]!=49 && $(".row").eq(food[0]).children(".square").eq(food[1]+1).css("background-color")!="rgb(101, 158, 139)"){
        $(".row").eq(food[0]).children(".square").eq(food[1]).css("background-color","rgb(34, 34, 70)");
        food[1]+=1;
        $(".row").eq(food[0]).children(".square").eq(food[1]).css("background-color","rgb(165, 42, 42)");
        
        }
        else{
            gamecont=false;
            gameover();
        }
       
    }
    if(dir=="right"){
        if(food[1]!=0 && $(".row").eq(food[0]).children(".square").eq(food[1]-1).css("background-color")!="rgb(101, 158, 139)"){
            $(".row").eq(food[0]).children(".square").eq(food[1]).css("background-color","rgb(34, 34, 70)");
            food[1]-=1;
            $(".row").eq(food[0]).children(".square").eq(food[1]).css("background-color","rgb(165, 42, 42)");
           
        }
        else{
            gamecont=false;
            gameover();
        }
    }
    if(dir=="down"){
        if(food[0]!=39 && $(".row").eq(food[0]+1).children(".square").eq(food[1]).css("background-color")!="rgb(101, 158, 139)"){
            $(".row").eq(food[0]).children(".square").eq(food[1]).css("background-color","rgb(34, 34, 70)");
            food[0]+=1;
            $(".row").eq(food[0]).children(".square").eq(food[1]).css("background-color","rgb(165, 42, 42)");
           
        }
        else{
            gamecont=false;
            gameover();
        }
    }
    if(dir=="up"){
        if(food[0]!=0 && $(".row").eq(food[0]-1).children(".square").eq(food[1]).css("background-color")!="rgb(101, 158, 139)"){
            $(".row").eq(food[0]).children(".square").eq(food[1]).css("background-color","rgb(34, 34, 70)");
            food[0]-=1;
            $(".row").eq(food[0]).children(".square").eq(food[1]).css("background-color","rgb(165, 42, 42)");
            
        }
        else{
            gamecont=false;
            gameover();
        }
    }
}
var foodleft,foodright,fooddown,foodup;
function snakepresent(){
    $(".row").eq(head[0]).children(".square").eq(head[1]).css("background-color","rgb(101, 158, 139)");
    for(key in snake){
        $(".row").eq(snake[key][0]).children(".square").eq(snake[key][1]).css("background-color","rgb(101, 158, 139)");
   }
   $(".row").eq(tail[0]).children(".square").eq(tail[1]).css("background-color","rgb(101, 158, 139)");
   $(".row").eq(food[0]).children(".square").eq(food[1]).css("background-color","rgb(165, 42, 42)");
}
$(document).ready(function(){
    var rows = 40;
var columns = 50;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});
//add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
        
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
        $("#SnakeBoard").append($row.clone());
    }
    snakepresent();
});
gofoodleft=()=>{
    
    foodleft=setInterval(frame,50);
    function frame(){
        snake_head_food_movement(food[0],food[1]);
    foodmove("left");
    }
}
gofooddown=()=>{
  
    fooddown=setInterval(frame,50);
    function frame(){
        snake_head_food_movement(food[0],food[1]);
    foodmove("down");
    }
    }
gofoodright=()=>{
    
    foodright=setInterval(frame,50);
    function frame(){
        snake_head_food_movement(food[0],food[1]);
    foodmove("right");
    }
    }
gofoodup=()=>{
    
    foodup=setInterval(frame,50);
    function frame(){
        snake_head_food_movement(food[0],food[1]);
    foodmove("up");
    }
}
function followhead(bodypart){
    var check1=$(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]+1).css("background-color");
    var check2=$(".row").eq(bodypart[0]).children(".square").eq(bodypart[1]-1).css("background-color");
    var check3=$(".row").eq(bodypart[0]+1).children(".square").eq(bodypart[1]).css("background-color");
    var check4=$(".row").eq(bodypart[0]-1).children(".square").eq(bodypart[1]).css("background-color");
    if(check1==="rgb(0, 128, 0)"){if(snakemove.left(bodypart)==false)return false;}
    if(check2==="rgb(0, 128, 0)"){if(snakemove.right(bodypart)==false)return false;}
    if(check3==="rgb(0, 128, 0)"){if(snakemove.down(bodypart)==false)return false;}
    if(check4==="rgb(0, 128, 0)"){if(snakemove.up(bodypart)==false)return false;} 
}
function movement(direction){
   switch(direction){
       case "left":{
           if(snakemove.left(head)==false && $(".row").eq(head[0]).children(".square").eq(head[1]+1).css("background-color")!="rgb(34, 34, 70)")return false;
           break;
       }
       case "right":{
        if(snakemove.right(head)==false && $(".row").eq(head[0]).children(".square").eq(head[1]-1).css("background-color")!="rgb(34, 34, 70)")return false;
        break;
    }

    case "down":{
        if(snakemove.down(head)==false && $(".row").eq(head[0]+1).children(".square").eq(head[1]).css("background-color")!="rgb(34, 34, 70)")return false;
        break;
    }
    case "up":{
        if(snakemove.up(head)==false && $(".row").eq(head[0]-1).children(".square").eq(head[1]).css("background-color")!="rgb(34, 34, 70)")return false;
        break;
    }
   }
   for(key in snake){
    if(followhead(snake[key])==false)return false;
     }
     followhead(tail);
}
var animationleft,animationdown=null,animationright=null,animationup=null;

goleft=()=>{
    clearInterval(animationup);
    clearInterval(animationright);
    clearInterval(animationdown); 
    rightsnake=true;
    downsnake=true;
    upsnake=true;
   
    if(leftsnake==true){
    animationleft=setInterval(frame,speed);
    function frame(){
        score++;
        document.getElementById("scoreind").innerHTML="score : "+score;
        increasesize();
        if(head[1]!=49)movement("left");
        else if(head[0]!=39){movement("down"); return 0;}
        else if(head[1]!=0){movement("right"); return 0;}
        else if(head[0]!=0){movement("up"); return 0;}
    
    }
    }
    leftsnake=false;
}
godown=()=>{
    clearInterval(animationup);
    clearInterval(animationright);
    clearInterval(animationleft); 
    rightsnake=true;
    score++;
    document.getElementById("scoreind").innerHTML="score : "+score;
    upsnake=true;
    leftsnake=true;
    if(downsnake==true){
        animationdown=setInterval(frame,speed);
        function frame(){
            increasesize();
            if(head[0]!=39)movement("down");
            else if(head[1]!=49){movement("left"); return 0;}
            else if(head[1]!=0){movement("right"); return 0;}
            else if(head[0]!=0){movement("up"); return 0;}
        }
    }
    downsnake=false;
    }
goright=()=>{
    clearInterval(animationup);
    clearInterval(animationdown);
    clearInterval(animationleft); 
    
    downsnake=true;
    upsnake=true;
    leftsnake=true;
    if(rightsnake==true){
        animationright=setInterval(frame,speed);
        function frame(){
            score++;
            document.getElementById("scoreind").innerHTML="score : "+score;
            increasesize();
            if(head[1]!=0)movement("right");
            else if(head[0]!=39){movement("down"); return 0;}
            else if(head[1]!=49){movement("left"); return 0;}
            else if(head[0]!=0){movement("up"); return 0;}
        }
    }
    rightsnake=false;
    }
goup=()=>{
    clearInterval(animationright);
    clearInterval(animationdown);
    clearInterval(animationleft); 
    rightsnake=true;
    downsnake=true;
    leftsnake=true;
    if(upsnake==true){
        animationup=setInterval(frame,speed);
        function frame(){
            score++;
            document.getElementById("scoreind").innerHTML="score : "+score;
            increasesize();
            if(head[0]!=0)movement("up");
            else if(head[0]!=49){movement("left"); return 0;}
            else if(head[0]!=39){movement("down"); return 0;}
            else if(head[1]!=0){movement("right"); return 0;}
          }
        }
        upsnake=false;
    }
    var left=true;down=true;right=true;up=true;
    
    $("#about").click(()=>{
        if(!start){
            $("#close-icon").css("visibility","visible");  
            $(".infom").css("visibility","visible");
        var text="\nThis project is basically a snake game but\n.....in this game your the food rather than the snake.\nIn this the snake tracks the location of the particle or insect with a simple algorithm and hunts it down.\nYour job as the particle is to try your best to escape the snake.<br></br>Controls:W A S D--->up,down,left,right respectively";
        $(".inform").html(text);
        console.log("work");
        $(".logo").css("visibility","hidden");  
        $(".infom").addClass("animate__animated animate__bounce  animate__repeat-2");
        $("#rules").css("visibility","hidden");
        $("#about").css("visibility","hidden");
        }
        
    });
    $("#rules").click(()=>{
        if(!start){
            $("#close-icon").css("visibility","visible");  
            $(".infom").css("visibility","visible");
        var text="1.Dont hit the wall!!!<br></br>2.Dont dare hit the snake!!<br></br>3.The snakes size and speed increases with time so run as fast as posiible<br></br>4.The snake cant die so survive as long as possible";
        $(".inform").html(text);
        console.log("work");
        $(".logo").css("visibility","hidden"); 
        $("#close-icon").css("visibility","visible");   
        $(".infom").addClass("animate__animated animate__bounce");
        $("#rules").css("visibility","hidden");
        $("#about").css("visibility","hidden");
        }
        
    });
    $("#close-icon").click(()=>{
        console.log("work");
        document.getElementById("infor").style="visibility:hidden";
        document.getElementById("logo_label").style="visibility:visible";
        $("#close-icon").css("visibility","hidden");   
        $(".infom").removeClass("animate__animated animate__bounce animate__pulse");
        $("#rules").css("visibility","visible");
        $("#about").css("visibility","visible");
    });
 window.addEventListener('keydown',function(direction){
    
    if(start==false){
        left=false;
        down=false;
        right=false;
        up=false;
        if(direction.key=="Enter"){
            start=true;
            left=false;
            down=true;
            right=true;
          
            up=true;
            document.getElementById("infor").style="visibility:hidden";
            document.getElementById("logo_label").style="visibility:visible";
            document.getElementById("foot").innerHTML="";
            footer_display();
            gofoodleft();
        }
        
      }
    if(!gamecont){
        if(direction.key=="Enter"){
            window.location.reload();
        }
    }
    if(direction.key=="d" && left==true){
       clearInterval(fooddown);
       clearInterval(foodup);
       clearInterval(foodright); 
       left=false;
       down=true;
       right=true;
       up=true;
      
       gofoodleft();
      
        
    }
    if(direction.key=="s" && down==true){
        clearInterval(foodleft);
        clearInterval(foodup);
        clearInterval(foodright);
        left=true;
        down=false;
        right=true;
        up=true;
        
        gofooddown();
        

     }
     if(direction.key=="w" && up==true){
        clearInterval(foodleft);
        clearInterval(fooddown);
        clearInterval(foodright);
        left=true;
        down=true;
        right=true;
        up=false;
        
        gofoodup();
       
         
     }
     if(direction.key=="a" && right==true){
        clearInterval(foodleft);
        clearInterval(foodup);
        clearInterval(fooddown);
         left=true;
         down=true;
         right=false;
         up=true;
        
        gofoodright();
       
      }
    

});
function gameover(){
    if(!gamecont){
        document.getElementById("foot").innerHTML="PRESS ENTER TO TRY AGAIN";
        left=false;
        down=false;
        right=false;
        up=false;
        rightsnake=false;
        downsnake=false;
        leftsnake=false;
        upsnake=false;
        clearInterval(fooddown);
        clearInterval(foodup);
        clearInterval(foodright); 
        clearInterval(foodleft);
        clearInterval(animationup);
        clearInterval(animationright); 
        clearInterval(animationdown);
        clearInterval(animationleft); 
        clearInterval(footerani);
        
      }
   
}
function increasesize(){
    if((countindex++)==100){
        var copy=[...tail]
        snake[(++startindex)]=copy;
        document.getElementById("sizeindicator").innerHTML="size : "+(Object.keys(snake).length+2)+" units";
        score+=100;
        document.getElementById("scoreind").innerHTML="score : "+score;
       
        
        // if(tail[1]+1!=49)tail[1]=tail[1]+1;
        // else if(tail[1]-1!=0)tail[1]--;
        // else if(tail[0]+1!=39)tail[0]++;
        // else if(tail[0]-1!=0)tail[0]--;
        tail[1]=copy[1]-1;
        countindex=0;
        speed-=0.5;
        document.getElementById("speedind").innerHTML="speed : "+(50-speed)+"x";
        console.log(head,snake,tail)
    }
}
var footerani=null;
function footer_display(){
  let text="Powered By @Brandon Luke Williams"
  let text_count=0,flag=true;
  footerani=setInterval(()=>{
    if(text_count<text.length && flag)
     document.getElementById("foot").innerHTML=text.substring(0,text_count++);
    else{
        flag=false;
        document.getElementById("foot").innerHTML=text.substring(0,--text_count);
        if(text_count==0)flag=true;
    }
  },1000)
}

   

   

 




