import { SurveyController } from '../controllers/surveyController';
import express from 'express';
const router = express.Router();
const surveyController = new SurveyController();

router.get('/', surveyController.getAllSurveys);
router.get('/:id', surveyController.getSurveyById);
router.post('/', surveyController.createSurvey);
router.put('/:id', surveyController.updateSurvey);
router.delete('/:id', surveyController.deleteSurvey);

export default router;