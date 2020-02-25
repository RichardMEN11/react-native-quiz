import { QuestionService } from './question.service';
import { Question } from './Dto/question.dto';
import {
  Controller,
  Post,
  Get,
  Put,
  Body,
  Param,
  Logger,
} from '@nestjs/common';

@Controller('question')
export class QuestionController {
  private logger = new Logger('QuestionController');

  constructor(private questionService: QuestionService) {}

  @Post()
  async addQuestion(@Body() question: Question): Promise<Question> {
    this.logger.verbose(
      `Creating a new Question. Data ${JSON.stringify(question)}`,
    );
    return await this.questionService.addQuestion(question);
  }

  @Get(':id')
  async getQuestionById(@Param() params): Promise<Question> {
    this.logger.verbose(`Getting question with id: ${params.id}`);
    return this.questionService.getQuestionById(params.id);
  }

  @Get('/categorie/:categorie')
  async getQuestionByCategorie(@Param() params): Promise<Question> {
    this.logger.verbose(`Getting question with categorie: ${params.categorie}`);
    return this.questionService.getQuestionByCategorie(params.categorie);
  }

  @Get()
  async getAllQuestions(): Promise<Question> {
    this.logger.verbose(`Getting all questions`);
    return this.questionService.getAllQuestions();
  }

  @Get('/collection/:name')
  async getCollectionByName(@Param() params) {
    this.logger.verbose(`Getting all collections`);
    return this.questionService.getCollectionByName(params.name);
  }
}
