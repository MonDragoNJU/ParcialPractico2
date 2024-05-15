import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  selectedPaciente!: Paciente;
  selected = false;
  pacientes: Array<Paciente> = [];
  minors: number = 0;

  constructor(private pacienteService: PacienteService) { }

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe((pacientes) => {
      this.pacientes = pacientes;
      this.getMinors();
    })
  }

  getMinors(): void {
    for (let paciente of this.pacientes){
      if (paciente.edad < 18){
        this.minors += 1
      }
    }
  }

  onSelected(paciente: Paciente): void {
    this.selected = true;
    this.selectedPaciente = paciente;
  }

  ngOnInit() {
    this.getPacientes();
  }

}
