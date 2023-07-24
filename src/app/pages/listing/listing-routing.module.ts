import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing.component';
import { NotesAddEditComponent } from './notes-add-edit/notes-add-edit.component';

const routes: Routes = [
  { path: '', component: ListingComponent },
  { path:'addnotes', component: NotesAddEditComponent},
  { path:'editnotes/:id', component: NotesAddEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
