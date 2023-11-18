const button = document.getElementById("myForm");
button.addEventListener("submit", abcd);
function abcd(event) {
  event.preventDefault();
  console.log("hello world");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  console.log(name, email);
  JSON.stringify(localStorage.setItem("name", name));
}
