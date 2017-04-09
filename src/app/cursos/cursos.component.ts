import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  Titulo: string;
  Cursos: string[];
  constructor(private cursosService: CursosService) {
    this.Titulo = 'Teste de Angular.';
    this.Cursos = cursosService.ListarCursos();
  }

  ngOnInit() {
  }

}
