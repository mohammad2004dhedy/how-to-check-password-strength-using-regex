let input = document.getElementById("password");
let regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#$&*.?":{}|<>])[A-Za-z\d#$&*,.?":{}|<>]{8,16}$/;
let strength = document.querySelector(".strength");
input.onkeyup = () => {
  if (regex.test(input.value)) {
    strength.textContent = "strong";
    strength.style.color = "green";
  } else {
    strength.textContent = "weak";
    strength.style.color = "red";
  }
};
