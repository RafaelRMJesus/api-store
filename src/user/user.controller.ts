import { Body, Controller, Get, Post} from "@nestjs/common";
import { UserRepository } from "./user.repositoty";

@Controller('/users')
export class UserController {

  constructor(private userRepository: UserRepository) {

  }

  @Post()
  async createUser(@Body() userData) {
    this.userRepository.saveUsers(userData)
    return userData
  }

  @Get()
  async listUsers() {
    return this.userRepository.listUsers()
  }
}