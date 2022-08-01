import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private apiService: ApiService) {
    this.searchForm = new FormGroup({
      referralStartDate: new FormControl(''),
      referralEndDate: new FormControl(''),
      referralType: new FormControl(''),
      referralCaseStatus: new FormControl(''),
      referer: new FormControl(''),
      shopFrom: new FormControl(''),
      referee: new FormControl(''),
      shopTo: new FormControl(''),
      memberCode: new FormControl(''),
      referralCaseNo: new FormControl(''),
      associatedRecord: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  search() {
    this.apiService.get('referral').subscribe((resp) => {
      console.log(resp.content);
    });
  }

  reset() {
    this.searchForm.reset();
  }
}
