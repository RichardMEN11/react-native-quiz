import { IsNotEmpty, IsString } from 'class-validator';
import { Collection } from '../Interfaces/collection.interface';

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
  @IsNotEmpty()
  @IsString()
  collection: Collection;
}
