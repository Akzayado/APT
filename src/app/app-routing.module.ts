import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'my_works', component: MyWorksComponent},
  { path: 'about', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
export const routingComponents = [AboutMeComponent, MyWorksComponent]