const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')



fill.addEventListener('dragStart', dragStart)
fill.addEventListener('dragEnd', dragEnd)


for (const empty of empties) {
    empty.addEventListener('dragOver', dragOver)
    empty.addEventListener('dragEnter', dragEnter)
    empty.addEventListener('dragLeave', dragLeave)
    empty.addEventListener('drop', dragDrop)

}



function dragStart() {
    console.log('drag start');
}

function dragEnd() {
    console.log('drag End');
}

function dragOver() {
    console.log('drag Over');
}

function dragEnter() {
    console.log('drag Enter');
}

function dragLeave() {
    console.log('drag Leave');
} 

function dragDrop() {
    console.log('drag Drop');
} 