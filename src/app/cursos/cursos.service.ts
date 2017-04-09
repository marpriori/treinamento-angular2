import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  ListarCursos(){
    return ['Java', 'SqLite', 'Angular'];
  }

}
