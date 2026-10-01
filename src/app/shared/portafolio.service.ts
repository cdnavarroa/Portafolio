import { Injectable, NgZone } from '@angular/core';

const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#0123456789ABCDEFXYZ';

@Injectable({ providedIn: 'root' })
export class PortafolioService {
  private mouseX = 0;
  private mouseY = 0;
  private ringX = 0;
  private ringY = 0;
  private animating = false;

  constructor(private ngZone: NgZone) {}

  private get reducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private get canHover(): boolean {
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

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

      // Delegado: también cubre elementos creados después (modal, carrusel)
      document.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;
        const view = target.closest('.project-card__thumbnail');
        const interactive = target.closest('a, button');

        if (view) {
          cursor.style.transform = 'scale(0)';
          ring.style.transform = 'scale(2.2)';
          ring.dataset['label'] = 'ver';
        } else if (interactive) {
          cursor.style.transform = 'scale(2)';
          ring.style.transform = 'scale(1.5)';
          delete ring.dataset['label'];
        } else {
          cursor.style.transform = 'scale(1)';
          ring.style.transform = 'scale(1)';
          delete ring.dataset['label'];
        }
      });

      document.addEventListener('mousedown', () => ring.classList.add('is-pressed'));
      document.addEventListener('mouseup', () => ring.classList.remove('is-pressed'));
      document.documentElement.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        ring.style.opacity = '0';
      });
      document.documentElement.addEventListener('mouseenter', () => {
        cursor.style.opacity = '';
        ring.style.opacity = '';
      });
    });
  }

  initReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        // Los elementos que entran juntos aparecen en cascada
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            const delay = i * 90;

            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
              // Se limpia para que el retraso no afecte los hover posteriores
              setTimeout(() => (el.style.transitionDelay = ''), delay + 900);
            }

            el.classList.add('visible');
            el.querySelectorAll('.skill-bar-fill').forEach((bar) => {
              bar.classList.add('animated');
            });

            if (el.classList.contains('section-label')) {
              this.scramble(el);
            }

            observer.unobserve(el);
          });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll('.reveal, .exp-item, .skill-card, .section-label, .contact-big')
      .forEach((el) => observer.observe(el));
  }

  initEffects(): void {
    this.ngZone.runOutsideAngular(() => {
      this.initScroll();
      this.initActiveNav();
      this.initCounters();

      if (this.reducedMotion) return;

      this.initNavScramble();
      if (this.canHover) {
        this.initPointerEffects();
      }
    });
  }

  /** Barra de progreso, nav compacto y línea de tiempo que se llena con el scroll. */
  private initScroll(): void {
    const progress = document.querySelector<HTMLElement>('.scroll-progress');
    const nav = document.querySelector<HTMLElement>('app-nav nav');
    const timeline = document.querySelector<HTMLElement>('.exp-timeline');
    let ticking = false;

    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;

      if (progress) progress.style.transform = `scaleX(${ratio})`;
      nav?.classList.toggle('scrolled', window.scrollY > 40);

      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const filled = (window.innerHeight * 0.65 - rect.top) / rect.height;
        timeline.style.setProperty('--tl', `${Math.min(Math.max(filled, 0), 1)}`);
      }
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    update();
  }

  /** Marca el enlace del nav correspondiente a la sección visible. */
  private initActiveNav(): void {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => {
            links.forEach((link) =>
              link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)
            );
          });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    links.forEach((link) => {
      const section = document.querySelector(link.getAttribute('href')!);
      if (section) observer.observe(section);
    });
  }

  /** Cuenta desde 0 hasta data-count cuando el número entra en pantalla. */
  private initCounters(): void {
    const observer = new IntersectionObserver((entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset['count']);
          const suffix = el.dataset['suffix'] ?? '';
          observer.unobserve(el);

          if (this.reducedMotion) return;

          const duration = 1600;
          const start = performance.now() + 600; // espera la entrada del hero
          const tick = (now: number) => {
            const t = Math.min(Math.max((now - start) / duration, 0), 1);
            const eased = 1 - Math.pow(2, -10 * t);
            el.textContent = `${Math.round(target * (t === 1 ? 1 : eased))}${suffix}`;
            if (t < 1) requestAnimationFrame(tick);
          };
          el.textContent = `0${suffix}`;
          requestAnimationFrame(tick);
        });
    });

    document.querySelectorAll('[data-count]').forEach((el) => observer.observe(el));
  }

  private initNavScramble(): void {
    document.querySelectorAll<HTMLElement>('.nav-links a').forEach((link) => {
      link.addEventListener('mouseenter', () => this.scramble(link, 400));
    });
  }

  /** Efecto de "decodificación" del texto, letra por letra. */
  private scramble(el: HTMLElement, duration = 700): void {
    if (this.reducedMotion) return;

    const original = (el.dataset['text'] ??= el.textContent ?? '');
    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const revealed = Math.floor(progress * original.length);
      el.textContent = original
        .split('')
        .map((char, i) => {
          if (i < revealed || char === ' ') return char;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join('');
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  /** Inclinación 3D y foco de luz en tarjetas, botones magnéticos y brillo del hero. */
  private initPointerEffects(): void {
    let tilted: HTMLElement | null = null;
    let magnet: HTMLElement | null = null;
    let lastEvent: PointerEvent | null = null;
    let pending = false;

    const reset = (el: HTMLElement | null) => {
      if (el) el.style.transform = '';
    };

    const apply = () => {
      pending = false;
      const e = lastEvent!;
      const target = e.target as HTMLElement;

      const spot = target.closest<HTMLElement>(
        '.project-card, .skill-card, .competency-card, .edu-card'
      );
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty('--mx', `${e.clientX - r.left}px`);
        spot.style.setProperty('--my', `${e.clientY - r.top}px`);
      }

      const tilt = target.closest<HTMLElement>('.project-card.visible, .skill-card.visible');
      if (tilt !== tilted) reset(tilted);
      tilted = tilt;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform =
          `perspective(1000px) rotateX(${(-y * 6).toFixed(2)}deg) ` +
          `rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
      }

      const mag = target.closest<HTMLElement>('.btn-primary, .btn-ghost, .contact-link, .nav-logo');
      if (mag !== magnet) reset(magnet);
      magnet = mag;
      if (mag) {
        const r = mag.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        mag.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
      }

      const hero = target.closest<HTMLElement>('.hero');
      if (hero) {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty('--gx', `${e.clientX - r.left}px`);
        hero.style.setProperty('--gy', `${e.clientY - r.top}px`);
        hero.style.setProperty('--px', `${((e.clientX - r.left) / r.width - 0.5).toFixed(3)}`);
        hero.style.setProperty('--py', `${((e.clientY - r.top) / r.height - 0.5).toFixed(3)}`);
      }
    };

    document.addEventListener(
      'pointermove',
      (e) => {
        lastEvent = e;
        if (!pending) {
          pending = true;
          requestAnimationFrame(apply);
        }
      },
      { passive: true }
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
