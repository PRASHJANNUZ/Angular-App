import { Routes } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
   // {path: 'admin', component:AdminComponent   } ,        // this we define for Eager loading of component
    {path : "admin", loadComponent: ()=> import('./admin/admin.component').then((c)=> c.AdminComponent)}    // this is we define for Lazy loading of component

];
