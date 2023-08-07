import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: false, initialNavigation: "enabledBlocking" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
