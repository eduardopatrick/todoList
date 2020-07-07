import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private req: WebRequestService ) {  }


  createList(title: string) {
    this.req.post('/list', { title });
  }
}
