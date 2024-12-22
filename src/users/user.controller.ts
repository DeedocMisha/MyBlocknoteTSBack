import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service'; // Ensure you import UserService
import { RolesGuard } from './roles.guard'; // Ensure RolesGuard is imported
import { BanUserDto } from './dto/banUser.dto'; // Ensure BanUserDto is imported
import { Roles } from "../auth/roles-auth.decorator";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto); // Correct method name
  }

  @Post('/ban')
  @Roles('admin')
  @UseGuards(RolesGuard)
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers(); // Correct method name
  }
}
