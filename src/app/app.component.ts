import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  imgParent = '';

  onLoaded(img: string) {
    console.log('log padre', img);
    
  }
}
