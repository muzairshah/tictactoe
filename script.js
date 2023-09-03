let gameboard = document.getElementById("gameboard")
let info = document.getElementById("info")
let btn = document.getElementById("btn-toggle")
let result = document.getElementById("result")
let clear = document.getElementById("clear")
const startCells = ["", "", "", "", "", "", "", "", ""]
let img = ` <img style="display: inline; " class="o" src="image2/o.png" alt="" srcset="">`
let img2 = `<img style="display: inline; " class="x" src="image2/x.png" alt="" srcset="">`

function createBoard() {
  startCells.forEach((cell, index) => {
    let cellElement = document.createElement('div')
    // cellElement.innerHTML=img
    cellElement.classList.add("square")


    gameboard.append(cellElement)
  })
}
createBoard()
function BTN() {
  if (btn.innerHTML == "x") {
    btn.innerHTML = "O"
  } else {
    btn.innerHTML = "x"
  }
}
btn.addEventListener("click", BTN)

let a = document.getElementsByClassName("square")[0]
let b = document.getElementsByClassName("square")[1]
let c = document.getElementsByClassName("square")[2]
let d = document.getElementsByClassName("square")[3]
let e = document.getElementsByClassName("square")[4]
let f = document.getElementsByClassName("square")[5]
let g = document.getElementsByClassName("square")[6]
let h = document.getElementsByClassName("square")[7]
let i = document.getElementsByClassName("square")[8]

function div1() {
  if (btn.innerHTML == "x") {
    a.innerHTML = img2
    winConditionsForX()
  } else if (btn.innerHTML == "O") {
    a.innerHTML = img
    winConditionsForO()

  }

}
a.addEventListener("click", div1)

function div2() {
  if (btn.innerHTML == "x") {
    b.innerHTML = img2
    winConditionsForX()
  } else if (btn.innerHTML == "O") {
    b.innerHTML = img
    winConditionsForO()

  }

}
b.addEventListener("click", div2)


function div3() {
  if (btn.innerHTML == "x") {
    c.innerHTML = img2
    winConditionsForX()
  } else if (btn.innerHTML == "O") {
    c.innerHTML = img
    winConditionsForO()
  }
}
c.addEventListener("click", div3)

function div4() {
  if (btn.innerHTML == "x") {
    d.innerHTML = img2
    winConditionsForX()
  } else if (btn.innerHTML == "O") {
    d.innerHTML = img
    winConditionsForO()
  }
}
d.addEventListener("click", div4)
function div5() {
  if (btn.innerHTML == "x") {
    e.innerHTML = img2
    winConditionsForX()
  } else if (btn.innerHTML == "O") {
    e.innerHTML = img
    winConditionsForO()
  }
}
e.addEventListener("click", div5)

function div6() {
  if (btn.innerHTML == "x") {
    f.innerHTML = img2
    winConditionsForX()
  } else if (btn.innerHTML == "O") {
    f.innerHTML = img
    winConditionsForO()
  }
}
f.addEventListener("click", div6)

function div7() {
  if (btn.innerHTML == "x") {
    g.innerHTML = img2
    winConditionsForX()
  } else if (btn.innerHTML == "O") {
    g.innerHTML = img
    winConditionsForO()
  }
}
g.addEventListener("click", div7)
function div8() {
  if (btn.innerHTML == "x") {
    h.innerHTML = img2
    winConditionsForX()
  } else if (btn.innerHTML == "O") {
    h.innerHTML = img
    winConditionsForO()
  }
}
h.addEventListener("click", div8)

function div9() {
  if (btn.innerHTML == "x") {
    i.innerHTML = img2
    winConditionsForX()
  } else if (btn.innerHTML == "O") {
    i.innerHTML = img
    winConditionsForO()
  }
}
i.addEventListener("click", div9)

function clearAll() {
  Array.from(document.getElementsByClassName("square")).forEach((element) => {
    element.innerHTML = ""
    element.style.background=""
  })
  result.innerHTML = ""
}
clear.addEventListener("click", clearAll)

//win bg for hrzntl 3 columns

let winBGcolor1 = [a, b, c]
let winBGcolor2 = [d, e, f]
let winBGcolor3 = [g, h, i]
//win bg for vrticl 3 rows
let winBGcolor4 = [a, d, g]
let winBGcolor5 = [b, e, h]
let winBGcolor6 = [c, f, i]
//win bg for slntng 
let winBGcolor7=[a,e,i]
let winBGcolor8=[c,e,g]


class colors{
 static  color(){
    winBGcolor1.forEach((element)=>{
      element.style.background="rgb(255, 150, 255)"
      element.style.transition="1s"
    })
  }
 static  color1(){
    winBGcolor2.forEach((element)=>{
      element.style.background="rgb(255, 150, 255)"
      element.style.transition="1s"
    })
  }
 static  color2(){
    winBGcolor3.forEach((element)=>{
      element.style.background="rgb(255, 150, 255)"
      element.style.transition="1s"
    })
  }
 static  color3(){
    winBGcolor4.forEach((element)=>{
      element.style.background="rgb(255, 150, 255)"
      element.style.transition="1s"
    })
  }
 static  color4(){
    winBGcolor5.forEach((element)=>{
      element.style.background="rgb(255, 150, 255)"
      element.style.transition="1s"
    })
  }
 static  color5(){
    winBGcolor6.forEach((element)=>{
      element.style.background="rgb(255, 150, 255)"
      element.style.transition="1s"
    })
  }
 static  color6(){
    winBGcolor7.forEach((element)=>{
      element.style.background="rgb(255, 150, 255)"
      element.style.transition="1s"
    })
  }
 static  color7(){
    winBGcolor8.forEach((element)=>{
      element.style.background="rgb(255, 150, 255)"
      element.style.transition="1s"
    })
  }
  
  
}







function winConditionsForX() {
  //horizontal three columns
  if (a.innerHTML == img2 && b.innerHTML == img2 && c.innerHTML == img2) {
    result.textContent = `PLAYER "X" WINS`
colors.color()
  } else if (d.innerHTML == img2 && e.innerHTML == img2 && f.innerHTML == img2) {
    result.textContent = `PLAYER "X" WINS`
colors.color1()
  } else if (g.innerHTML == img2 && h.innerHTML == img2 && i.innerHTML == img2) {
    result.textContent = `PLAYER "X" WINS`
    colors.color2()
  }//vertical three rows
  else if (a.innerHTML == img2 && d.innerHTML == img2 && g.innerHTML == img2) {
    result.textContent = `PLAYER "X" WINS`
    colors.color3()
  } else if (b.innerHTML == img2 && e.innerHTML == img2 && h.innerHTML == img2) {
    result.textContent = `PLAYER "X" WINS`
    colors.color4()
  } else if (c.innerHTML == img2 && f.innerHTML == img2 && i.innerHTML == img2) {
    result.textContent = `PLAYER "X" WINS`
    colors.color5()
  }//slanting boxes
  else if (a.innerHTML == img2 && e.innerHTML == img2 && i.innerHTML == img2) {
    result.textContent = `PLAYER "X" WINS`
    colors.color6()
  } else if (c.innerHTML == img2 && e.innerHTML == img2 && g.innerHTML == img2) {
    result.textContent = `PLAYER "X" WINS`
    colors.color7()
  }
}
function winConditionsForO() {
  //horizontal three columns
  if (a.innerHTML == img && b.innerHTML == img && c.innerHTML == img) {
    result.textContent = `PLAYER "O" WINS`
    colors.color()
  } else if (d.innerHTML == img && e.innerHTML == img && f.innerHTML == img) {
    result.textContent = `PLAYER "O" WINS`
    colors.color1()
  } else if (g.innerHTML == img && h.innerHTML == img && i.innerHTML == img) {
    result.textContent = `PLAYER "O" WINS`
    colors.color2()
  }//vertical three rows
  else if (a.innerHTML == img && d.innerHTML == img && g.innerHTML == img) {
    result.textContent = `PLAYER "O" WINS`
    colors.color3()
  } else if (b.innerHTML == img && e.innerHTML == img && h.innerHTML == img) {
    result.textContent = `PLAYER "O" WINS`
    colors.color4()
  } else if (c.innerHTML == img && f.innerHTML == img && i.innerHTML == img) {
    result.textContent = `PLAYER "O" WINS`
    colors.color5()
  }//slanting boxes
  else if (a.innerHTML == img && e.innerHTML == img && i.innerHTML == img) {
    result.textContent = `PLAYER "O" WINS`
    colors.color6()
  } else if (c.innerHTML == img && e.innerHTML == img && g.innerHTML == img) {
    result.textContent = `PLAYER "O" WINS`
    colors.color7()
  }
  
}

