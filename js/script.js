function verifyForm() {
  const name = document.forms["contact-form"]["name"]
  const email = document.forms["contact-form"]["email"]
  const phoneNumber = document.forms["contact-form"]["phone-number"]
  const message = document.forms["contact-form"]["message"]

  if (!name.value) {
    alert("Masukkan nama kamu")
    return false
  }
  if (!email.value) {
    alert("Masukkan email kamu")
    return false
  }
  if (!phoneNumber.value) {
    alert("Masukkan nomor telepon kamu")
    return false
  }
  if (!message.value) {
    alert("Masukkan pesan kamu")
    return false
  }

  alert("Terima kasih sudah menghubungi kami :)")
  return true
}

let slideIndex = 0

function showSlides() {
  const slides = document.getElementsByClassName("img-slideshow")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block"
  setTimeout(showSlides, 6000) // Change image every 6 seconds
}

showSlides()
