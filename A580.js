let buttons_selector = document.getElementsByTagName("button");
let input_selector = document.getElementsByTagName("input")[0];
let display_value = "";
let array_of_buttons = Array.from(buttons_selector);
array_of_buttons.forEach((button) => {
  button.addEventListener("click", (the_event) => {
    try {
      let button_value = the_event.currentTarget.innerHTML;
      if (button_value == "=") {
        display_value = eval(display_value);
        input_selector.value = display_value;
      } else if (button_value == "AC") {
        display_value = "";
        input_selector.value = display_value;
      } else if (button_value == "DE") {
        display_value = display_value.toString();
        display_value = display_value.slice(0, -1);
        input_selector.value = display_value;
      } else {
        display_value = display_value + button_value;
        input_selector.value = display_value;
      }
    } catch (error) {
      let error_message = "Invalid Input";
      input_selector.value = error_message;
      console.log(error);
    }
  });
});
