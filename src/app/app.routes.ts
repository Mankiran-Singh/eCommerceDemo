import { Routes } from '@angular/router';
import { CourseGuardService } from './course-guard.service';
import { NoPageComponent } from './no-page/no-page.component';

export const routes: Routes = [
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'login',loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)},
    {path:'products',loadComponent:()=>import('./products/products.component').then(m=>m.ProductsComponent),canActivate:[CourseGuardService]},
    {path:'**',component:NoPageComponent}
];
