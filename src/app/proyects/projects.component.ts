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
  direction: 'next' | 'prev' = 'next';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

projects: Project[] = [
  {
    icon: '💼',
    type: 'SaaS',
    name: 'FinReport',
    url: 'https://finreport.com.co',
    description: 'Suite financiera propia para asesores y empresas en Colombia. Gestión multi-empresa, importación de balances y libros diarios (Siigo, World Office, SIMI, Nuwwe), calendario tributario, conciliaciones y generación de informes financieros (estados financieros, presupuesto, centros de costos) en PDF y Excel con editor de notas.',
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
    image: 'assets/images/finreport/finreport-login.webp',
    images: [
      'assets/images/finreport/finreport-login.webp',
      'assets/images/finreport/finreport-dashboard.webp',
      'assets/images/finreport/finreport-importar-datos.webp',
      'assets/images/finreport/finreport-importar-tipo-dato.webp',
      'assets/images/finreport/finreport-movimientos.webp',
      'assets/images/finreport/finreport-consulta-movimientos.webp',
      'assets/images/finreport/finreport-resumen-financiero.webp',
      'assets/images/finreport/finreport-estados-financieros.webp',
      'assets/images/finreport/finreport-informes.webp',
      'assets/images/finreport/finreport-generar-pdf.webp',
      'assets/images/finreport/finreport-editor-notas.webp',
      'assets/images/finreport/finreport-calendario-tributario.webp',
      'assets/images/finreport/finreport-vencimientos.webp',
    ],
  },
  {
    icon: '🏡',
    type: 'Rediseño web',
    name: 'Sansilvestre Group Inmobiliaria',
    url: 'https://sansilvestregroupinm.com',
    description: 'Rediseño completo del sitio web de una inmobiliaria del Valle del Cauca. Buscador de inmuebles en tiempo real conectado al inventario de Simi (filtros por gestión, tipo, ciudad y barrio), fichas de detalle con galería, video y mapa, inmuebles similares, simuladores, pagos PSE y contacto por WhatsApp.',
    techs: [
      { label: 'HTML', cssClass: 'badge--html' },
      { label: 'CSS', cssClass: 'badge--css' },
      { label: 'JavaScript', cssClass: 'badge--js' },
      { label: 'PHP', cssClass: 'badge--php' },
      { label: 'Leaflet', cssClass: 'badge--typescript' },
    ],
    image: 'assets/images/sansilvestre/sansilvestre-inicio.webp',
    images: [
      'assets/images/sansilvestre/sansilvestre-inicio.webp',
      'assets/images/sansilvestre/sansilvestre-inmuebles.webp',
      'assets/images/sansilvestre/sansilvestre-servicios.webp',
      'assets/images/sansilvestre/sansilvestre-detalle.webp',
      'assets/images/sansilvestre/sansilvestre-similares.webp',
    ],
  },
  {
    icon: '🏠',
    type: 'Landing page',
    name: 'Áreas y Espacios Inmobiliarios',
    url: 'https://areasyespacios.com',
    description: 'Rediseño completo del sitio web de una inmobiliaria en Bogotá. Landing page responsive con secciones de servicios, avalúo en línea, consignación de inmuebles y formulario de contacto, con animaciones al hacer scroll, menú móvil y botón de WhatsApp.',
    techs: [
      { label: 'HTML', cssClass: 'badge--html' },
      { label: 'CSS', cssClass: 'badge--css' },
      { label: 'JavaScript', cssClass: 'badge--js' },
      { label: 'PHP', cssClass: 'badge--php' },
    ],
    image: 'assets/images/areasyespacios/areasyespacios-inicio.webp',
    images: [
      'assets/images/areasyespacios/areasyespacios-inicio.webp',
      'assets/images/areasyespacios/areasyespacios-nosotros.webp',
      'assets/images/areasyespacios/areasyespacios-consigna.webp',
    ],
  },
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
    image: 'assets/images/sempreg/sempreg_light.webp',
    images: [
      'assets/images/sempreg/sempreg_light.webp',
      'assets/images/sempreg/sempreg_black.webp',
      'assets/images/sempreg/sempreg_herramientas.webp',
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
    image: 'assets/images/suite/suite-1.webp',
    images: [
      'assets/images/suite/suite-1.webp',
      'assets/images/suite/suite-2.webp',
      'assets/images/suite/suite_resumen.webp',
      'assets/images/suite/suite_informes.webp',
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
    image: 'assets/images/portafolio/portafolio.webp',
    images: [
      'assets/images/portafolio/portafolio.webp',
    ],
  },
  {
    icon: '📈',
    type: 'Dashboard',
    name: 'Programador de Tareas',
    url: 'https://github.com/cdnavarroa/Programador-Tareas',
    description: 'Dashboard de gestión de tareas con visualización de datos.',
    techs: [
      { label: 'React', cssClass: 'badge--react' },
      { label: 'Next.js', cssClass: 'badge--next' },
      { label: 'NestJS', cssClass: 'badge--express' },
      { label: 'MySQL', cssClass: 'badge--mysql' },
      { label: 'TypeScript', cssClass: 'badge--typescript' },
    ],
    image: 'assets/images/prog_tareas/dashboard.webp',
    images: [
      'assets/images/prog_tareas/dashboard.webp',
    ],
  },
  {
    icon: '📄',
    type: 'Tool',
    name: 'Procesador PDF',
    url: 'https://github.com/cdnavarroa/pdf_processor',
    description: 'Herramienta para procesar y manipular archivos PDF. Extrae texto y renombra archivos según su contenido basandose en reglas definidas para presentacion de requerimientos de secretaria de hacienda.',
    techs: [
      { label: 'Python', cssClass: 'badge--python' },
      { label: 'Tesseract', cssClass: 'badge--tesseract' },
      { label: 'Ollama', cssClass: 'badge--python'},
      { label: 'Git', cssClass: 'badge--git' },
    ],
    image: 'assets/images/processor_pdf/processor_pdf-2.webp',
    images: [
      'assets/images/processor_pdf/processor_pdf-2.webp',
      'assets/images/processor_pdf/processor_pdf.webp',
    ],
  },
  {
    icon: '📊',
    type: 'Dashboard',
    name: 'KPI Dashboard',
    url: 'https://kpi-dashboard-five-nu.vercel.app/',
    description: 'Dashboard para consulta de información de personas con visualización de KPIs y métricas clave.',
    techs: [
      { label: 'Next.js', cssClass: 'badge--next' },
      { label: 'React', cssClass: 'badge--react' },
      { label: 'Tailwind', cssClass: 'badge--tw' },
      { label: 'Vercel', cssClass: 'badge--vercel' },
    ],
    image: 'assets/images/kpi-dashboard/dashboard.webp',
    images: [
      'assets/images/kpi-dashboard/dashboard.webp',
    ],
  }
];

  /** Miniatura liviana (800px) usada en las tarjetas; la imagen completa solo se carga en el modal. */
  thumb(src: string): string {
    return src.replace(/\.webp$/, '-thumb.webp');
  }

  get hasImages(): boolean {
    return !!this.selectedProject?.images?.length;
  }

  projectHasImages(project: Project): boolean {
    return !!project.images?.length;
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    this.currentIndex = 0;
    this.direction = 'next';
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
    this.direction = 'prev';
    this.currentIndex =
      (this.currentIndex - 1 + this.selectedProject.images.length) %
      this.selectedProject.images.length;
  }

  next(): void {
    if (!this.selectedProject?.images?.length) return;
    this.direction = 'next';
    this.currentIndex =
      (this.currentIndex + 1) % this.selectedProject.images.length;
  }

  goTo(index: number): void {
    this.direction = index < this.currentIndex ? 'prev' : 'next';
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