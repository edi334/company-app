import {Component, OnInit} from '@angular/core';
import {CompanyModel} from '../../Models/company.model';
import {CompaniesService} from '../services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: CompanyModel[];
  constructor(private companiesService: CompaniesService) {
    this.companies = companiesService.getCompanies();
  }

  ngOnInit(): void {
  }

}
