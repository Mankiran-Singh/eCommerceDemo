import { Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { CourseGuardService } from "../course-guard.service";

export const routes: Routes = [

  {path:'products',component:ProductsComponent,canActivate:[CourseGuardService]}
];