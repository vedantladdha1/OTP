
// Function to validate the entered OTP
function validateOTP() {
  // Get the user-entered OTP from the input field
  const enteredOTP = document.getElementById('otpInput').value;

  // You can replace this with the actual OTP sent to the user
  const actualOTP = '123456'; // Replace '123456' with your actual OTP

  // Compare the entered OTP with the actual OTP
  if (enteredOTP === actualOTP) {
    // If the OTP is correct, display a success message or perform other actions
    alert('OTP is valid!'); 
  } else {
    // If the OTP is incorrect, display an error message or perform other actions
    alert('Invalid OTP. Please try again.'); // Replace this with your desired action
  }
}
