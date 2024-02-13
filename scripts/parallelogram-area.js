document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBase = getInputElementsById('parallelogram-base');
    const parallelogramHeight = getInputElementsById('parallelogram-height');
    
    // parallelogram area calculate
    const area = parallelogramBase * parallelogramHeight;
    setElementById('parallelogram-area', area)
    
})
function getInputElementsById(elementId){
    const parallelogramValue = document.getElementById(elementId).value; 
    const valueParse = parseFloat(parallelogramValue);
    return valueParse;
    
}

function setElementById(id, area){
    const displayArea = document.getElementById(id);
    displayArea.innerText = area;
}