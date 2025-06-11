import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {
  // Simple message to display in template
  message: string = 'Componente de prueba';
}
