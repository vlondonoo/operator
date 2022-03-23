import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CitizenService } from '../citizen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-citizen',
  templateUrl: './validate-citizen.component.html',
  styleUrls: ['./validate-citizen.component.css']
})
export class ValidateCitizenComponent implements OnInit, OnDestroy {
  validate: Subscription = new Subscription();
  profileForm = this.fb.group({
    id: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private citizenService:CitizenService, private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    console.log('resposne++++',this.profileForm.value)
     let response = this.profileForm.value
    this.validate = this.citizenService.validateCitizen(response.id).subscribe((response: any) => {console.log('response',response)}) 
  } 
  home(){
    this.router.navigate(['/'])
  }

  ngOnDestroy(){
    this.validate.unsubscribe()
      }
}
