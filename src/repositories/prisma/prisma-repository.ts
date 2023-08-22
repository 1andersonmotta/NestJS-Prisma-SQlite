/* eslint-disable prettier/prettier */
import { randomUUID } from "node:crypto";
import { MemberRepository } from "../team-members-repository";
import { PrismaService } from "src/database/prisma.service";
import { Injectable } from "@nestjs/common";
import { Member } from "src/dto/member-dto";

/* eslint-disable prettier/prettier */
@Injectable()
export class PrismaRepository implements MemberRepository {
    constructor(private prisma: PrismaService) { };

    async create(name: string, memberFunction: string): Promise<void> {
        await this.prisma.teamMember.create({
            data: {
                id: randomUUID(),
                name,
                function: memberFunction,
            },
        })
    }

    async get(): Promise<Member[]> {
        const members = await this.prisma.teamMember.findMany();
        return members;
    }

    async getById(id: string): Promise<Member> {
        const member = await this.prisma.teamMember.findUnique({ where: { id } });
        return member;
    }

    async update(id: string, name: string, memberFunction: string): Promise<Member> {
        const member = await this.prisma.teamMember.update({
            where: { id },
            data: {
                id,
                name,
                function: memberFunction,
            },
        })
        return member
    }

    async delete(id: string): Promise<Member> {
        const member = await this.prisma.teamMember.delete({ where: { id } });
        return member;
    }

}