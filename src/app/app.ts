import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CapitalizePipe} from './pipes/capitalize-pipe';
import {AgePipe} from './pipes/age-pipe';
import {ShortNamePipe} from './pipes/short-name-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CapitalizePipe, AgePipe, ShortNamePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ must be "styleUrls" (array)
})

export class App {
  title: string = 'angular-practices';
  name: string = 'FroyLAn daniEl aguilar floRes';
  birthDate: string = '11071985';  // DDMMYYYY

  year: number = 2025;                 // ✔️ Clear
  isVisible: boolean = true;           // ✔️ Clear

  //we can include variable as a functions, but no inside the class
  hello(): void {
    let x: number = 10;
    const y = 20;
    var z: number = 30;
    console.log(x, y, z);
  }

  helloV2(): string {
    return `Hello ${this.name}, your title is ${this.title}`;
  }

}
