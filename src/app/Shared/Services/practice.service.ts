import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private HttpClient:HttpClient) { }
  
  postdata(payload:any){
    return this.HttpClient.post('http://localhost:9090/PracticeManagement/postdata',payload);
  }
}


