/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaRepository } from './repositories/prisma/prisma-repository';
import { MemberRepository } from './repositories/team-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, {
    provide: MemberRepository,
    useClass: PrismaRepository,
  },
  ],
})
export class AppModule { }
