const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", (event) => {
  event.preventDefault(); // menghentikan perilaku default dari form

  const email = document.getElementById("exampleInputUsername1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  // mengirimkan permintaan login ke API
  fetch("https://64530ec3e9ac46cedf1c7892.mockapi.io", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Login Berhasil ges")
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});