import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import console from 'console';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument,User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel:Model<UserDocument>
    ){}

  async create(createUserDto: CreateUserDto):Promise<User> {
    return await this.userModel.create(createUserDto)
  }

  async findAll():Promise<User[]> {
    return await this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
