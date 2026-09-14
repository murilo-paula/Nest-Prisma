import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService, Task } from './task.service';


@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskService.findOne(id);
    }

    @Get('all')
    findAll() {
        return this.taskService.findAll();
    }
    
    @Post('create') 
    create(@Body() body: any) {
        return  this.taskService.create(body);
    }
}
