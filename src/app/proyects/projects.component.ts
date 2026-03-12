import { Component, OnDestroy, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Tech {
  label: string;
  cssClass: string;
}

interface Project {
  icon: string;
  type: string;
  name: string;
  url: string;
  description: string;
  techs: Tech[];
  image?: string;
  images?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnDestroy {
  selectedProject: Project | null = null;
  currentIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

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
    image: 'assets/images/sempreg/sempreg_light.png',
    images: [
      'assets/images/sempreg/sempreg_light.png',
      'assets/images/sempreg/sempreg_black.png',
      'assets/images/sempreg/sempreg_herramientas.png',
    ],
  },
  {
    icon: '📊',
    type: 'Web app',
    name: 'Suite Sempreg',
    url: 'https://suite.sempreg.com',
    description: 'Plataforma de gestión empresarial multi-compañía con módulos de importación de información, administración, reportes financieros, conciliaciones bancarias, entre otros.',
    techs: [
      { label: 'Next.js', cssClass: 'badge--next' },
      { label: 'React', cssClass: 'badge--react' },
      { label: 'Material UI', cssClass: 'badge--mui' },
      { label: 'Chart.js', cssClass: 'badge--tw' },
      { label: 'Python', cssClass: 'badge--python' },
      { label: 'MySQL', cssClass: 'badge--mysql' },
      { label: 'Excel / VBA', cssClass: 'badge--excel' },
      { label: 'jsPDF', cssClass: 'badge--typescript' },
    ],
    image: 'assets/images/suite/suite-1.png',
    images: [
      'assets/images/suite/suite-1.png',
      'assets/images/suite/suite-2.png',
      'assets/images/suite/suite_resumen.png',
      'assets/images/suite/suite_informes.png',
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
    images: [],
  },
  {
    icon: '👤',
    type: 'Portafolio',
    name: 'Portafolio personal',
    url: '',
    description: 'Portafolio profesional que presenta habilidades, experiencia y proyectos como desarrollador.',
    techs: [
      { label: 'Angular', cssClass: 'badge--angular' },
      { label: 'TypeScript', cssClass: 'badge--typescript' },
    ],
    image: 'assets/images/portafolio/portafolio.png',
    images: [
      'assets/images/portafolio/portafolio.png',
    ],
  },
  {
    icon: '📈',
    type: 'Dashboard',
    name: 'Programador de Tareas',
    url: 'https://github.com/cdnavarroa/Programador-Tareas.git',
    description: 'Dashboard de gestión de tareas con visualización de datos.',
    techs: [
      { label: 'React', cssClass: 'badge--react' },
      { label: 'Next.js', cssClass: 'badge--next' },
      { label: 'NestJS', cssClass: 'badge--express' },
      { label: 'MySQL', cssClass: 'badge--mysql' },
      { label: 'TypeScript', cssClass: 'badge--typescript' },
    ],
    image: 'assets/images/prog_tareas/dashboard.png',
    images: [
      'assets/images/prog_tareas/dashboard.png',
    ],
  },
];

  get hasImages(): boolean {
    return !!this.selectedProject?.images?.length;
  }

  projectHasImages(project: Project): boolean {
    return !!project.images?.length;
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    this.currentIndex = 0;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.selectedProject = null;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  prev(): void {
    if (!this.selectedProject?.images?.length) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.selectedProject.images.length) %
      this.selectedProject.images.length;
  }

  next(): void {
    if (!this.selectedProject?.images?.length) return;
    this.currentIndex =
      (this.currentIndex + 1) % this.selectedProject.images.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}