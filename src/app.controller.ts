/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MemberRepository } from './repositories/team-members-repository';
import { Member } from './dto/member-dto';


@Controller('app')
export class AppController {
  constructor(private memberRepository: MemberRepository) { };


  @Post('create')
  async create(@Body() body: Member) {
    try {
      const { name, function: memberFunction } = body
      const member = await this.memberRepository.create(name, memberFunction);
      return { member };
    } catch (error) {
      return { error };
    }
  }

  @Get()
  async get() {
    try {
      const members = await this.memberRepository.get();
      return { members };
    } catch (error) {
      return { error };
    }
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    try {
      const member = await this.memberRepository.getById(id);
      return { member };
    } catch (error) {
      return { error };
    }
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() body: Member) {
    try {
      const member = await this.memberRepository.update(id, body.name, body.function)
      return { member }
    } catch (error) {
      return { error };
    }
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    try {
      const member = await this.memberRepository.delete(id);
      return `Deletado com Sucesso!: ${member.name}`;
    } catch (error) {
      return { error };
    }
  }

}
