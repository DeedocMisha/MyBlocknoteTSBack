  import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

  export class CreateRecoveryDto {
    @IsNotEmpty()
    @IsString()
    token: string; // Токен восстановления

    @IsNotEmpty()
    @IsEmail()
    email: string; // Email пользователя, для которого создается токен
  }
