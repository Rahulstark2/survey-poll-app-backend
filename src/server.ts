import express from 'express';
import  surveyRoutes  from './routes/surveyRoutes';
import config from './config';

const app = express();

app.use(express.json());
app.use('/api/surveys', surveyRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});