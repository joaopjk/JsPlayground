import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Session,
} from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { CreateUserDto } from './dtos/create-use.dtos';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Post('/signin')
  async signin(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  // @Get('/whoami')
  // async whoami(@Session() session: any) {
  //   return this.userService.findOne(session.userId);
  // }

  @Get('/whoami')
  async whoami(@CurrentUser() user: User) {
    return user;
  }

  @Post('signout')
  async signout(@Session() session: any) {
    session.userId = null;
  }

  //@Serialize(UserDto)
  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.userService.findOne(parseInt(id));
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  @Get()
  async findAllUsers(@Query('email') email: string) {
    return await this.userService.find(email);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(parseInt(id));
  }

  @Patch('/:id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return await this.userService.update(parseInt(id), body);
  }
}
