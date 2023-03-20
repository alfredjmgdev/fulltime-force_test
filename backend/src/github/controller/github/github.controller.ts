import { Controller, Get, Post } from '@nestjs/common';
import { GithubService } from 'src/github/service/github/github.service';

@Controller('github')
export class GithubController {
    constructor(private githubService: GithubService){}

    @Get()
    async findAll(): Promise<object> {
        return this.githubService.myCommits();
    }

}
