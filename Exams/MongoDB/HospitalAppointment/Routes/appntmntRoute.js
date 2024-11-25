import { Router } from "express";
import { appntmntEntries } from "../Models/appointmentSchema.js";
import mongoose from "mongoose";

const appntmntRouter = Router();

mongoose.connect('mongodb://localhost:27017/Appointmnt_Schedule')

appntmntRouter.post('/schedule_Appntmnt', async (req, res) => {

    try {

        const appntmntDtls = req.body;
        const {
            TokenId,
            PatientName,
            DocName,
            AppointmentDate,
            AppointmentTime,
        } = appntmntDtls;

        console.log("Input Data: ", appntmntDtls);

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
    } catch (error) {
        console.log(error);
    }

})

appntmntRouter.get('/viewAppointments', async (req, res) => {

    try {

        const searchItem = req.query.DocName;
        const DocArray = []

        const result = await appntmntEntries.find();
        console.log("Fetched entries in DB",result);

        // result.forEach(element => {
        //     if (result.dbDoctorName == searchItem) {

        //         DocArray.push(element)
        //     }
        //     else {
        //         console.log(`No Appointment for Doctor ${searchItem}`);
        //     }
        // });
        console.log(`Appointment for Doctor ${searchItem} is listed`);
        res.status(200).json({ message: DocArray })
    }
    catch(error){
        console.log(error);
    }

});

appntmntRouter.put('/updateAppointment', async (req, res) => {

    try {
        const updateDtls = req.body;

        const {
            TokenId,
            PatientName,
            DocName,
            AppointmentDate,
            AppointmentTime,
        } = updateDtls

        console.log("New Details: ", updateDtls);

        const existingAppointment = await appntmntEntries.findOne({ dbTokenId: TokenId });
        console.log("Existing: ", existingAppointment);

        if (existingAppointment) {

            const updateAppointment = await appntmntEntries.updateOne({ dbTokenId: TokenId },

                {
                    $set: {
                        dbPatientName: PatientName,
                        dbDoctorName: DocName,
                        dbAppointmentDate: AppointmentDate,
                        dbAppointmentTime: AppointmentTime,
                    }
                })
            console.log('Appointment details updated successfully');
            res.status(200).json({ message: updateAppointment })
        }
        else {
            console.log('There is no such appointment');
            res.status(404).json({ message: 'No appointment present in DB' })
        }
    } catch (error) {
        console.log(error);
    }

})

appntmntRouter.delete('/delete', async (req, res) => {

    try {

        const { TokenId } = req.body;
        const existingAppointment = await appntmntEntries.findOne({ dbTokenId: TokenId })
        if (existingAppointment) {

            await appntmntEntries.deleteOne({ dbTokenId: TokenId });
            console.log(`Appointment with tokenId ${TokenId} is deleted`);
            res.status(200).json({ message: `TokenId ${TokenId} Deleted` })
        }
        else {
            console.log('No Entry to Delete');
            res.status(404).json({ message: 'Not entry Found' });
        }
    } catch (error) {
        console.log(error);

    }

})



export { appntmntRouter }