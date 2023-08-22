/* eslint-disable prettier/prettier */
import { Member } from "src/dto/member-dto";

/* eslint-disable prettier/prettier */
export abstract class MemberRepository {
    abstract create(name: string, memberFunction: string): Promise<void>
    abstract get(): Promise<Member[]>
    abstract getById(id: string): Promise<Member>
    abstract update(id: string, name: string, memberFunction: string): Promise<Member>
    abstract delete(id: string): Promise<Member>

}
