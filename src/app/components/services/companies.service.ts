import { Injectable } from '@angular/core';
import {CompanyModel} from '../../Models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private companies: CompanyModel[] = [
    {
      id: 1,
      name: 'Name1',
      description: 'description'
    },
    {
      id: 10,
      name: 'N21',
      description: 'descr21tion'
    },
  ];

  constructor() { }

  getCompanies(): CompanyModel[]{
    return this.companies;
  }

  getCompany(id: number): CompanyModel {
    for (let i = 0; i < this.companies.length; i++) {
      if (this.companies[i].id == id) {
        return this.companies[i];
      }
    }
  }
}
