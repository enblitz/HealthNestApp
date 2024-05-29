import React, { useState, useEffect } from 'react';
import './doctorsearch.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const [filter, setFilter] = useState({ name: '', specialization: '', fees: '', location: '' });
  const [doctors, setDoctors] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8081/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(filter.name.toLowerCase()) &&
    doctor.specialization.toLowerCase().includes(filter.specialization.toLowerCase()) &&
    (filter.fees === '' || doctor.fees.includes(filter.fees)) &&
    (filter.location === '' || doctor.location.toLowerCase().includes(filter.location.toLowerCase()))
  );

  const bufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer.data);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const handleMaxPriceChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Minimum Price:', minPrice);
    console.log('Maximum Price:', maxPrice);
  };

  const handleBookAppointmentClick = (doctorName) => {
    setSelectedDoctor(doctorName);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePopupSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setIsPopupOpen(false);
    alert('Appointment booked!');
  };

  return (
    <div className="container-doctor">
      <div className="filters">
        <h2>Filters</h2>
        <input type="text" name="name" placeholder="Search by Name" value={filter.name} onChange={handleFilterChange} className="input" />
        <div>
          <select id="specialization" name="specialization" onChange={handleFilterChange} className="input">
            <option value="all">Filter By Specialization</option>
            <option value="urology">Urology</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedic">Orthopedic</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="dentist">Dentist</option>
          </select>
        </div>
        <div className="price-range">
          <span className="price-label">Price: ₹{minPrice} - ₹{maxPrice}</span>
          <div className="price-inputs">
            <input type="range" value={maxPrice} min="0" max="5000" step="1" onChange={handleMaxPriceChange} className="input-range" />
            <button onClick={handleSubmit} className="price-go">Go</button>
          </div>
        </div>
        <div>
          <select id="location" name="location" onChange={handleFilterChange} className='input'>
            <option value="all">Filter by location</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Gandhinagar">Gandhinagar</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Benglore">Benglore</option>
            <option value="Delhi">Delhi</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Lakhnow">Lakhnow</option>
          </select>
        </div>
      </div>
      <div className="doctorList">
        <h2>Doctor List</h2>
        <div className="cardContainer">
          {filteredDoctors.map((doctor, index) => (
            <div key={index} className="card">
              <Link to='/details' style={{ textDecoration: "none", color: "black" }} >
                <img src={`data:image/jpeg;base64,${bufferToBase64(doctor.doc_pic)}`} alt={doctor.name} className="image" />
                <h3>{doctor.name}</h3>
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p><strong>Fees:</strong> {doctor.fees}</p>
                <p><strong>Location:</strong> {doctor.location}</p>
                <p>{doctor.description}</p>
              </Link>
              <button className="bookButton" type='button' onClick={() => handleBookAppointmentClick(doctor.name)}>Book Appointment</button>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-button" onClick={handleClosePopup}>×</span>
            <h2>Book Appointment With {selectedDoctor}</h2>
            <form onSubmit={handlePopupSubmit}>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Date:
                <input type="date" name="date" required />
              </label>
              <label>
                Time:
                <input type="time" name="time" required />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
