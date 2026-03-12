import { Component } from '@angular/core';

interface Skill {
  icon: string;
  name: string;
  level: string;
  percent: number;
}

const ICONS = {
  nextjs: 'assets/icons/nextjs.svg',
  react: 'assets/icons/react.svg',
  nodejs: 'assets/icons/nodejs.svg',
  python: 'assets/icons/python.svg',
  mysql: 'assets/icons/mysql.svg',
  excel: 'assets/icons/excel.svg',
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
    { icon: ICONS.python, name: 'Python', level: 'Intermedio', percent: 70 },
    { icon: ICONS.mysql, name: 'MySQL', level: 'Avanzado', percent: 90 },
    { icon: ICONS.excel, name: 'Excel / VBA', level: 'Avanzado', percent: 85 },
  ];
}
