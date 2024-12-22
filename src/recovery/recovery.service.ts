import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recovery } from '../Recovery.model';
import { Users } from '../Users.model';
import { JwtService } from '@nestjs/jwt';
import { CreateRecoveryDto } from './dto/recovery.dto';

@Injectable()
export class RecoveryService {
  constructor(
    @InjectRepository(Recovery)
    private readonly recoveryRepository: Repository<Recovery>,
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {}

  async createRecoveryToken(
    createRecoveryDto: CreateRecoveryDto,
  ): Promise<Recovery> {
    const user = await this.userRepository.findOne({
      where: { email: createRecoveryDto.email },
    });

    if (!user) {
      throw new NotFoundException('Пользователь с таким email не найден');
    }

    const token = this.generateToken(user);

    const recovery = this.recoveryRepository.create({
      token,
      user,
      createdAt: new Date(),
    });

    return this.recoveryRepository.save(recovery);
  }

  private generateToken(user: Users): string {
    const payload = { email: user.email, id: user.id };
    return this.jwtService.sign(payload);
  }
}
