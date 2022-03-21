import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

import { CitizenService } from '../citizen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-citizen',
  templateUrl: './create-citizen.component.html',
  styleUrls: ['./create-citizen.component.css']
})
export class CreateCitizenComponent implements OnInit,OnDestroy {
  valores: Subscription = new Subscription();
  profileForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    address:['', Validators.required],
    email: ['', Validators.required],
    operatorId: ['', Validators.required],
    operatorName:['', Validators.required]

  });
  
  constructor(private fb: FormBuilder, private citizenService: CitizenService) { }

  ngOnInit(): void {
  }
  submit(){
    console.log('resposne++++',this.profileForm.value)
     let response = this.profileForm.value
     this.citizenService.createCitizen(response).subscribe((response: any) => {console.log('response',response)})

  
    
  } 
  ngOnDestroy(){
    this.valores.unsubscribe()
      }

}
