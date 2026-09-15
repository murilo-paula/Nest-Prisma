import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { createTaskDto } from './dtos/create-task.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) { }

    findOne(id: number) {
        return this.prisma.dbtasks.findUnique({ where: { id } })
    }

    // findAll() {
    //     const newTasks = this.tasks.map(i => i.active === false ? null : i);
    //     return newTasks;
    // }

    async create(body: createTaskDto) {

        const hastpassword = await bcrypt.hash(body.password, 10)

        const newTask = this.prisma.dbtasks.create({ data: {...body, password: hastpassword} })

        return newTask;
    }

    // delete(id: string) {
    //     const newTask = this.tasks.map(i => i.id === Number(id) ? { ...i, active: false } : i);
    //     const deletedTask = newTask.find(task => task.id === Number(id));

    //     this.tasks = newTask;
    //     return deletedTask
    // }
}
