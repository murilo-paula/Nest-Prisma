import { Injectable } from '@nestjs/common';

export interface Task {
    name: string;
    id: number;
    title: string;
    done: boolean;
}


@Injectable()
export class TaskService {
    private tasks: Task[] = [
        {id: 1, name: 'murilo', title: 'estudar nestjs', done: false},
        {id: 2, name: 'mateus', title: 'estudar prisma', done: false},
        {id: 3, name: 'daya', title: 'estudar react', done: false},
        {id: 4, name: 'ana', title: 'estudar tailwind', done: true},
    ];

    findAll(): Task[] {
        return this.tasks;
    }

    create(body: any): Task {
        const newTask: Task = {
            name: body.name,
            id: this.tasks.length + 1,
            title: body.title,
            done: false
        }

        this.tasks.push(newTask);
        return newTask;
    }
}
