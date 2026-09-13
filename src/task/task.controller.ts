import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService, Task } from './task.service';


@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    findAll() {
        return this.taskService.findAll();
    }
    
    @Post('criar') 
    create(@Body() body: any) {
        return  this.taskService.create(body);
    }
}
