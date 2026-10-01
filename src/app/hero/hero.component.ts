import { Component } from '@angular/core';

interface HeroChar {
  c: string;
  i: number;
}

const toChars = (text: string, offset: number): HeroChar[] =>
  [...text].map((c, i) => ({ c, i: offset + i }));

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  // Cada letra lleva su índice para escalonar la animación de entrada
  readonly firstName = toChars('CRISTIAN', 0);
  readonly lastName = [
    { cls: 'outline', chars: toChars('NA', 8) },
    { cls: 'accent', chars: toChars('VAR', 10) },
    { cls: 'outline', chars: toChars('RO', 13) },
  ];
}
