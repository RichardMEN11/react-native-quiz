import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { CollectionsModule } from './collections/collections.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://te:LIqthyLDtXSswuDV@cluster0-epg0p.mongodb.net/pflegonaut?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    QuestionModule,
    AuthModule,
    UserModule,
    CollectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
