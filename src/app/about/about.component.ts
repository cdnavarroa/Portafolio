import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent {
  techStack = [
    'Next.js', 'React', 'Node.js', 'Python',
    'MySQL', 'JavaScript', 'Excel / VBA', 'Siigo', 'Alegra',
  ];
}