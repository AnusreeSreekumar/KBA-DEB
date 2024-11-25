import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-slate-300 text-cyan-700 py-8 mt-[200px]">

            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; 2024 Hospital Appointment System. All rights reserved.</p>
                <div className="mt-4">
                    <a href="/privacy-policy" className="text-cyan-700 hover:underline mx-2">Privacy Policy</a>
                    <a href="/terms-of-service" className="text-cyan-700 hover:underline mx-2">Terms of Service</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer
