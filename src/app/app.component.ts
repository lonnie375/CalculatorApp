import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pcalculatorapp';

  clientInput: number = 0; 

  checkValue(){
    if (!this.clientInput <= 0 || !this.clientInput >= 0)
  }
}
