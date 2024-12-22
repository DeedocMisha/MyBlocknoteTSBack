import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles'; //Созд константу ключа с названием roles

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
/*const Roles = (...roles: string[]) — это функция, принимающая переменное количество
 аргументов (используется оператор ..., который позволяет передавать любое количество строк) и сохраняющая их в массив roles.
 SetMetadata(ROLES_KEY, roles) — это встроенная функция NestJS, которая устанавливает метаданные для указанного целевого класса или обработчика (метода).
 ROLES_KEY — это константа, обычно представляющая уникальный ключ для метаданных, связанных с ролями (обычно определённая в виде строки, чтобы избежать конфликтов).
 roles — массив строк, который передаётся как значение метаданных.*/
