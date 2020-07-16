import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(private http: HttpClient) {  }

  get(uri:string) {
    return this.http.get(`${baseUrl}/${uri}`);
  }

  post(uri:string, payload: Object){
    return this.http.post(`${baseUrl}/${uri}`, payload);
  }

  patch(uri:string, payload: Object){
   return this.http.patch(`${baseUrl}/${uri}`, payload);
 }

 delete(uri){
   return this.http.delete(`${baseUrl}/${uri}`);
 }


}
