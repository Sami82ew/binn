// Function to validate contact form before submission
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields before sending your message.");
    return false; // stop form submission
  }

  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("📧 Please enter a valid email address.");
    return false;
  }

  // If everything is valid
  alert("✅ Thank you, " + name + "! Your message has been sent successfully.");
  return true; // allow form submission
}