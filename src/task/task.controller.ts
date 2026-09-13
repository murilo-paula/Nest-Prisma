import { Controller, Get, Post } from '@nestjs/common';
import { TaskService, Task } from './task.service';


@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    findAll() {
        return this.taskService.findAll();
    }
    
    @Post('pega') 
    create() {
        return  this.taskService.create();
    }
}
