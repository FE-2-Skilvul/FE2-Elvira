const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});



function handleGetFormData() {
  const namaInput = document.getElementById('nama');
  const teleponInput = document.getElementById('telepon');
  const emailInput = document.getElementById('email');
  const zipCodeInput = document.getElementById('zip-code');
  const keluhanInput = document.getElementById('keluhan');
  
  const formData = {
    nama: namaInput.value,
    telepon: teleponInput.value,
    email: emailInput.value,
    zipCode: zipCodeInput.value,
    keluhan: keluhanInput.checked
  };
  
  return formData;
}

function isNumber(input) {
  return /^\d+$/.test(input);
}

function checkboxIsChecked() {
  const statusInput = document.getElementById('status');
  return statusInput.checked;
}

function validateFormData(formData) {
  if (
    formData != null &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked(formData.status)
  ) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  event.preventDefault();
  const props = handleGetFormData();
  const hasil = validateFormData(props);
  if (hasil == false) {
    document.getElementById("warning").innerText = "Periksa form anda sekali lagi";
  } else {
    return hasil;
  }
}

function showModal(event) {
  event.preventDefault();
  // show modal
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  // reset form
  document.getElementById("nama").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telepon").value = "";
  document.getElementById("lokasi").value = "";
  document.getElementById("zip-code").value = "";
  document.getElementById("keluhan").value = "";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


