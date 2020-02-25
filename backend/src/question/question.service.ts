import { Question } from './Dto/question.dto';
import { Model } from 'mongoose';
import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
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

  async getCollectionByName(name: string) {
    try {
      const response = await this.questionModel
        .find({ collectionName: name })
        .exec();

      if (response.length === 0) {
        throw new BadRequestException(
          `No Collection available with the name: ${name}`,
        );
      }
      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
