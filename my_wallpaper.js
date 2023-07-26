//your parameter variables go here!
let rectWidth  = 10;
let rectHeight = 10;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 240, 255);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rectMode(CENTER);
  angleMode(DEGREES);
  for(let j = 0; j<11; j++){
    for(let i = 0; i<11; i++){
      push();
      translate(i*10, j*10);
      rotate(45)
      stroke(30);
      if(i % 2 === 0){
        noFill();
        strokeWeight(0.25);
      }
      else{
        fill(60, 60, 60, 100);
        strokeWeight(0.5);
      }
      
      rect(0 ,0, rectWidth, rectHeight);
     pop();
   }
  }
  //ellipse(100, 100, 10, 10);
}
