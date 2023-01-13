import express from 'express';
import detailsRoutes from './details';

const app = express();

app.use('/details', detailsRoutes);

export default app;
