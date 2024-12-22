import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Users } from '../Users.model'; // Ensure this is the path to your Users model
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from '../users/dto/createUser.dto';
import { ValidateUserDto } from './dto/validateUser.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthTokensService {
  constructor(
    @InjectRepository(Users) // Инъекция репозитория пользователей
    private readonly usersRepository: Repository<Users>,
    private readonly jwtService: JwtService, // Инъекция JwtService
  ) {}

  async register(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new HttpException(
        'Пользователь с таким email существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.usersRepository.save({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.generateToken(user); // This user is now of type Users
  }

  async login(validateUserDto: ValidateUserDto) {
    const user = await this.validateUser(validateUserDto);
    return this.generateToken(user); // This user is also of type Users
  }

  private async generateToken(user: Users) {
    const payload = { id: user.id, email: user.email };
    return {
      token: this.jwtService.sign(payload, { expiresIn: '1h' }), // Set token expiration
    };
  }

  private async validateUser(validateUserDto: ValidateUserDto) {
    const user = await this.usersRepository.findOne({
      where: { email: validateUserDto.email },
    });
    if (!user) {
      throw new HttpException(
        'Неправильный имейл или пароль',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const passwordMatches = await bcrypt.compare(
      validateUserDto.password,
      user.password,
    );
    if (passwordMatches) {
      return user;
    } else {
      throw new HttpException(
        'Неправильный имейл или пароль',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
