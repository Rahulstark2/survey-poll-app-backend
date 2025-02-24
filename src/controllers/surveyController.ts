import {SurveyModel}  from "../models/surveyModel";

export class SurveyController {
    async getAllSurveys(req: any, res: any) {
      try {
        const surveys = await SurveyModel.getAllSurveys();
        res.status(200).json(surveys);
      } catch (error) {
        res.status(500).json({ message: (error as Error).message });
      }
    }

    async createSurvey(req: any, res: any) {
        try {
            const surveyData = {
                title: req.body.title,
                questions: {
                    create: req.body.questions.map((question: any) => ({
                        text: question.text,
                        options: {
                            create: question.options.map((option: any) => ({
                                text: option.text
                            }))
                        }
                    }))
                }
            };
          const newSurvey = await SurveyModel.createSurvey(surveyData);
          res.status(201).json(newSurvey);
        } catch (error) {
          res.status(400).json({ message: (error as Error).message });
        }
      }

      async getSurveyById(req:any, res:any) {
        try {
          const survey = await SurveyModel.getSurveyById(req.params.id);
          if (survey == null) {
            return res.status(404).json({ message: 'Survey not found' });
          }
          res.status(200).json(survey);
        } catch (error) {
          res.status(500).json({ message: (error as Error).message });
        }
      }

      async updateSurvey(req: any, res: any) {
        try {
          const updatedSurvey = await SurveyModel.updateSurvey( req.params.id , req.body);
          res.status(200).json(updatedSurvey);
        } catch (error) {
          res.status(400).json({ message: (error as Error).message });
        }
      }

      async deleteSurvey(req:any, res:any) {
        try {
          await SurveyModel.deleteSurvey(req.params.id);
          res.status(200).json({ message: 'Survey deleted' });
        } catch (error) {
          res.status(500).json({ message: (error as Error).message });
        }
      }


}