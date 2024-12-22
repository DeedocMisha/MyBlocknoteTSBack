// roles.controller.ts
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/createRole.dto';
import { GetRoleByValueDto } from './dto/getRoleByValue.dto';
import { Roles } from '../Roles.model';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto): Promise<Roles> {
    return this.rolesService.createRole(createRoleDto);
  }

  @Get()
  async getRole(@Query() getRoleByValueDto: GetRoleByValueDto): Promise<Roles | null> {
    return this.rolesService.getRoles(getRoleByValueDto);
  }

}
