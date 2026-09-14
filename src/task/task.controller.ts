import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService, Task } from './task.service';


@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}


    @Get('all')
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskService.findOne(id);
    }

    
    @Post() 
    async create(@Body() body: any) {
        return await this.taskService.create(body);
    }

    @Delete(':idDeletar')
    delete(@Param('idDeletar') id: string) {
        return this.taskService.delete(id)
    }
}
