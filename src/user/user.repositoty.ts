import { Injectable } from "@nestjs/common"

@Injectable()
export class UserRepository {
  private users = []

  async saveUsers(user) {
    this.users.push(user)
    console.log(this.users)
  }

  async listUsers() {
    return this.users
  }
}