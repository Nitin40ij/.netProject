import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsercontactComponent } from './usercontact/usercontact.component';

const routes: Routes = [
  {
    path:'',component:UsercontactComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
