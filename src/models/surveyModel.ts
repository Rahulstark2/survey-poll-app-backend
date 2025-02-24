import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class SurveyModel {
    static async getAllSurveys() {
      return await prisma.survey.findMany();
    }

    static async createSurvey(data:any) {
        return await prisma.survey.create({ data });
      }

      static async getSurveyById(id:any) {
        id=parseInt(id);
        return await prisma.survey.findUnique({ where: { id } });
      }

      static async updateSurvey(id:any, data:any) {
        id=parseInt(id);
        return await prisma.survey.update({ where: { id }, data });
      }

      static async deleteSurvey(id:any) {
        id=parseInt(id)
        return await prisma.survey.delete({ where: { id } });
      }
}