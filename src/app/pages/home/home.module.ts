import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { UppercasePipe } from 'src/app/services/pipe/uppercase.pipe';
import { AppFilterPipe } from 'src/app/services/pipe/app-filter.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
 
// const MODULES={
//   MatPaginatorModule,
// }

@NgModule({
  
  declarations: [
    HomeComponent,

    UppercasePipe,
    AppFilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatPaginatorModule,
  ]
})
export class HomeModule { }
