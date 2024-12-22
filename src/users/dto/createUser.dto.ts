import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  //Создание пользователя!

  @IsString({ message: 'Должно быть строкой' }) //Валидатор
  @IsEmail({}, { message: 'Некорректный email' }) //Валидатор
  readonly email: string;

  @IsString({ message: 'Должно быть строкой' }) //Валидатор
  @Length(4, 16, { message: 'Не меньше 4 и не больше 16' }) //Валидатор
  readonly password: string;
}
