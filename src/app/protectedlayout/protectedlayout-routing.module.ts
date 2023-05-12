import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginGuard } from '../services/authguards/login.guard';
import { ProtectedlayoutComponent } from './protectedlayout.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: ProtectedlayoutComponent,
  //   // canActivate:[LoginGuard]
  // },
  {
    path:'',
    component:ProfileComponent,
    // canActivate:[LoginGuard]
  },
  { path: 'dashbaord', 
  // component:ProtectedlayoutComponent,
  loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedlayoutRoutingModule { }
