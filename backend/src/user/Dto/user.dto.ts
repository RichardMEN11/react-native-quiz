import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  IsNumber,
} from 'class-validator';

export class User {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  username: string;

  @IsNotEmpty()
  @IsNumber()
  questionAnswered: number;

  @IsNotEmpty()
  @IsNumber()
  correctAnswers: number;

  @IsNotEmpty()
  @IsNumber()
  wrongAnswers: number;

  @IsNotEmpty()
  @IsNumber()
  gamesPlayed: number;
}

export class UserSignIn {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  password: string;
}

export class UpdatedUser {
  @IsNotEmpty()
  @IsNumber()
  questionAnswered: number;

  @IsNotEmpty()
  @IsNumber()
  correctAnswers: number;

  @IsNotEmpty()
  @IsNumber()
  wrongAnswers: number;
}
