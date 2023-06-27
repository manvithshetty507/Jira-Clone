const boxes = document.getElementsByClassName("box");

for(let i=0;i<boxes.length;i++) {
    let box = boxes[i];

    box.addEventListener("dragenter", () => {
        box.classList.add("active-box");
    })
    box.addEventListener("dragleave", () => {
        box.classList.remove("active-box");
    })
    box.addEventListener("dragover",(e) => e.preventDefault());

    box.addEventListener("drop" , (e) => {
        e.preventDefault();
        box.appendChild(activeDraggedElement);
        if(box.id == "COMPLETED"){
            activeDraggedElement.draggable = false;
        }
    })
}