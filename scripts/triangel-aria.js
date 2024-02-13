document.getElementById('triangle-btn').addEventListener('click', function(){
    // triangleBaseInput value generate
    const triangleBaseInput = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBaseInput)

    // triangleWidthInput value generate
    const triangleWidthInput = document.getElementById('triangle-width').value;
    const width = parseFloat(triangleWidthInput);

    // calculate triangle aria---
    const aria = 0.5 * base * width;
    
    const triangleAriaField = document.getElementById('triangle-aria');
    triangleAriaField.innerText = aria;

})