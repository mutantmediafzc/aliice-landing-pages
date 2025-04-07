// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("cs_form");

//   form.addEventListener("submit", async function (event) {
//     event.preventDefault();

//     const payload = validateInputs();

//     showLoadingState(true);

//     try {
//       const response = await fetch("https://aliice.space/api/leads", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (data.success === false && data.errors && data.errors.email) {
//         displayError(true, data.errors.email[0]);
//         showLoadingState(false);
//         return;
//       }

//       console.log("Success", data);
//       Swal.fire({
//         icon: "success",
//         title: "Success!",
//         text: "Your data has been submitted successfully",
//         confirmButtonText: "Great!",
//       });

//       form.reset();
// 	  document.querySelector('input[name="phone"]').value = "";
//       displayError(false);
//       showLoadingState(false);

//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   });
// });


// function validateInputs() {
// 	const firstName = document.querySelector('input[name="fname"]').value;
// 	const lastName = document.querySelector('input[name="lname"]').value;
// 	const email = document.querySelector('input[name="email"]').value;
// 	const mobileRaw = document.querySelector('input[name="phone"]').value;
// 	const serviceId = document.getElementById("service-selector").value;
// 	const clinicPreference = document.getElementById("location-selector").value;
// 	// const isPatient = document.getElementById('patient-checkbox').checked;
// 	const description = document.getElementById("message").value;

//     const mobile = mobileRaw.replace(/\D/g, "");

//     const payload = {
//       first_name: firstName,
//       last_name: lastName,
//       email: email,
//       mobile: mobile,
//       service_id: serviceId,
//       clinic_preference: clinicPreference,
//     };

//     if (description && description.trim() !== "") {
//       payload.description = description;
//     }

//     return payload;
//   }

//   function displayError(error, message) {
//     if (error) {
//       document.getElementById("email-error").textContent = message;
//       document.getElementById("email").style.borderColor = "red";
//     } else {
// 	  document.getElementById('email-error').textContent = "";
//       document.getElementById("email").style.borderColor = "#e1e1e1";
//     }
//   }

//   function showLoadingState(loading) {
// 	const submitBtn = document.getElementById("submit-btn");

//     if (loading) {
//       submitBtn.textContent = "Submitting...";
//       submitBtn.disabled = true;
//     } else {
//       submitBtn.textContent = "CONFIRM";
//       submitBtn.disabled = false;
//     }
//   }
