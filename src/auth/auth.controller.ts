import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      const user = await this.authService.register(registerDto);
      return { message: 'User registered successfully', user };
    } catch (error) {
      return { message: 'Registration failed', error };
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const { accessToken } = await this.authService.login(loginDto);
      return { accessToken };
    } catch (error) {
      return { message: 'Login failed', error };
    }
  }

  @Post('profile')
  @UseGuards(JwtAuthGuard)
  getProfile() {
    return { message: 'This route is protected and requires a valid JWT token' };
  }
}
