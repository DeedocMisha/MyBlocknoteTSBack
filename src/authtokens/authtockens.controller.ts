import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/createUser.dto';
import { ValidateUserDto } from '../authtokens/dto/validateUser.dto'; // Ensure the correct import
import { AuthTokensService } from './authtockens.service'; // Correct import

@Controller('authtokens')
export class AuthTokensController {
  constructor(private readonly authTokensService: AuthTokensService) {}

  @Post('registration')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authTokensService.register(createUserDto);
  }

  @Post('login')
  login(@Body() validateUserDto: ValidateUserDto) {
    return this.authTokensService.login(validateUserDto);
  }
}
