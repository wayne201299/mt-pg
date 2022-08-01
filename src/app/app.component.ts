import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Referral System';
  opened: boolean = false;
  pages = [
    { name: 'Referral-system', route: 'referral-system' },
    { name: 'Transaction', route: 'transaction' },
    { name: 'Report', route: 'report' },
  ];

  toggleSideNavStatus() {
    this.opened = !this.opened;
  }
  openedChange() {
    console.log('open!');
  }
  closed() {
    console.log('close!');
  }
}
