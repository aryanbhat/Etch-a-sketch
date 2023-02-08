let grid_container = document.querySelector(".canvas");
let current_color = "#FFC0CB";
let my_color = document.querySelector("#my_color");
let btn = 0;
let flag = 0;
let recent_color ;
let eraser = document.querySelector(".eraser");
eraser.addEventListener("click", function(){
  current_color = "beige";
  if(flag === 0){
  eraser.classList.add("active");
  flag = 1;
  }
  else{
    eraser.classList.remove("active");
    current_color = recent_color;
    flag = 0;
  }
});
my_color.addEventListener("change", function(){
  current_color = my_color.value;
  recent_color = current_color;
});
grid_generator();
active_grid();
let size = document.querySelector(".size");
let clear_button = document.querySelector(".clear");
clear_button.addEventListener("click", clear);
size.addEventListener("click", function(){
  let rows = prompt("Enter the number of rows from 1-50");
  clear_grid();
  grid_generator(rows);
  active_grid();
});
function clear_grid(){
  grid_container.innerHTML = "";
}
function grid_generator(num=16){
  for(let i=0;i<num**2;i++){
    let grid_item = document.createElement("div");
    grid_item.classList.add("grid");
    grid_container.style.cssText = `grid-template-columns: repeat(${num}, 1fr);`;
    grid_item.style.cssText = "width: calc(600px / "+num+"); height: calc(600px / "+num+");";
    grid_container.appendChild(grid_item);
  }
}
function active_grid(){
  let grid_item = document.querySelectorAll(".grid");
  grid_item.forEach(function(item){
    item.addEventListener("mouseover", changeColor);
    item.addEventListener("mousedown", function(e){
      e.target.style.backgroundColor = current_color;
        btn=1;
    });
    item.addEventListener("mouseup", function(){
        btn=0;
    });
    item.setAttribute("draggable","false");
  });
}
function changeColor(e){
  if(btn==0){
    return;
  }
  else{
    e.target.style.backgroundColor = current_color;
  }
}
function clear(){
  let grid_item = document.querySelectorAll(".grid");
  grid_item.forEach(function(item){
      item.style.backgroundColor = "beige";
  });
}
