let fn = document.getElementById('fullname');
let email = document.getElementById('email');
let message = document.getElementById('message');
let tb = document.getElementById('submit-button'); // event-target object

// declare the event-handler
function handleClick() {
  // create the bucket for errors
  let errors = [];
  // create the bucket for data
  let data = {};

  


  // if full-name has a value
  // pass that value into data-object
  // otherwise
  // write the corresponding error-message and pass it to the errors-array
  // end otherwise here
  if (fn.value) {
    data.fullName = fn.value;
  } else {
    errors.push('Please fill out the full name!');
  }

  // if email has a value
  // pass that value into data-object if it's a valid email
  // otherwise
  // write the corresponding error-message and pass it to the errors-array
  // end otherwise here
  if (email.value) {
    if (validateEmail(email.value)) {
      data.email = email.value;
    } else {
      errors.push('Invalid email format!');
    }
  } else {
    errors.push('Please fill out the email!');
  }

  // if message has a value
  // pass that value into data-object
  // otherwise
  // write the corresponding error-message and pass it to the errors-array
  // end otherwise here
  if (message.value) {
    data.message = message.value;
  } else {
    errors.push('Please fill out the message!');
  }

  // print feedback or data
  // Validation code...

  if (errors.length === 0) {
    console.log(data);
    // Reset form fields
    fn.value = '';
    email.value = '';
    message.value = '';
  } else {
    console.log(errors);
  }

}

// registering tb for click event:
tb.addEventListener('click', handleClick);

// email validation function
function validateEmail(email) {
  // regular expression for email validation
  // This regex pattern may not cover all possible email formats, but it covers the commonly used ones.
  // Feel free to modify or use a more comprehensive email validation regex pattern if needed.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
