import { Component } from '@angular/core';
import e from 'express';

interface Skill {
  icon: string;
  name: string;
  level: string;
  percent: number;
}

interface ToolGroup {
  category: string;
  items: string[];
}

interface Competency {
  category: string;
  items: string[];
}

const ICONS = {
  nextjs: 'assets/icons/nextjs.svg',
  react: 'assets/icons/react.svg',
  nodejs: 'assets/icons/nodejs.svg',
  python: 'assets/icons/python.svg',
  mysql: 'assets/icons/mysql.svg',
  excel: 'assets/icons/excel.svg',
  express: 'assets/icons/express.svg',
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = [
    { icon: ICONS.nextjs, name: 'Next.js', level: 'Avanzado', percent: 90 },
    { icon: ICONS.react, name: 'React', level: 'Avanzado', percent: 90 },
    { icon: ICONS.nodejs, name: 'Node.js', level: 'Intermedio', percent: 75 },
    { icon: ICONS.express, name: 'Express.js', level: 'Avanzado', percent: 70 },
    { icon: ICONS.python, name: 'Python', level: 'Intermedio', percent: 70 },
    { icon: ICONS.mysql, name: 'MySQL', level: 'Avanzado', percent: 90 },
    { icon: ICONS.excel, name: 'Excel / VBA', level: 'Avanzado', percent: 85 },
  ];

  tooling: ToolGroup[] = [
    {
      category: 'Backend & APIs',
      items: ['Express', 'JWT', 'bcryptjs', 'Sequelize', 'MongoDB', 'Helmet', 'CORS', 'Rate Limiting'],
    },
    {
      category: 'Generación de documentos',
      items: ['ExcelJS', 'PDFKit', 'docx', 'docxtemplater', 'SheetJS'],
    },
    {
      category: 'Comunicaciones',
      items: ['SendGrid', 'Mailjet', 'Nodemailer'],
    },
    {
      category: 'Control de versiones',
      items: ['Git', 'GitHub', 'GitFlow'],
    },
    {
      category: 'Documentación & Testing',
      items: ['Swagger', 'Postman', 'Winston', 'Nodemon'],
    },
  ];

  competencies: Competency[] = [
    {
      category: 'Bases de datos',
      items: [
        'SQL Server',
        'MySQL',
        'Consultas avanzadas',
        'Optimización de queries',
      ],
    },
    {
      category: 'Despliegue',
      items: [
        'cPanel',
        'Vercel',
        'GoDaddy',
        'Configuración de dominios',
        'SSL / HTTPS',
      ],
    },
    {
      category: 'Soporte técnico',
      items: [
        'Mantenimiento de equipos',
        'Diagnóstico de hardware',
        'Instalación de software',
      ],
    },
    {
      category: 'Software contable',
      items: [
        'Siigo',
        'Alegra',
        'SIMI',
        'Daytona',
        'Nuwwe',
        'Odoo',
        'Claus',
        'World Office',
      ],
    },
    {
      category: 'WordPress',
      items: [
        'Desarrollo de sitios',
        'Administración',
        'Temas y plugins',
        'Mantenimiento',
      ],
    },
    {
      category: 'Soporte contable',
      items: [
        'Cargue de información',
        'Detección de errores',
        'Corrección de datos',
        'Capacitación en software',
      ],
    },
  ];
}
