import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompaniesComponent} from './components/companies/companies.component';
import {CompanyPageComponent} from './pages/company-page/company-page.component';

const routes: Routes = [
  {path: '', component: CompaniesComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'company/:slug', component: CompanyPageComponent},
  {path: '**', component: CompaniesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
