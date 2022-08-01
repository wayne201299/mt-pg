import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  searchForm: FormGroup;
  dataSource: any;
  displayedColumns = [
    'referralDate',
    'referralNo',
    'referrer',
    'referee',
    'referralType',
    'memberDto',
    'remarks',
    'referralStatus',
  ];
  constructor(private apiService: ApiService) {
    this.searchForm = new FormGroup({
      referralStartDate: new FormControl(''),
      referralEndDate: new FormControl(''),
      referralType: new FormControl(''),
      referralCaseStatus: new FormControl(''),
      referer: new FormControl(''),
      referee: new FormControl(''),
      clinic: new FormControl(''),
      member: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.apiService.get('referral').subscribe((resp) => {
      this.dataSource = resp.content;
      console.log(resp.content);
    });
  }

  reset() {
    this.searchForm.reset();
  }
}
