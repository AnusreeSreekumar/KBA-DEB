import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginForm = async (e) => {


        e.preventDefault();

        const loginDtls = {
            Email,
            Password
        }
        console.log('credentials are: ', loginDtls);
        
        try {
            const response = await fetch('http://localhost:4000/login', {

                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginDtls)
            })
            if (response.status == 200) {

                navigate('/home')
            }
            else {
                console.log(await response.json);
            }
        } catch (error) {
            console.log('Error occurred while loggin in');
        }
    }

    return (
        <section className="bg-white">
            <div className="container mt-32 ml-[500px] w-96 py-2">
                <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <h2 className='text-center mb-8 font-semibold text-purple-600'>Login</h2>
                    <form onSubmit={loginForm}>
                        <div>
                            <input type="text" name="Email" id="Email"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                placeholder='Email'
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password" name="pword" id="pword"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                placeholder='Password'
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                            type="submit" >
                            Login
                        </button>
                        <p className='font-semibold text-purple-800'>New User</p>
                        <Link to='/signup'
                            className=" my-10 text-black font-bold w-32 hover:underline"
                            type="submit" >
                            Sign Up
                        </Link>

                    </form>
                </div>
            </div>
        </section >
    )
}

export default Login
