"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const surveyRoutes_1 = __importDefault(require("./routes/surveyRoutes"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/surveys', surveyRoutes_1.default);
app.listen(config_1.default.port, () => {
    console.log(`Server is running on port ${config_1.default.port}`);
});
