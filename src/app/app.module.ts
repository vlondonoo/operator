import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCitizenComponent } from './create-citizen/create-citizen.component';
import { ValidateCitizenComponent } from './validate-citizen/validate-citizen.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCitizenComponent,
    ValidateCitizenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
