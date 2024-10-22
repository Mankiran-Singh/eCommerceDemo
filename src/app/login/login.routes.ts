import { Route, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { AuthGuardService } from "../auth-guard.service";

export const routes: Routes=[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'',component:LoginComponent,canActivate:[AuthGuardService]}
]