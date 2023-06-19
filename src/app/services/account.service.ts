import { Injectable } from '@angular/core';
import { Account } from './model/account.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(private http: HttpClient) {

   }
   getTopPosts(){
    const endpoint = 'https://hacker-news.firebaseio.com/v0/topstories.json';

    return this.http.get(endpoint);
   }
   getPost(postId: string) {
    const endpoint = 'https://hacker-news.firebaseio.com/v0/item';

    return this.http.get(`${endpoint}/${postId}.json`);
  }
}
