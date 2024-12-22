import { Body, Controller, Post } from '@nestjs/common';
import { RecoveryService } from './recovery.service';
import { Recovery } from '../Recovery.model';
import { CreateRecoveryDto } from './dto/recovery.dto';

@Controller('recovery')
export class RecoveryController {
  constructor(private readonly recoveryService: RecoveryService) {}

  @Post('token')
  async changeNewToken(
    @Body() createRecoveryDto: CreateRecoveryDto,
  ): Promise<Recovery> {
    return this.recoveryService.createRecoveryToken(createRecoveryDto);
  }
}
