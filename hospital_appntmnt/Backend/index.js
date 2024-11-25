import express, { json } from 'express';
import { appntmntRouter } from './Routes/appntmntRoute.js'
import cors from 'cors'

const appntmnt_app = express();

appntmnt_app.use(cors({
  origin: 'http://localhost:5173',
  credentials : true,
  allowHeaders : ['Content-Type', 'Authorization']
}))

appntmnt_app.use(json());
appntmnt_app.use('/', appntmntRouter);

const port = 4000

appntmnt_app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
  
})
