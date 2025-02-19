import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: false,
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent {

  @Input() img: string = 'valir init';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '/images/dd.jpg'

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}
