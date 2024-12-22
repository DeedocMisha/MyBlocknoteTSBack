// roles.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from '../Roles.model';
import { GetRoleByValueDto } from './dto/getRoleByValue.dto';
import { CreateRoleDto } from "./dto/createRole.dto";

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles)
    private readonly roleRepository: typeof Roles,
  ) {}

  async getRoles(getRoleByValueDto: GetRoleByValueDto): Promise<Roles | null> {
    if (!getRoleByValueDto.value) {
      throw new Error('Role value must be provided');
    }

    const role = await this.roleRepository.findOne({
      where: { value: getRoleByValueDto.value },
    });
    return role;
  }


  async createRole(createRoleDto: CreateRoleDto): Promise<Roles> {
    if (!createRoleDto.role) {
      throw new Error('Role cannot be null or undefined');
    }

    return this.roleRepository.create(createRoleDto);
  }

}

