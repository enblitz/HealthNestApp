import React, { useState } from 'react';
import './App.css';

const Doctors = () => {
  const [filter, setFilter] = useState({ name: '', specialization: '', fees: '', location: '' });
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State for selected doctor
  const [showModal, setShowModal] = useState(false); // State to show/hide the modal

  const doctors = [
    {
      name: 'Dr. Smith',
      specialization: 'Cardiology',
      description: 'Expert in treating heart conditions.',
      image: 'path_to_image/dr_smith.jpg',
      fees: '$150',
      location: 'New York',
    },
    {
      name: 'Dr. Johnson',
      specialization: 'Neurology',
      description: 'Specializes in neurological disorders.',
      image: 'path_to_image/dr_johnson.jpg',
      fees: '$200',
      location: 'Los Angeles',
    },
    {
      name: 'Dr. Johnson',
      specialization: 'Neurology',
      description: 'Specializes in neurological disorders.',
      image: 'path_to_image/dr_johnson.jpg',
      fees: '$200',
      location: 'Los Angeles',
    },
    {
      name: 'Dr. Johnson',
      specialization: 'Neurology',
      description: 'Specializes in neurological disorders.',
      image: 'path_to_image/dr_johnson.jpg',
      fees: '$200',
      location: 'Los Angeles',
    },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${selectedDoctor.name}`);
    handleCloseModal();
  };

  const filteredDoctors = doctors.filter(
    doctor =>
      doctor.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      doctor.specialization.toLowerCase().includes(filter.specialization.toLowerCase()) &&
      (filter.fees === '' || doctor.fees.includes(filter.fees)) &&
      (filter.location === '' || doctor.location.toLowerCase().includes(filter.location.toLowerCase()))
  );

  return (
    <div>
      <h2>Filter Doctors</h2>
      <div className="filters"> 
        <input
          type="text"
          name="name"
          placeholder="Filter by Name"
          value={filter.name}
          onChange={handleFilterChange}
          className="input" 
        />
        <input
          type="text"
          name="specialization"
          placeholder="Filter by Specialization"
          value={filter.specialization}
          onChange={handleFilterChange}
          className="input" 
        />
        <input
          type="text"
          name="fees"
          placeholder="Filter by Fees"
          value={filter.fees}
          onChange={handleFilterChange}
          className="input" 
        />
        <input
          type="text"
          name="location"
          placeholder="Filter by Location"
          value={filter.location}
          onChange={handleFilterChange}
          className="input"
        />
      </div>
      <h2>Doctor List</h2>
      <div className="cardContainer"> 
        {filteredDoctors.map((doctor, index) => (
          <div key={index} className="card"> 
            <img src={doctor.image} alt={doctor.name} className="image" />
            <h3>{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Fees:</strong> {doctor.fees}</p>
            <p><strong>Location:</strong> {doctor.location}</p>
            <p>{doctor.description}</p>
            <button onClick={() => handleBookAppointment(doctor)} className="bookButton">Book Appointment</button>
          </div>
        ))}
      </div>
      {showModal && selectedDoctor && (
        <div className="modal">
          <div className="modalContent">
            <span className="closeButton" onClick={handleCloseModal}>&times;</span>
            <h2>Book Appointment with {selectedDoctor.name}</h2>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Your Name: </label>
                <input type="text" name="patientName" required />
              </div>
              <div>
                <label>Your Email: </label>
                <input type="email" name="patientEmail" required />
              </div>
              <div>
                <label>Appointment Date: </label>
                <input type="date" name="appointmentDate" required />
              </div>
              <div>
                <label>Appointment Time: </label>
                <input type="time" name="appointmentTime" required min="09:00" max="18:00" step="3600" />
              </div>
              <div>
                <label>Aadhar Card Number: </label>
                <input type="text" name="aadharNumber" required pattern="\d{12}" title="Aadhaar number should be 12 digits" />
              </div>
              <button type="submit">Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
