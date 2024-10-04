let add_button = document.querySelector(".add-btn");
let del_button = document.querySelector(".del-btn");
const cloner_input = document.querySelector(".cloner-input");
let field = document.querySelector(".task-text");
add_button.addEventListener("click", () => {
  const cloner_input = cloner_input.value;
  field.textContent = `${cloner_input}`;
});
