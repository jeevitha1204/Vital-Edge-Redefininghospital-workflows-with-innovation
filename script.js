function showDoctors() {
    const speciality = document.getElementById("speciality").value;
    const doctors = {
        cardiology: ["Dr. Smith", "Dr. Lee"],
        neurology: ["Dr. Brown", "Dr. Taylor"],
        orthopedics: ["Dr. Johnson", "Dr. White"]
    };

    const doctorsList = document.getElementById("doctors-list");
    if (speciality) {
        doctorsList.innerHTML = `<h3>Available Doctors:</h3><ul>${doctors[speciality]
            .map(doctor => <li>${doctor}</li>)
            .join("")}</ul>`;
    }
}

function confirmAppointment(event) {
    event.preventDefault();
    alert("Your appointment has been booked successfully!");
    window.location.href = "billing.html"; // Redirect to Billing Page
}

function viewBillingDetails() {
    const appointmentId = document.getElementById("appointment-id").value;
    const billingDetails = Billing for Appointment ID ${appointmentId}: $200.;
    document.getElementById("billing-details").innerText = billingDetails;
}