"use strict";

function validateEmail(string) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(string);
}

function validateString(string) {
  return string.length > 0;
}

var formElements = {
  firstName: {
    element: document.getElementById('contact_fname'),
    func: validateString
  },
  lastName: {
    element: document.getElementById('contact_lname'),
    func: validateString
  },
  email: {
    element: document.getElementById('contact_email'),
    func: validateEmail
  },
  subject: {
    element: document.getElementById('contact_subject'),
    func: validateString
  },
  message: {
    element: document.getElementById('paragraph_text'),
    func: validateString
  }
};
$('#submitButton').click(function (e) {
  e.preventDefault();
  var failed = false;
  var data = {};

  for (var p in formElements) {
    var obj = formElements[p];

    if (!obj.func(obj.element.value)) {
      failed = true;
      obj.element.classList.add('inputError');
    } else {
      obj.element.classList.remove('inputError');
      data[p] = obj.element.value;
    }
  }

  if (failed) {
    return;
  } // DO FORM SEND STUFF HERE


  console.log(data);
});