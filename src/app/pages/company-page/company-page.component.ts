import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {CompanyModel} from '../../Models/company.model';
import {CompaniesService} from '../../components/services/companies.service';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  company: CompanyModel;
  constructor(private route: ActivatedRoute, private companiesService: CompaniesService, private router: Router) {
    this.company = this.companiesService.getCompany(this.route.snapshot.params.slug as number);
    if (this.company === undefined){
      this.router.navigate ( ['/']);
    }

  }

  ngOnInit(): void {
  }

}
