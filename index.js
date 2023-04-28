const drawBoard = () => {
    let pixelCount = document.getElementById("pixelCount").value;
    const boardXY = 512;
    const pixelXY = boardXY / pixelCount;
    
    const board = document.getElementById("board"); 
    board.innerHTML = "";

    for (let i = 0; i < pixelCount * pixelCount; i++) {
        const pixel = document.createElement("div");    
        pixel.classList.add("pixel");
        pixel.style.width = `${pixelXY - 1}px`
        pixel.style.height = `${pixelXY - 1 }px`
        pixel.addEventListener("mouseover", draw);
        pixel.id = `pixel${i}`
        board.appendChild(pixel);
    } 
}

const draw = event => {
    const pixel = document.getElementById(event.target.id);
    pixel.style.backgroundColor = "#000";
    pixel.style.borderColor = "#000";
}
