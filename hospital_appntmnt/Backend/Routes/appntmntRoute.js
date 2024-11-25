import { Router } from "express";
import { appntmntEntries } from "../Models/appointmentSchema.js";
import { user } from "../Models/userSchema.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { authenticate } from "../Middleware/auth.js";

const appntmntRouter = Router();
const secretKey = 'hello'

mongoose.connect('mongodb://localhost:27017/Appointmnt_Schedule')

appntmntRouter.post('/signup', async (req, res) => {

    try {

        const userDtls = req.body;
        console.log(userDtls);
        const Role = 'Admin'

        const {
            FirstName,
            LastName,
            Age,
            Email,
            Password,
        } = userDtls;

        const hashPword = await bcrypt.hash(Password, 10);
        console.log(hashPword);

        const existingUser = await user.findOne({ dbEmail: Email })
        console.log('Existing User: ', existingUser);

        if (existingUser == null) {

            const newUser = new user({

                dbFirstName: FirstName,
                dbLastName: LastName,
                dbAge: Age,
                dbEmail: Email,
                dbPassword: hashPword,
                dbRole: Role
            })
            await newUser.save();
            console.log('User details created');
            res.status(200).json({ message: newUser })
        }
        else {

            console.log('User details already entered');
            res.status(404).json({ message: existingUser })
        }
    }
    catch (error) {
        console.log('An error occures while adding user details');
    }

})

appntmntRouter.post('/login', async (req, res) => {

    try {

        const loginDtls = req.body;
        const { Email, Password } = loginDtls;
        console.log("input data: ", loginDtls);

        const existingUser = await user.findOne({ dbEmail: Email });
        console.log("Existing User: ", existingUser);

        if (existingUser) {

            const isvalid = bcrypt.compare(existingUser.dbPassword, Password)
            console.log(isvalid);
            if (isvalid) {
                const token = jwt.sign({ UserName: existingUser.dbEmail, UserRole: existingUser.dbRole },
                    secretKey,
                    { expiresIn: '1h' }
                )
                console.log("Generated Token: ", token);
                res.cookie('authToken', token, { httpOnly: true })
                res.status(200).json({ message: 'Success' })
            }
            else {
                console.log('Please login to the system');
                res.status(404).json({ message: 'User not logged in' })
            }
        }
    } catch (error) {
        console.log('An error occurred while login in');
    }

})

appntmntRouter.post('/addBooking', async (req, res) => {

    let TokenId;
    try {

        const appntmntDtls = req.body;
        const {
            PatientName,
            DocName,
            AppointmentDate,
            AppointmentTime,
        } = appntmntDtls;

        console.log("Input Data: ", appntmntDtls);

        const latestToken = await appntmntEntries.findOne().sort({ dbTokenId: -1 });
        console.log('latest tokenvalue: ', latestToken);
        if (latestToken == null) {

            TokenId = '10011';
        }
        else {
            const tokenvalue = latestToken.dbTokenId;
            // console.log('actual token',tokenvalue);
            TokenId = parseInt(tokenvalue) + 1;
            console.log("Generated TokenId: ", TokenId);
        }

        const existingAppointment = await appntmntEntries.findOne({ dbTokenId: TokenId });
        console.log("Existing: ", existingAppointment);

        if (existingAppointment) {

            if (existingAppointment.dbDoctorName == DocName) {

                console.log(`Already taken an appointment for Doctor ${DocName}`);
                res.status(404).json({ message: existingAppointment })
            }
            else {

                const newAppointment = new appntmntEntries({

                    dbTokenId: TokenId,
                    dbPatientName: PatientName,
                    dbDoctorName: DocName,
                    dbAppointmentDate: AppointmentDate,
                    dbAppointmentTime: AppointmentTime,
                })
                await newAppointment.save();
                console.log(`Appointment registered for ${DocName}`);
                res.status(200).json({ message: newAppointment })
            }
        }
        else {

            const newAppointment = new appntmntEntries({

                dbTokenId: TokenId,
                dbPatientName: PatientName,
                dbDoctorName: DocName,
                dbAppointmentDate: AppointmentDate,
                dbAppointmentTime: AppointmentTime,
            })
            await newAppointment.save();
            console.log(`Appointment registered for ${DocName}`);
            res.status(200).json({ message: newAppointment })
        }
    }

    catch (error) {
        console.log(error);
    }

})

appntmntRouter.get('/viewUser', authenticate, async (req,res) => {

    // const loginUser = req.UserName;
    // console.log(loginUser);
    
})

appntmntRouter.get('/viewbooking', async (req, res) => {

    try {

        const searchItem = req.query.DocName
        const existingAppointment = await appntmntEntries.find({dbDoctorName : searchItem});
        console.log(existingAppointment);

        if (existingAppointment) {

            console.log('Existing appointments are listed');
            res.status(200).json({ message: existingAppointment })
        }
        else {
            console.log('No existing appointments');
            res.status(404).json({ message: 'No appointments to display' })
        }

    } catch (error) {
        console.log('An error occured while fetching appointments');

    }
});

export { appntmntRouter }