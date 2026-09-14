import { Injectable } from '@nestjs/common';

export interface Task {
    name: string;
    id: number;
    password: string;
    title: string;
    done: boolean;
    active: boolean;
}


@Injectable()
export class TaskService {
    private tasks: Task[] = [
        {id: 1, name: 'murilo', password: '3282382849', title: 'estudar nestjs', done: false, active: true},
        {id: 2, name: 'maria', password: '34534537474', title: 'estudar prisma', done: false, active: true},
        {id: 3, name: 'joão', password: '63623625245', title: 'estudar react', done: false, active: true},
        {id: 4, name: 'mateus', password: '1234', title: 'estudar tailwind', done: true, active: true},
    ];

    findOne(id: string) {
        return this.tasks.find(task => task.id === Number(id));
    }

    findAll() {
        const newTasks = this.tasks.map(i => i.active === false ? null : i);
        return newTasks;
    }

    create(body: any): Task {

        const newTask: Task = {
            name: body.name,
            id: this.tasks.length + 1,
            title: body.title,
            password: body.password,
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
