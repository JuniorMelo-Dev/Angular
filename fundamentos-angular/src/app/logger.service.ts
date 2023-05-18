import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  msgs: string[] = [];

  logar(msg: string) {
    console.log(msg)
    this.msgs.push(msg);
  }
  exibirTodosLogs() {
    console.log(this.msgs);
  }
}
