import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  display = false;

    info(){
      if(!this.display) {
      this.display = true;
      }else{
        this.display=false;
      }
    }

  onHide(){
    
    console.log("this is working");
    
  }
}
