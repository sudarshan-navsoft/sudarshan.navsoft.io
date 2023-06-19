import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { PostAccResolver } from 'src/app/services/resolvers/post-acc.resolver';

const routes: Routes = [
  {
    path:'',
    component:AccountComponent
  },
  {
    path: 'post/:id',
    component: AccountComponent,
    resolve: { newsData: PostAccResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
