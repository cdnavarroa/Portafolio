import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div>© 2026 Cristian Navarro — Desarrollado con ♥ en Popayán</div>
      <div class="available">Disponible para proyectos</div>
    </footer>
  `,
  styles: [`
    footer {
      padding: 32px 48px;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--muted);
      font-size: 11px;
    }
    .available { color: var(--accent); }
  `],
})
export class FooterComponent {}
