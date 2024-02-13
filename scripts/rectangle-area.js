document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidthInput = document.getElementById('rectangle-width').value; 
    const width = parseFloat(rectangleWidthInput);

    const rectangleLengthInput = document.getElementById('rectangle-length').value;
    const length = parseFloat(rectangleLengthInput)

    // rectangle area 
     const area = width * length;

     const rectangleArea = document.getElementById('rectangle-aria');
     rectangleArea.innerText = area;

})