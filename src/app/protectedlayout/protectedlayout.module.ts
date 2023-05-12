import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedlayoutRoutingModule } from './protectedlayout-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProtectedlayoutComponent } from './protectedlayout.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProtectedlayoutComponent
  ],
  imports: [
    CommonModule,
    ProtectedlayoutRoutingModule
  ]
})
export class ProtectedlayoutModule { }
