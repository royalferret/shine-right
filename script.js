const modal = document.getElementById("bookingModal");
const closeBtn = document.getElementById("closeModal");

// open modal
document.querySelectorAll(".hero-btn, .nav-cta, .contact-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

// close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// click outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// fake submit
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Booking request sent!");
  modal.style.display = "none";
});