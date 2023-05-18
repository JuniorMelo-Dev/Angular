import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: "Celular LG", descricao: "Um celular da LG", esgotado: false },
    { id: 2, nome: "Celular Samsung", esgotado: false },
    { id: 3, nome: "Celular Motorola", descricao: "Um celular da Motorola", esgotado: false },
    { id: 4, nome: "Celular Apple", descricao: "Um celular da Apple", esgotado: true }
  ]
}
