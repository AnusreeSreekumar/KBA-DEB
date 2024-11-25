import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const signup = () => {

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Age, setAge] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const navigate = useNavigate();

    const signupForm = async (e) => {

        e.preventDefault();

        const userDetails = {

            FirstName,
            LastName,
            Age,
            Email,
            Password
        }
        try {

            const response = await fetch('http://localhost:4000/signup', {

                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userDetails),
            });
            if (response.ok) {

                alert('User registered');
                navigate('/login')
            }
        } catch (error) {
            console.log('An error occurred while adding user details');
        }
    }

    return (

        <section className="bg-white">
            <div className="container mt-24 ml-[500px] w-96 py-2">
                <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <h2 className='text-center mb-8 font-semibold text-purple-600'>Sign Up</h2>
                    <form onSubmit={signupForm}>
                        <div>
                            <label htmlFor="Fname">Enter Fullname: </label>
                            <input type="text" name="Fname" id="Fname"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                value={FirstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="Lname">Enter Lastname: </label>
                            <input type="text" name="Lname" id="Lname"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                value={LastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="age_txt">Enter Age: </label>
                            <input type="text" name="age_txt" id="age_txt"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                value={Age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email_txt">Enter Email: </label>
                            <input type="text" name="email_txt" id="email_txt"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="pword_txt">Enter Password: </label>
                            <input type="password" name="pword_txt" id="pword_txt"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                            type="submit" >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default signup
