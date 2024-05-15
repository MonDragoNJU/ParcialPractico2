import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {

  @Input() pacienteDetail!: Paciente;
  constructor() { }

  ngOnInit() {
  }

}
