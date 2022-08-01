import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss'],
})
export class ReferralComponent implements OnInit {
  searchForm: FormGroup;
  dataSource: any;
  breadcrumbs$!: Observable<any>;
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

  constructor(
    private apiService: ApiService,
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.searchForm = new FormGroup({
      referralStartDate: new FormControl(''),
      referralEndDate: new FormControl(''),
      referralType: new FormControl(''),
      referralCaseStatus: new FormControl(''),
      referer: new FormControl(''),
      referee: new FormControl(''),
      member: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.search();
    this.breadcrumbs$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map((event) => {
        let root: ActivatedRoute = this.activatedRoute.root;
        console.log(root);
      })
    );

    this.breadcrumbs$.subscribe((resp) => console.log(resp));
  }

  search() {
    this.apiService.get('referral').subscribe((resp) => {
      console.log(resp.content);
      this.dataSource = resp.content;
    });
    let params: HttpParams = new HttpParams();
    params = params.set('page', '1');
    params = params.set('size', '2');
    // for (let key in searchCriteria) {
    //   params = params.set(key, searchCriteria[key]);
    // }
    this.httpClient
      .get(`${environment.API_END_POINT}/referral-cases-search`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params: {
          page: 0,
          size: 20,
          referralStartDate: '',
          referralEndDate: '',
          fromDoctor: '',
          toDoctor: '',
          referralType: '',
          memberId: '',
          referralCaseStatus: '',
          invoiceStatus: '',
          referralNo: '',
          clinic: '',
          global: '',
          orderBy: 'referralDate DESC',
          direction: '',
        },
      })
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  /**
   * @description form reset
   */
  reset() {
    this.searchForm.reset();
  }
}
