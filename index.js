const addButtons = document.querySelectorAll(".add-btn");
const deleteButtons = document.querySelectorAll(".del-btn");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon")
const contentItems = document.querySelectorAll(".card-container")

//searchIcon.addEventListener("click", () => {
//  searchInput.addEventListener('input', (ev) => {
//  const value = ev.target.value.trim()
//  const card_content = document.querySelectorAll('.card-content')
//  const searchRegExp = new RegExp(value, 'gi')
//  if (value === '') {
//    contentItems.forEach((el) => {
//        el.classList.remove('hide')
//    })
//    return
//}

//contentItems.forEach((el) => {
//    const card_content = document.querySelector('.card-content')
//    const elementText = cardContent ? cardContent.textContent : '';
//    const isContainsSearchRequest = searchRegExp.test(elementText)
//    if (!isContainsSearchRequest) {
//        el.classList.add('hide')
//    } else {
//        el.classList.remove('hide')
//    }
//})
//})});

addButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const taskInput = document.querySelectorAll(".cloner-input")[index];
    const taskText = taskInput.value.trim();

    if (taskText) {
      const newTaskBox = document.createElement("div");
      newTaskBox.classList.add("task-box");

      const newTaskText = document.createElement("p");
      newTaskText.classList.add("task-text");
      newTaskText.textContent = taskText;

      const deleteBtn = document.createElement("div");
      deleteBtn.classList.add("mini-del-btn");

      newTaskBox.appendChild(newTaskText);
      newTaskBox.appendChild(deleteBtn);

      const tasksWrapper = document.querySelectorAll(".tasks-wrapper")[index];
      tasksWrapper.appendChild(newTaskBox);

      taskInput.value = "";

      deleteBtn.addEventListener("click", () => {
        newTaskBox.remove();
      });
    }
  });
});

deleteButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const tasksWrapper = document.querySelectorAll(".tasks-wrapper")[index];
    tasksWrapper.innerHTML = "";
  });
});

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  const cardContainers = document.querySelectorAll(".card-container");

  cardContainers.forEach((cardContainer) => {
    const taskInput = cardContainer.querySelector(".input").value.toLowerCase();

    if (taskInput.includes(searchValue)) {
      cardContainer.style.display = "block";
    } else {
      cardContainer.style.display = "none";
    }
  });
});
