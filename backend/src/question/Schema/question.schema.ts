import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  question: String,
  answerA: String,
  answerB: String,
  answerC: String,
  answerD: String,
  correctAnswer: String,
  categorie: String,
  collectionName: String,
});
