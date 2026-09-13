import { Injectable } from '@nestjs/common';

export interface Task {
    id: number;
    title: string;
    done: boolean;
}


@Injectable()
export class TaskService {
    private tasks: Task[] = [
        {id: 1, title: 'estudar nestjs', done: false},
        {id: 2, title: 'estudar prisma', done: false},
        {id: 3, title: 'estudar react', done: false},
        {id: 4, title: 'estudar tailwind', done: true},
    ];

    findAll(): Task[] {
        return this.tasks;
    }

    create(title: string): Task {
        const newTask: Task = {
            id: this.tasks.length + 1,
            title,
            done: false,
        }

        this.tasks.push(newTask);
        return newTask;
    }
}
