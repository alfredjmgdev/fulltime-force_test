import { Module } from '@nestjs/common';
import { GithubController } from './controller/github/github.controller';
import { GithubService } from './service/github/github.service';

@Module({
  controllers: [GithubController],
  providers: [GithubService],
})
export class GithubModule {}
