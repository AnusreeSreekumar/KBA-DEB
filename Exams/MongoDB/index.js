import express, { json } from 'express';
import { appntmntRouter } from './HospitalAppointment/Routes/appntmntRoute.js'

const appntmnt_app = express();

appntmnt_app.use(json());
appntmnt_app.use('/', appntmntRouter);

const port = 4000

appntmnt_app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
  
})
