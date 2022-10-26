import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private HttpClient:HttpClient) { }

  postMyDataToBackend(payLoad:any){
    return this.HttpClient.post('http://localhost:6767/TestManagement/postTestingData',payLoad)
  }

  getMyDataFromBackEnd(){
    return this.HttpClient.get('http://localhost:6767/TestManagement/getTestingData')
  }

  deleteMyDataFromBackEnd(){
    return
  }

  updateMyDataFromBackEnd(){
    return
  }

}
