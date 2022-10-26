import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PracticeService } from 'src/app/Shared/Services/practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  newform:FormGroup | any;
  constructor(private formBuilder:FormBuilder , private practiceService:PracticeService) { 
    this.formModel();
  }
  btncolor:boolean=false;
  ngOnInit(): void {
  }
  formModel(){
    this.newform=this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  submitform(){
    let formValues= this.newform.value;
    this.practiceService.postdata(formValues).subscribe((responsefrombackend:any| undefined)=>{
      console.log(responsefrombackend);
    })
    // console.log(formValues);
  }
  changebtn(){
    console.log("Button is working")
    this.btncolor=!this.btncolor;
  }
}
