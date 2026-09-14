import { Injectable } from '@nestjs/common';

export interface Task {
    name: string;
    id: number;
    title: string;
    done: boolean;
    active: boolean;
}


@Injectable()
export class TaskService {
    private tasks: Task[] = [
        {id: 1, name: 'murilo', title: 'estudar nestjs', done: false, active: true},
        {id: 2, name: 'maria', title: 'estudar prisma', done: false, active: false},
        {id: 3, name: 'joão', title: 'estudar react', done: false, active: true},
        {id: 4, name: 'mateus', title: 'estudar tailwind', done: true, active: true},
    ];

    findOne(id: string) {
        return this.tasks.find(task => task.id === Number(id));
    }

    findAll() {
        const newTasks = this.tasks.map(i => i.active === true ? null : i);
        return newTasks;
    }

    create(body: any): Task {
        const newTask: Task = {
            name: body.name,
            id: this.tasks.length + 1,
            title: body.title,
            done: false,
            active: true
        }

        this.tasks.push(newTask);
        return newTask;
    }

    delete(id: string) {
        const newTask = this.tasks.map(i => i.id === Number(id)? {...i, active: false} : i);
        const deletedTask = newTask.find(task => task.id === Number(id));

        this.tasks = newTask;
        return deletedTask
    }
}
