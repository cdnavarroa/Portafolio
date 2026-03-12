import { Injectable, NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PortafolioService {
  private mouseX = 0;
  private mouseY = 0;
  private ringX = 0;
  private ringY = 0;
  private animating = false;

  constructor(private ngZone: NgZone) {}

  initCursor(cursor: HTMLElement, ring: HTMLElement): void {
    this.ngZone.runOutsideAngular(() => {
      document.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        cursor.style.left = `${this.mouseX - 5}px`;
        cursor.style.top = `${this.mouseY - 5}px`;
      });

      if (!this.animating) {
        this.animating = true;
        this.animateRing(ring);
      }

      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          cursor.style.transform = 'scale(2)';
          ring.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.transform = 'scale(1)';
          ring.style.transform = 'scale(1)';
        });
      });
    });
  }

  initReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
              bar.classList.add('animated');
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal, .exp-item, .skill-card').forEach((el) =>
      observer.observe(el)
    );
  }

  private animateRing(ring: HTMLElement): void {
    this.ringX += (this.mouseX - this.ringX - 18) * 0.12;
    this.ringY += (this.mouseY - this.ringY - 18) * 0.12;
    ring.style.left = `${this.ringX}px`;
    ring.style.top = `${this.ringY}px`;
    requestAnimationFrame(() => this.animateRing(ring));
  }
}
