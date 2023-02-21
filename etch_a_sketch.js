//Creates grid blocks inside the etch a sketch. Input is number of columns/rows
function createDivs(dim) {
    
    numOfBlocks = dim*dim;
    gridContainer.setAttribute('style', 'grid-template-columns: repeat(' + dim + ' , 1fr);')

    for (i=0;i<numOfBlocks;i++){
        const blockName = 'block'+i;
        const block = document.createElement('div');
        block.classList.add('gridItems');
        block.setAttribute('id', blockName);
        gridContainer.appendChild(block);

    }

}

createDivs(50);

const allBlocks = document.querySelectorAll('.gridItems');

//mouseover turns blocks black
function applyMouseover () {
    console.log('mouseover');
    this.style.backgroundColor ='black';
}

//applies mouseover function to all blocks
for (i=0;i<allBlocks.length;i++){
    allBlocks[i].addEventListener('mouseover', applyMouseover);
}

