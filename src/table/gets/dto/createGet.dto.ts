import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGetDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  content: string;
}
