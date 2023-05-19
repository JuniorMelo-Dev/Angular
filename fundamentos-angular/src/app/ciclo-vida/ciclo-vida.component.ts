import { Component } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent {
  
  horario = new Date();
  timer: any = null!;

  ngOnInit(): void {
    console.log("O evento OnInit disparou");
    this.timer = setInterval(() => this.horario = new Date(), 1000);
  }
}
