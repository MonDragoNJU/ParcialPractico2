import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteListComponent } from './paciente-list/paciente-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PacienteListComponent],
  declarations: [PacienteListComponent]
})
export class PacienteModule { }
