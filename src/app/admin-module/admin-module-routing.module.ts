import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { PracticeComponent } from './admin-components/practice/practice.component';
import { ProductsComponent } from './admin-components/products/products.component';
import { TestingComponent } from './admin-components/testing/testing.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent,
children:[
  { path : '', component:DashboardComponent },
  { path : 'dash-board', component:DashboardComponent},
  { path :'product', component:ProductsComponent},
  { path : 'testing-component', component:TestingComponent},
  { path : 'practice-component', component:PracticeComponent}
]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
