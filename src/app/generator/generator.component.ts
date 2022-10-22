import { Component, ViewChild } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class Generator {
  @ViewChild('memCanvas') mycanvas: any;
  topText: string = '';
  bottomText: string = '';
  textColor:string="#000000";
  bgColor:string="#ffffff";

fileEvent:any;

  drawTopText() {
    console.log(this.topText);
    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let ctx = canvas.getContext('2d');
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    ctx!.fillStyle=this.bgColor;
    ctx?.fillRect(0,0,canvas.width,canvas.height);

    ctx!.fillStyle = this.textColor;
    ctx!.font = '50px Comic Sans Ms';
    ctx!.textAlign = 'center';
    ctx?.fillText(this.topText, canvas.width / 2, 100);
    ctx?.fillText(this.bottomText, canvas.width / 2, canvas.height-200);

    this.preview(this.fileEvent);
  }

  preview(e: any) {
    this.fileEvent=e;
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
        ctx.drawImage(img, 0, 120, 700, 400);
      };
    };
  }

  handleChangeText(e:ColorEvent){
    this.textColor=e.color.hex;
    this.drawTopText();
  }

  handlebgColor(e:ColorEvent){
    this.bgColor=e.color.hex;
    this.drawTopText();
  }

  downloadImage(){
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let image = canvas.toDataURL("image/png");
    let element = document.createElement("a");
    element.download="image.png";
    element.href=image;
    element.click();
  }

}
