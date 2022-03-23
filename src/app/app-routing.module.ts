import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCitizenComponent } from './create-citizen/create-citizen.component';
import { ValidateCitizenComponent } from './validate-citizen/validate-citizen.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'create-citizen', component: CreateCitizenComponent},
  {path: 'validate-citizen',component:ValidateCitizenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
