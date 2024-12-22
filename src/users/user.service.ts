import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RolesService } from '../roles/roles.service';
import { CreateUserDto } from './dto/createUser.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from '../Users.model';
import { BanUserDto } from './dto/banUser.dto';
import { AddRoleDto } from './dto/addRole.dto';
import { GetRoleByValueDto } from '../roles/dto/getRoleByValue.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users)
    private userRepository: typeof Users,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    try {
      // Create a new user
      const user = await this.userRepository.create(dto);

      // Fetch the 'admin' role
      const getRoleByValueDto: GetRoleByValueDto = { value: 'admin' };
      const role = await this.roleService.getRoles(getRoleByValueDto);

      if (!role) {
        throw new HttpException('Role not found', HttpStatus.NOT_FOUND);
      }

      // Associate the user with the role using Sequelize method
      await user.$set('roles', [role.id]);
      user.roles = [role]; // Update the user object with the new role

      return user;
    } catch (error) {
      throw new HttpException(
        `Error creating user: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllUsers() {
    // Retrieve all users and include their associated roles
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async addRole(dto: AddRoleDto) {
    // Find the user by primary key
    const user = await this.userRepository.findByPk(dto.userId);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    // Fetch the specified role
    const getRoleByValueDto: GetRoleByValueDto = { value: dto.value };
    const role = await this.roleService.getRoles(getRoleByValueDto);

    if (role) {
      // Add the role to the user
      await user.$add('roles', role.id);
      return { message: 'Role added to user successfully' }; // Return a success message
    }

    throw new HttpException('Role not found', HttpStatus.NOT_FOUND);
  }

  async ban(dto: BanUserDto) {
    // Find the user by primary key
    const user = await this.userRepository.findByPk(dto.userId);

    if (!user) {
      throw new HttpException(
        `User with ID ${dto.userId} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    // Update user's banned status and reason
    user.banned = true;
    user.banReason = dto.banReason;

    // Save the updated user
    await user.save();

    return { message: 'User banned successfully', user }; // Return a success message with the user object
  }
}
