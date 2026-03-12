import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortafolioService } from './shared/portafolio.service';
import { ProjectsComponent } from './proyects/proyects.component';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="cursor" #cursor></div>
    <div class="cursor-ring" #cursorRing></div>

    <app-nav />
    <app-hero />
    <app-about />
    <app-skills />
    <app-projects />
    <app-experience />
    <app-education />
    <app-contact />
    <app-footer />
  `,
  styleUrls: ['./app.component.scss'],
})
export class PortafolioComponent implements AfterViewInit {
  @ViewChild('cursor') cursorRef!: ElementRef<HTMLElement>;
  @ViewChild('cursorRing') cursorRingRef!: ElementRef<HTMLElement>;

  constructor(private portafolioService: PortafolioService) {}

  ngAfterViewInit(): void {
    this.portafolioService.initCursor(
      this.cursorRef.nativeElement,
      this.cursorRingRef.nativeElement
    );
    setTimeout(() => this.portafolioService.initReveal(), 100);
  }
}
