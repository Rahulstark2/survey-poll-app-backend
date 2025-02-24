"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyController = void 0;
const surveyModel_1 = require("../models/surveyModel");
class SurveyController {
    getAllSurveys(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const surveys = yield surveyModel_1.SurveyModel.getAllSurveys();
                res.status(200).json(surveys);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    createSurvey(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const surveyData = {
                    title: req.body.title,
                    questions: {
                        create: req.body.questions.map((question) => ({
                            text: question.text,
                            options: {
                                create: question.options.map((option) => ({
                                    text: option.text
                                }))
                            }
                        }))
                    }
                };
                const newSurvey = yield surveyModel_1.SurveyModel.createSurvey(surveyData);
                res.status(201).json(newSurvey);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    getSurveyById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const survey = yield surveyModel_1.SurveyModel.getSurveyById(req.params.id);
                if (survey == null) {
                    return res.status(404).json({ message: 'Survey not found' });
                }
                res.status(200).json(survey);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    updateSurvey(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedSurvey = yield surveyModel_1.SurveyModel.updateSurvey(req.params.id, req.body);
                res.status(200).json(updatedSurvey);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    deleteSurvey(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield surveyModel_1.SurveyModel.deleteSurvey(req.params.id);
                res.status(200).json({ message: 'Survey deleted' });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.SurveyController = SurveyController;
