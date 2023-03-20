import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {


  async myCommits(): Promise<object> {
    const githubUrl = `https://api.github.com/repos/${process.env.GITHUB_USER}/${process.env.GITHUB_PROJECT}/commits`
    try {
      const { data } = await axios({
        url: githubUrl,
        method: 'get',
        headers: {
          Authorization: `${process.env.GITHUB_ACCESS_TOKEN}`
        }
      });
      let commits = [];
      for (const key in data) {
        commits.push({
          username: data[key].commit.author.name,
          email: data[key].commit.author.email,
          message: data[key].commit.message,
          date: new Date(data[key].commit.author.date).toLocaleDateString('en-US')
        })
      }
      return commits;
    } catch (error) {
      console.error(error)
    }
  }
}