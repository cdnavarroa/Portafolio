import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { PortafolioComponent } from './app/app.component';
import { config } from './app/app.config.server';
const bootstrap = (context: BootstrapContext) => bootstrapApplication(PortafolioComponent, config, context);
export default bootstrap;
