import mongoose from 'mongoose';

const appntmntSchema = new mongoose.Schema({
    dbTokenId: {type : String, unique : true, required : true},
    dbPatientName: {type : String, required : true},
    dbDoctorName: {type : String, required : true},
    dbAppointmentDate: { type: String, required : true},
    dbAppointmentTime: { type: String, required : true}
});

const appntmntEntries = mongoose.model('AppntmntDetails', appntmntSchema)

export {appntmntEntries}