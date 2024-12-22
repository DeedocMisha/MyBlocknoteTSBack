import { IsNotEmpty } from 'class-validator';

export class GetRoleByValueDto {
  @IsNotEmpty()
  value: string; // Убедитесь, что это поле обязательно
}