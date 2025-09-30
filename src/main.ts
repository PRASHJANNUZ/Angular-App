import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent} from './app/app.component'; //here mention all the new created classes that we created inside app.component.ts file so that Application can access those classes

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


