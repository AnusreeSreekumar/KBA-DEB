import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const ViewBooking = () => {

    const [appointments, setAppointments] = useState('');
    const [error, setError] = useState('')

    useEffect(() => {

        const fetchAppointments = async () => {
            try {

                const response = await fetch('http://localhost:4000/viewbooking/?DocName=XYZ', {

                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' }
                })
                if (response.status == 200) {
                    const data = await response.json()
                    console.log(data);
                    setAppointments(data.message)
                    console.log("Appointment Array", appointments);
                }
                else {
                    const errorData = await response.json();
                    setError(errorData.message) || 'Failed to fetch'
                }
            }
            catch (error) {
                console.log('Unable to fetch data');

            }
        }
        fetchAppointments();
    }, [])
    return (

        <div>
            <h1 className='text-center text-2xl font-semibold mb-10 mt-4 text-purple-600'>Appointment Details</h1>

            <div>
                <table className='w-full border-gray-300'>
                    <thead className='bg-gray-200'>
                        <tr>
                            <th className='border border-gray-300 px-4 py-2'>Token Ids</th>
                            <th className='border border-gray-300 px-4 py-2'>Patient Name</th>
                            <th className='border border-gray-300 px-4 py-2'>Doctor Name</th>
                            <th className='border border-gray-300 px-4 py-2'>Appointment Date</th>
                            <th className='border border-gray-300 px-4 py-2'>Appointment Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.length > 0 ? (
                            appointments.map((appointment, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">{appointment.dbTokenId}</td>
                                    <td className="border border-gray-300 px-4 py-2">{appointment.dbPatientName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{appointment.dbDoctorName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{appointment.dbAppointmentDate}</td>
                                    <td className="border border-gray-300 px-4 py-2">{appointment.dbAppointmentTime}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No bookings found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Link to='/home'
                    className="bg-purple-500 hover:bg-purple-600 mt-[400px] text-white font-bold py-2 px-4 rounded-full w-full"
                    type="submit" >
                    Back to Home
                </Link>
            </div>
        </div >
    )
}

export default ViewBooking
