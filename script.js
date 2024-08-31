function checkData() {
  const elements = [
    { element: document.getElementById("firstName"), value: firstName },
    { element: document.getElementById("lastName"), value: lastName },
    { element: document.getElementById("email"), value: email },
    { element: document.getElementById("message"), value: bio },
    { element: consent, value: isConsented },
  ];

  let i = 0;
  while (i < elements.length) {
    if (!elements[i].value) {
      elements[i].element.classList.add("border-red");
    } else {
      elements[i].element.classList.remove("border-red");
    }
    i++;
  }
}
