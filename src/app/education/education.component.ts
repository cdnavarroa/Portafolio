import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface EducationItem {
  year: string;
  status: string;
  degree: string;
  institution: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  education: EducationItem[] = [
    {
      year: '2022',
      status: '● En curso',
      degree: 'Ingeniería en Sistemas',
      institution: 'Universidad Nacional Abierta y a Distancia — UNAD, Bogotá',
    },
    {
      year: '2019',
      status: '✓ Graduado',
      degree: 'Técnico en Contabilización de Operaciones Comerciales y Financieras',
      institution: 'Servicio Nacional de Aprendizaje — SENA, Bogotá',
    },
  ];
}
