function createDivs(dim) {
    
    numOfBlocks = dim*dim;
    gridContainer.setAttribute('style', 'grid-template-columns: repeat(' + dim + ' , 1fr);')

    for (i=0;i<numOfBlocks;i++){
        const block = document.createElement('div');
        /*block.textContent = i;*/
        block.classList.add('gridItems');
        gridContainer.appendChild(block);
    }

}

createDivs(100);