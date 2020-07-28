const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

deleteToDo = (event) => {
  /*need to know which one is to be deleted, have to know who th father is ---> console.dir(event.target)---parentNode*/
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); /*deleted from HTML*/
  //   console.log(event.target.parentNode);
  const cleanToDos = toDos.filter((toDo) => {
    /* filter() go through each array item and filters the function return condition*/
    console.log(toDo.id, li.id);
    return toDo.id !== parseInt(li.id); /*conditional statement format pairing*/
  });
  toDos = cleanToDos; /*overwriting process(reassign)*/
  saveToDos();
};

saveToDos = () => {
  localStorage.setItem(
    TODOS_LS,
    JSON.stringify(toDos)
  ); /*However, localStorage saves things only in string form, no object can be storaged ---> JSON(JS Object Notation).stringify*/
};

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌"; /* emoji [window + .] emoji treated as a string!*/
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId =
    toDos.length + 1; /* my number tag would be +1 of the latest one!*/
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
};

loadToDos = () => {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    /*variable upperCase watch out!*/
    const parsedToDos = JSON.parse(
      loadedToDos
    ); /*parsing stringified object to object again*/
    parsedToDos.forEach((toDo) => {
      /*JS array func*/
      paintToDo(toDo.text);
    });
  }
};

function init() {
  /* didn't declare funtion/arrowFunc*/
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
