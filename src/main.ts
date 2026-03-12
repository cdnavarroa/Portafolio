import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PortafolioComponent } from './app/app.component';

bootstrapApplication(PortafolioComponent, appConfig)
  .catch((err) => console.error(err));
