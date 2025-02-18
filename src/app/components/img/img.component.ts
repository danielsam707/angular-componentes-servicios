import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: false,
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent {

  @Input() img: string = 'valir init';
}
