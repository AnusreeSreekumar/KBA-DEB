import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBooking = () => {

    const [PatientName, setPatientName] = useState('');
    const [DocName, setDocName] = useState('');
    const [AppointmentDate, setAppntmntDate] = useState('');
    const [AppointmentTime, setAppntmntTime] = useState('');

    const navigate = useNavigate();

    const submitForm = async (e) => {

        e.preventDefault();
        const newBooking = {
            PatientName,
            DocName,
            AppointmentDate,
            AppointmentTime,
        }
        try {

            const response = await fetch('http://localhost:4000/addBooking', {

                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBooking)
            });
            if (response.ok) {

                alert('Appointment created')
                navigate('/viewbooking')
            }
            else {
                console.log('Failed to add an appointment');
            }
        } catch (error) {
            console.log('Error booking appointment');
        }
    }
    return (
        <section className="bg-white">
            <div className="container mt-24 ml-96 max-w-xl py-2">
                <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <h2 className='text-center mb-8 font-semibold text-purple-600'>Add Booking</h2>
                    <form onSubmit={submitForm}>
                        <div>
                            <label htmlFor="patname">Name of Patient</label>
                            <input type="text" name="patname" id="patname"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                value={PatientName}
                                onChange={(e) => setPatientName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="docname">Name of Doctor</label>
                            <input type="text" name="docname" id="docname"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                value={DocName}
                                onChange={(e) => setDocName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="appntmntdate">Date of Appointment</label>
                            <input type="text" name="appntmntdate" id="appntmntdate"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                value={AppointmentDate}
                                onChange={(e) => setAppntmntDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="appntmnttime">Time of Appointment</label>
                            <input type="text" name="appntmnttime" id="appntmnttime"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                value={AppointmentTime}
                                onChange={(e) => setAppntmntTime(e.target.value)}
                            />
                        </div>
                        <button
                            className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                            type="submit" >
                            Book Appointment
                        </button>
                </form>
            </div>
        </div>
        </section >
    )
}

export default AddBooking
