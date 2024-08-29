import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: parseInt(process.env.DB_PORT, 10),
      username: "postgres",
      // password: process.env.DB_PASSWORD,
      password: "1234",
      database: "crypto",
      entities: [User],
      synchronize: true, // Set to false in production
      logging: true, // Optional: Enable logging for debugging
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
