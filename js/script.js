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
