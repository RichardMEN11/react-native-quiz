import { IsNotEmpty, IsString } from 'class-validator';

export class Collection {
  @IsNotEmpty()
  @IsString()
  name: string;
}
