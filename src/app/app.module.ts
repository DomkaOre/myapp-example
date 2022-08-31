import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { TopbarComponent } from './topbar/topbar.component';



// [...]

@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule,
  ],

  declarations: [
    AppComponent,
    TopbarComponent,
      // [...]
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }