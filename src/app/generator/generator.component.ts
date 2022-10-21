import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class Generator {
  @ViewChild('memCanvas') mycanvas: any;

  preview(e: any) {
    let canvas: any = this.mycanvas.nativeElement;
    let ctx = canvas.getContext('2d');

    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);

    render.onload = function (event) {
      const img = new Image();
      img.src = event.target!.result as string;
      img.width = 700;
      img.height = 700;
      img.onload = function () {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, 700, 700);
      };
    };
  }
}
