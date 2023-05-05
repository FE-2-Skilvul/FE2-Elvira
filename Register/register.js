const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", (event) => {
  event.preventDefault(); // menghentikan perilaku default dari form

  const username = document.getElementById("exampleInputUsername1").value;
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  // mengirimkan permintaan login ke API
  fetch("https://64530ec3e9ac46cedf1c7892.mockapi.io", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,  
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Register Berhasil!")
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});