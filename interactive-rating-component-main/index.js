// Menyimpan referensi ke tombol yang aktif saat ini
let currentActiveButton = null;

// Mendapatkan elemen tombol
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const result = document.getElementById("submit");
const card1 = document.getElementById("public-container");
const num = document.getElementById("yso");
const card2 = document.getElementById("indomilk");
// const status = document.getElementById("status");
// const status = document.getElementById("status");

// Fungsi untuk menangani klik pada tombol
function handleButtonClick(button) {
  // Jika ada tombol yang sebelumnya aktif, kembalikan ke keadaan semula
  if (currentActiveButton) {
    currentActiveButton.classList.add("button");
    currentActiveButton.classList.remove("active");
  }

  // Mengatur tombol yang baru diklik menjadi aktif
  button.classList.add("active");
  button.classList.remove("button");

  // Menyimpan referensi ke tombol yang aktif saat ini
  currentActiveButton = button;
  //   return button.id;
  //   num.textContent = Active Button: ${button.id};
  num.textContent = `You selected ${currentActiveButton.id} out of 5`;
}

function submit() {
  if (currentActiveButton) {
    // alert("test");
    card1.classList.add("gusti");
    card2.classList.remove("indomilk");
    // alert("Mantap banget jingg");
    // num.textContent =
  } else {
    // alert("Silahkan pilih terlebih dahulu");
  }
}

// Menambahkan event listener pada setiap tombol
one.addEventListener("click", () => handleButtonClick(one));
two.addEventListener("click", () => handleButtonClick(two));
three.addEventListener("click", () => handleButtonClick(three));
four.addEventListener("click", () => handleButtonClick(four));
five.addEventListener("click", () => handleButtonClick(five));

result.addEventListener("click", submit);
