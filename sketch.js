/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

/////////////////////////////////////////////////
///Variables for character and object control //
///////////////////////////////////////////////
//game character 
var origin_x = 50 ; 
var origin_y = 437;
var gameChar_x = 0;
var gameChar_y = 0;
//Tree Var
var treePos_y = 0;
var treePos_x =0;
//Canyon
var canyon;
//collectables
var collectables;
//mountains
var mountain;
//cloud
var cloud;
var distance;

//////////////////////////////////////////
/// Varables for Game interaction  //////
////////////////////////////////////////

var isLeft = false;
var isRight = false;
var isFalling = false;
var isPlummeting = false;
var jump = false;
//////////////////////////////////////
////Event handlers              /////
////////////////////////////////////
var ceiling = false;
var floored = false;


function setup()
{
	createCanvas(1024, 576);

    //init Character variables
    gameChar_x = origin_x;
    gameChar_y = origin_y;
    //init tree position
    treePos_x = 900;
    treePos_y = 282;
    //init canyon
    canyon = { x_pos: 0, width :100};
    canyon.x_pos = 100; canyon.width = 70;
    //init collectables
    collectables = {x_pos :100, y_pos :100, size :1, isFound : false};
    //init mountain 
    mountain = {x_pos : 100, y_pos : 100};
    //init cloud
    cloud = {x_pos :100, y_pos :100};
}

function draw()
{
    //////////////////////////////////////////
    //// Events
    ///////////////////////////////////////
    if(gameChar_y <250){
        ceiling = true;
    }else if(gameChar_y >= origin_y){
        ceiling = false;
    }

    if(gameChar_y < origin_y){
        isFalling = false;
        console.log(isFalling); 
    }

    
	background(100, 155, 255); //fill the sky blue
	noStroke();
	fill(75,150,28);
	rect(0, 432, 1024, 144); //draw some green ground
    //Muddy ground
    fill(202,103,58);
    rect(0,491,1024,142);

	//1. a cloud in the sky
    fill(255,255,255);
    ellipse(cloud.x_pos+100, cloud.y_pos+50, 80,80);
    ellipse(cloud.x_pos+60, cloud.y_pos+50,60,60);
    ellipse(cloud.x_pos+140,cloud.y_pos+50,60,60);

	noStroke();
///////////////////////////////////////////////////////////////////////////////
	//2. a mountain in the distance
	//... add your code here
    fill(21,19,60);
    beginShape();
        vertex(mountain.x_pos+175,mountain.y_pos+331);
        vertex(mountain.x_pos+240,mountain.y_pos+292);
        vertex(mountain.x_pos+290, mountain.y_pos+331);
    endShape();
    
    fill(21,19,60);
    beginShape();
        vertex(mountain.x_pos+248, mountain.y_pos+331);
        vertex(mountain.x_pos+340, mountain.y_pos+213);
        vertex(mountain.x_pos+411,  mountain.y_pos+331);
    endShape();
    
    fill(21,19,60);
     beginShape();
        vertex(mountain.x_pos+310, mountain.y_pos+331);
        vertex(mountain.x_pos+390, mountain.y_pos+207);
        vertex(mountain.x_pos+451,  mountain.y_pos+176);
        vertex(mountain.x_pos+510,  mountain.y_pos+331);
    endShape();
    
    fill(21,19,60);
     beginShape();
        vertex(mountain.x_pos+390, mountain.y_pos+331);
        vertex(mountain.x_pos+520, mountain.y_pos+198);
        vertex(mountain.x_pos+570,  mountain.y_pos+249);
        vertex(mountain.x_pos+600,  mountain.y_pos+331);
    endShape();
   
    //extra
      fill(255,190,199);
    beginShape();
        vertex(mountain.x_pos+498, mountain.y_pos+331);
        vertex(mountain.x_pos+521, mountain.y_pos+241);
        vertex(mountain.x_pos+535,  mountain.y_pos+214);
        vertex(mountain.x_pos+570,  mountain.y_pos+249);
        vertex(mountain.x_pos+600,  mountain.y_pos+331);
    endShape();
    
    beginShape();
        vertex(mountain.x_pos+451, mountain.y_pos+176);
        vertex(mountain.x_pos+476, mountain.y_pos+245);
        vertex(mountain.x_pos+487,  mountain.y_pos+231);
    endShape();
    
    beginShape();
        vertex(mountain.x_pos+338, mountain.y_pos+213);
        vertex(mountain.x_pos+368, mountain.y_pos+266);
        vertex(mountain.x_pos+382,  mountain.y_pos+328);
        vertex(mountain.x_pos+402,  mountain.y_pos+300);
        vertex(mountain.x_pos+403,  mountain.y_pos+273);
        vertex(mountain.x_pos+378,  mountain.y_pos+253);
        vertex(mountain.x_pos+374,  mountain.y_pos+233);
    endShape();
    
    beginShape();
        vertex(mountain.x_pos+240,mountain.y_pos+292);
        vertex(mountain.x_pos+264,mountain.y_pos+311);
        vertex(mountain.x_pos+271, mountain.y_pos+302);
    endShape();
    
    

///////////////////////////////////////////////////////////////////////////

	//3. a tree
	//... add your code here
    fill(120,100,40);
    rect(treePos_x, treePos_y,60,150);
    //branches
    fill(0,155,0);
    
    triangle(
      treePos_x-44, treePos_y+12,
      treePos_x+27, treePos_y-75,
      treePos_x+111, treePos_y+1 )
    
     
    triangle(
      treePos_x-48, treePos_y-30,
      treePos_x+20, treePos_y-130,
      treePos_x+110, treePos_y-42 )

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	//... add your code here
    fill(100,155,255);
    rect(canyon.x_pos,431,canyon.width,169);

	
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*@character
        Character code comes last to render character last
*/
    
        //FaceFront() ;
        //walkLeft();
        //walkRight();
        //jumpLeft();
        //jumpRight();
        //jumpForward();

        if (dist(gameChar_x, gameChar_y, collectables.x_pos+291, collectables.y_pos+312)<40){
            collectables.isFound = true;
        }

        if(!collectables.isFound ){
            strokeWeight(2);
            drawCollectable();
        }
        

        strokeWeight(2);
        fill(255,255,255);
    text("("+mouseX+","+mouseY+")", mouseX, mouseY);
        //Move left or Right
        if(isLeft && !jump && !isPlummeting){   //move left 
            walkLeft();
            gameChar_x -= 5;
        }else if (isRight && ! jump && !isPlummeting){ //move right
            walkRight();
            gameChar_x += 5;
        }else if(jump && isLeft){
            jumpLeft();
        }else if(jump && isRight){
            jumpRight();
        }else{ 
            FaceFront();
        }
            

        //event
        if (jump && !ceiling && !isPlummeting){
            gameChar_y -= 10; 
            gameChar_x +=cos(45);
        }else if (ceiling){
           if (gameChar_y += 10 ){ //as long as this line of code is valid isfalling will be set to true
               isFalling = true;
               console.log(isFalling);
           } ;
            jump = false;
        }
        
        console.log("char x: "+gameChar_x+" canyon x:"+canyon.x_pos+" "+(gameChar_x-canyon.x_pos)); 
        if( (gameChar_x - canyon.x_pos) <= canyon.width && !((gameChar_x-canyon.x_pos)<20) && gameChar_y >= origin_y){
            isPlummeting = true;
        }else{
            isPlummeting = false;
        }

        if(isPlummeting){
            gameChar_y+=1;
        }
}
 
/*
 @mouse pressed event
*/


function keyPressed(){
    //Move left 
    if (keyCode == 37){
        isLeft = true;
    }

    //move Right
    if (keyCode == 39){
        isRight = true;
    }
    console.log(keyCode);

    //Jump
    if(keyCode == 32){
        jump = true;
    }
}
function keyReleased(){

        //Move left 
        if (keyCode == 37){
            isLeft = false;
        }
    
        //move Right
        if (keyCode == 39){
            isRight = false;
        }
        

        //jump
       // if (keyCode == 32){
       //     jump =false;
        //}

}


//Character functions

function FaceFront(){
    //head
    stroke(0);
    strokeWeight(0);
    fill(0);
    ellipse(gameChar_x,gameChar_y-62, 20,20);
    
    //torso
    fill(255,0,0);
    rect(gameChar_x-9.5, gameChar_y-52,20,23,5,5);
    fill(0);
    rect(gameChar_x-9.5, gameChar_y-40,20,15,0,0);
    
    //right leg
    fill(0,0,255);
    rect(gameChar_x-9.5, gameChar_y-25,8,20);
    //left leg
    fill(0,0,255);
    rect(gameChar_x+2.5, gameChar_y-25,8,20);
    
    
    //right hand
    rect(gameChar_x-25, gameChar_y-50,16,5);
    //left hand
    rect(gameChar_x+10, gameChar_y-50,16,5);

}

function walkLeft(){

    //head
    stroke(0);
    fill(0);
    ellipse(gameChar_x,gameChar_y-62,15,20);
    //torso
    fill(255,0,0);
    rect(gameChar_x-9.5, gameChar_y-50,18,23,5,5);
    fill(0);
    rect(gameChar_x-9.5, gameChar_y-35,18,11);

    //hands
    strokeWeight(2);
    fill(0,0,255);
    rect(gameChar_x-30, gameChar_y-43, 24,6);

    //legs
    strokeWeight(3);
    rect(gameChar_x-6, gameChar_y-23, 10,17);

}

function walkRight(){
// walking right
    //head
    stroke(0);
    fill(0);
    ellipse(gameChar_x,gameChar_y-62,15,20);
    //torso
    fill(255,0,0);
    rect(gameChar_x-9.5, gameChar_y-50,18,23,5,5);
    fill(0);
    rect(gameChar_x-9.5, gameChar_y-35,18,11);

    //hands
    strokeWeight(2);
    fill(0,0,255);
    rect(gameChar_x-1, gameChar_y-43, 24,6);

    //legs
    strokeWeight(3);
    rect(gameChar_x-6, gameChar_y-23, 10,17);



}

function jumpLeft(){
    //head
    stroke(0);
    fill(0);
    ellipse(gameChar_x,gameChar_y-62,15,20);
    //torso
    fill(255,0,0);
    rect(gameChar_x-9.5, gameChar_y-50,18,23,5,5);
    fill(0);
    rect(gameChar_x-9.5, gameChar_y-35,18,11);

    //hands
    strokeWeight(2);
    fill(0,0,255);
    rect(gameChar_x-30, gameChar_y-43, 24,6);
    //legs
    strokeWeight(3);
    rect(gameChar_x-6, gameChar_y-23, 10,5);
}

function jumpRight(){
     //head
     stroke(0);
     fill(0);
     ellipse(gameChar_x,gameChar_y-62,15,20);
     //torso
     fill(255,0,0);
     rect(gameChar_x-9.5, gameChar_y-50,18,23,5,5);
     fill(0);
     rect(gameChar_x-9.5, gameChar_y-35,18,11);
 
     //hands
     strokeWeight(2);
     fill(0,0,255);
     rect(gameChar_x-1, gameChar_y-43, 24,6);
 
     //legs
     strokeWeight(3);
     rect(gameChar_x-6, gameChar_y-23, 10,5);

}

function jumpForward(){
     //head
     stroke(0);
     strokeWeight(0);
     fill(0);
     ellipse(gameChar_x,gameChar_y-62, 20,20);
     
     //torso
     fill(255,0,0);
     rect(gameChar_x-9.5, gameChar_y-52,20,23,5,5);
     fill(0);
     rect(gameChar_x-9.5, gameChar_y-40,20,15,0,0);

      //right leg
    fill(0,0,255);
    rect(gameChar_x-9.5, gameChar_y-25,8,5);
    //left leg
    fill(0,0,255);
    rect(gameChar_x+2.5, gameChar_y-25,8,5);
    
    
    //right hand
    rect(gameChar_x-25, gameChar_y-50,16,5);
    //left hand
    rect(gameChar_x+10, gameChar_y-50,16,5);

}

function drawCollectable(){
    //5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    //Collectable1
    strokeWeight(4);
    fill(232,198,31);
    ellipse(collectables.x_pos+291, collectables.y_pos+312,  15+collectables.size, 25+collectables.size);
    fill(204,160,17);
    stroke(0);
    strokeWeight(2);
    ellipse(collectables.x_pos+293, collectables.y_pos+312,  10+collectables.size, 25+collectables.size);
    strokeWeight(4);
    point(collectables.x_pos+292,collectables.y_pos+313);
}

/*function mousePressed() {
    gameChar_x = mouseX;
    gameChar_y = mouseY;

}*/