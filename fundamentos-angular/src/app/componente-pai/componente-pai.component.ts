import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {
  sobrenome = "Paiva de Melo"

  mostrarNomeCompleto(nomeCompleto: any) {
    alert(`O nome Completo é: ${nomeCompleto}`);
  }
}
