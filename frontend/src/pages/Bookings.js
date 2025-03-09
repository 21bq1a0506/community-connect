import React, { useEffect, useState } from "react";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
            <p>Time: {booking.time}</p>
            <p>Status: {booking.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;