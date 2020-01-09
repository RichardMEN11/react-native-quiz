import { IsNotEmpty, IsString } from 'class-validator';

export class Question {
  @IsNotEmpty()
  @IsString()
  question: string;
  @IsNotEmpty()
  @IsString()
  answerA: string;
  @IsNotEmpty()
  @IsString()
  answerB: string;
  @IsNotEmpty()
  @IsString()
  answerC: string;
  @IsNotEmpty()
  @IsString()
  answerD: string;
  @IsNotEmpty()
  @IsString()
  correctAnswer: string;
  @IsNotEmpty()
  @IsString()
  categorie: string;
}
