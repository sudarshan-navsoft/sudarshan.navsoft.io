import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ResolveserviceService } from '../services/resolveservice.service';
import { LoginGuard } from '../services/authguards/login.guard';
import { ProtectedlayoutComponent } from '../protectedlayout/protectedlayout.component';
import { NotfoundComponent } from '../pages/notfound/notfound.component';

const routes: Routes = [
  {
    path:'home',
    pathMatch:'full',
    // component: LayoutComponent,
    redirectTo:'/'
  },
  {
    path:'',
    component:LayoutComponent,
    loadChildren: ()=> import('../pages/home/home.module').then(m=>m.HomeModule),
    resolve:{data: ResolveserviceService}
  },
  {
    path:'about',
    component:LayoutComponent,
    loadChildren: ()=> import('../pages/about/about.module').then(m=>m.AboutModule),
    canActivate:[LoginGuard]
  },
  { path: 'users',
    component:LayoutComponent, 
    loadChildren: () => import('../pages/listing/listing.module').then(m => m.ListingModule),
    canActivate:[LoginGuard] 
  },
  {
    path:'profile',
    component: ProtectedlayoutComponent,
    loadChildren :()=> import('../protectedlayout/protectedlayout.module').then(m=>m.ProtectedlayoutModule),
    canActivate:[LoginGuard]
  },
  {
    path:'formexample',
    component:LayoutComponent,
    loadChildren:()=> import('../pages/form/form.module').then(m=>m.FormModule)
  },
  {
    path:'test',
    component:LayoutComponent,
    loadChildren:()=> import('../pages/test/test.module').then(m=>m.TestModule)
  },
  {
    path:'**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
