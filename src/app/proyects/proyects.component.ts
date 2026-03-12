import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  icon: string;
  type: string;
  name: string;
  url: string;
  description: string;
  techs: Tech[];
  image?: string;
}

interface Tech {
  label: string;
  cssClass: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      icon: '🌐',
      type: 'Landing page',
      name: 'Sempreg',
      url: 'https://sempreg.com',
      description: 'Sitio público de Sempreg Technology. Presenta servicios de contabilidad y asesoría financiera para empresas colombianas.',
      techs: [
        { label: 'Next.js', cssClass: 'badge--next' },
        { label: 'React', cssClass: 'badge--react' },
        { label: 'Tailwind', cssClass: 'badge--tw' },
      ],
    },
    {
      icon: '📊',
      type: 'Web app',
      name: 'Suite Sempreg',
      url: 'https://suite.sempreg.com',
      description: 'Plataforma de gestión empresarial multi-compañía con módulos de importacion de informacion, administración, reportes financieros, conciliaciónes bancarias, entre otros.',
      techs: [
        { label: 'Next.js', cssClass: 'badge--next' },
        { label: 'React', cssClass: 'badge--react' },
        { label: 'Material UI', cssClass: 'badge--mui' },
        { label: 'Chart.js', cssClass: 'badge--tw' },
        { label: 'Python', cssClass: 'badge--python' },
        { label: 'MySQL', cssClass: 'badge--mysql' },
        { label: 'Excel / VBA', cssClass: 'badge--excel' },
        { label: 'jsPDF', cssClass: 'badge--typescript' }
      ],
    },
    {
      icon: '⚙️',
      type: 'Backend',
      name: 'API Sempreg',
      url: 'https://suite.sempreg.com',
      description: 'API REST que alimenta Suite Sempreg. Gestión de autenticación, manejo de datos empresariales, generación de reportes financieros, entre otros.',
      techs: [
        { label: 'Node.js', cssClass: 'badge--node' },
        { label: 'Express', cssClass: 'badge--express' },
      ],
    },
    {
      icon: '👤',
      type: 'Portafolio',
      name: 'Portafolio personal',
      url: '',
      description: 'Portafolio profesional que presenta mis habilidades, experiencia y proyectos como desarrollador.',
      techs: [
        { label: 'Angular', cssClass: 'badge--angular' },
        { label: 'TypeScript', cssClass: 'badge--typescript' },
      ],
    },
    {
        icon: '📈',
        type: 'Dashboard',
        name: 'Programador de Tareas',
        url: 'https://github.com/cdnavarroa/Programador-Tareas.git',
        description: 'Dashboard de gestión de tareas con visualización de datos',
        techs: [
            { label: 'React', cssClass: 'badge--react' },
            { label: 'Next.js', cssClass: 'badge--next' },
            { label: 'NestJS', cssClass: 'badge--express' },
            { label: 'MySQL', cssClass: 'badge--mysql' },
            { label: 'TypeScript', cssClass: 'badge--typescript' },
        ],
    }
  ];
}