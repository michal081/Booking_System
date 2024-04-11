const appointment = []; //storage


function bookAppointment() {
    const BookingDateTimeInput = document.getElementById('bookingDateTime').value;

    if (BookingDateTimeInput === '') {
        alert('Please, select a date and time')
    };

    const now = new Date();
    const selectedDatetime = new Date(BookingDateTimeInput);


    if (selectedDatetime < now) {
        alert('You cannot book an appointment in the past');
    }else{
        const confirmationMessageE = document.getElementById('confirmationMessage');
        // confirmationMessageE.textContent = `Appointment Booked for ${BookingDateTimeInput}`;
        alert('Appointment Booked for ${BookingDateTImeInput}')

        appointment.push(selectedDatetime);
        displayAppointment();
    };
}

function cancleAppointment(index) {
    appointment.splice(index, 1);
    displayAppointment();
}


function displayAppointment() {
    const appointmentsList = document.getElementById('appointmentsList');
    appointmentsList.innerHTML = '';
    
    appointmentsList.forEach((appointment,index)=>{
        const li = document.createElement('li');
        li.textContent = `Appointment on ${appointment.toLocaleString()}`;

        const cancleButton = document.createElement('button');
        cancleButton.textContent = 'cancle';
        cancleButton.onclick = () => cancleAppointment(index);

        li.appendChild(cancleButton);
        appointmentsList.appendChild(li);
    })
}
