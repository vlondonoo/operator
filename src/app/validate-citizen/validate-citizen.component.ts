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
  response:string | undefined;
  profileForm = this.fb.group({
    id: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private citizenService:CitizenService, private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
     let formValue = this.profileForm.value
    this.validate = this.citizenService.validateCitizen(formValue.id).subscribe((res: any) => {console.log('response',res)
    this.response = res.data}) 
  } 
  home(){
    this.router.navigate(['/'])
  }

  ngOnDestroy(){
    this.validate.unsubscribe()
      }
}
