let currentPage = 1
let pages //array med alle elementer med class = page 
let gravity = 1
let menu
let riddle

function setup(){
    pages = selectAll('.page')
    //nu kan man se at pages er blevet til en liste med alle class = page ting
    console.log(pages.length)

    ellipseMode(CORNER)
    createCanvas(windowWidth, windowHeight)

    menu = new menuMaker()
    riddle = new Riddle()
}

function draw(){
    //clear tegner et transparent canvas hver frame 
    clear()
    menu.showMenu()
}

function shiftPage(num){
    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
} 