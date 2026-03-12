import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  items: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      period: 'Julio 2021 — Diciembre 2025',
      title: 'Coordinador de Sistemas',
      company: 'Sempreg Technology SAS',
      items: [
        'Diseño y desarrollo de macros avanzadas en Excel para automatizar tareas repetitivas, aumentando la eficiencia operativa',
        'Planificación y desarrollo de plataforma web para elaboración de informes contables (estados financieros, presupuestos, centros de costos)',
        'Supervisión completa del ciclo de vida de la aplicación: desarrollo, depuración e implementación de nuevas funcionalidades',
        'Gestión y coordinación de equipo de desarrollo para integrar características según necesidades de usuarios finales',
        'Despliegue en servidores y pruebas exhaustivas con usuarios reales para garantizar usabilidad',
        'Creación de microservicios en Python para resolver problemas puntuales y mejorar rendimiento',
        'Apoyo contable en Siigo y Alegra, conciliaciones bancarias y elaboración de estados financieros',
      ],
    },
    {
      period: 'Marzo 2019 — Septiembre 2019',
      title: 'Aprendiz SENA',
      company: 'Eternit Colombiana SA',
      items: [
        'Radicación, registro y arqueo de facturas',
        'Elaboración de lotes de pago',
        'Reorganización del sistema de archivo de facturas pagadas y pendientes',
      ],
    },
  ];
}
