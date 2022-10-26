import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TestingService } from 'src/app/Shared/Services/testing.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  showData:string='';
  myForm:FormGroup | any;
  constructor(private formBuilder:FormBuilder, private testingService:TestingService) { 
    this.myFormModel();
  }

  ngOnInit(): void {
  }

  myFormModel(){
    this.myForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  getPostData(){
    this.testingService.getMyDataFromBackEnd().subscribe((responseFromBackEnd:any) => {
      this.showData=responseFromBackEnd.Result;
    })
  }
  SubmitMyForm(){
    let formValues =  this.myForm.value;
    this.testingService.postMyDataToBackend(formValues).subscribe((responseFromBackEnd:any) => {
      responseFromBackEnd;
    })
  }
}
