import { Question } from './Dto/question.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('Question') private readonly questionModel: Model<Question>,
  ) {}
  async addQuestion(question: Question): Promise<Question> {
    const createdQuestion = new this.questionModel(question);
    return await createdQuestion.save();
  }

  async getQuestionById(id: string): Promise<Question> {
    return this.questionModel.findOne({ _id: id }).exec();
  }

  async getQuestionByCategorie(categorie: string): Promise<Question> {
    return this.questionModel.find({ categorie });
  }

  async getAllQuestions(): Promise<Question> {
    return this.questionModel.find();
  }

  async getCollectionByName(name: string): Promise<[Question]> {
    try {
      const response = await this.questionModel.find({ categorie: name });
      return response;
    } catch (error) {
      //TODO: throw error
    }
  }
}
