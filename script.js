const body = document.body;
const createIssue = document.querySelector('#create-issue');

let closing = function closeModal() {
    const modal = document.getElementsByClassName('modal-class')[0];
    modal.remove();
}

let inputCall = function (){

    const newModal = document.createElement("div");
    newModal.className = "modal-class";

    //const inputItem = document.createElement("div");
    // inputItem.className = "input-item";
    // inputItem.innerHTML = `<textarea  id="text" placeholder="Write down your tasks here!" cols="35" rows="4" style="resize: none;"></textarea>
    // <select name="" id="">
    //     <option value="">ABC</option>
    //     <option value="">abc</option>
    // </select>`;
    // const box = createIssue.parentNode;
    //inputItem.children[0].focus();

    newModal.innerHTML = `<div class="modal">
                        <form action="submit">
                            <span class="material-symbols-outlined close">close</span>
                            <p style="color: #182A4D;">Add Task</p>
                            <input type="text" class="taskName" name="task" placeholder="Task Name">
                            <textarea name="description" cols="30" rows="3" class="description" placeholder="description" style="resize: none;"></textarea>
                            <input type="text" placeholder="Asignee Name" name="asignee">

                            <select name="status">
                                <option value="TODO">TODO</option>
                                <option value="IN_PROGRESS">IN_PROGRESS</option>
                                <option value="COMPLETED">COMPLETED</option>
                            </select>
                            <button type="submit" class = "formBtn">Create</button>
                        </form>
                        </div>`;
    //createIssue.remove();

    body.appendChild(newModal);
    let closeFont = newModal.querySelector(".close");
    closeFont.addEventListener("click",closing);

    const form = document.querySelector(".modal form");

    form.addEventListener("submit",(event) => {
        event.preventDefault();
        const formElement = event.target;
        const userData = {
            taskName : form["task"].value.trim(),
            description : form["description"].value.trim(),
            status : form["status"].value,
            asignee : form["asignee"].value.trim()
        }
        
        addNewCard(userData);
        closing();
    });
}

function addNewCard(userData) {
    const card = document.createElement("div");
    const words = userData["asignee"].split(" ");
    
    card.addEventListener("dragstart", () => {
        activeDraggedElement = card;
    })

    userData.status !== 'COMPLETED' && (card.draggable = true);

    let nickName = words[0][0].toUpperCase() + (words[1] ? words[1][0].toUpperCase() : '');
    card.className = "card";
    card.innerHTML = `<span class="taskName">${userData.taskName}</span> 
                        <span class="description">${userData.description}</span>
                        <div class="status-container">
                            <span data-form-name = "${nickName}" class="asignee">${userData.asignee}</span>
                            <span class="status">${userData.status}</span>
                        </div>`;
    const box = document.getElementById(userData.status);
    
    box.appendChild(card);
}
createIssue.addEventListener("click",inputCall);

// const formSubmit = newModal.querySelector('form');
// formSubmit.addEventListener('submit', function(){

// });




