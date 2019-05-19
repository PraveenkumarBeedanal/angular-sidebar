import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {FirstPageComponent} from './firstPage/first-page.component';
import {SecondPageComponent} from './firstPage/secondPage/second-page.component';

import { HelloComponent } from './hello.component';
import {SidebarModule} from 'primeng/sidebar';

const appRoutes: Routes = [
  { path: 'firstPage', component: FirstPageComponent },
  { path: 'secondPage', component: SecondPageComponent },

];

@NgModule({
  imports:      [ RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule, FormsModule, SidebarModule ],
  declarations: [ AppComponent, HelloComponent, 
  FirstPageComponent, SecondPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
