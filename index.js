const addButtons = document.querySelectorAll(".add-btn");
const deleteButtons = document.querySelectorAll(".del-btn");
const searchInput = document.querySelector(".search");

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
