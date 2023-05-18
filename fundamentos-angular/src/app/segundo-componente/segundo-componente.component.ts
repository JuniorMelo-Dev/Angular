import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Junior Melo";
  dtNascimento = "1990-01-11";
  urlImagem = "/assets/junior.jpg";

  mostrarDataNascimento() {
    alert(`A Data de Nascimento do Junior Melo é: ${this.dtNascimento}`)
  }
}
