import { IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  role: string; // Убедитесь, что это поле обязательно
}
