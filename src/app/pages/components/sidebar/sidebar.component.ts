import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageUtil} from '../../framework/StorageUtil';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
    {path: '/job-posting', title: 'Jobs', icon: 'person', class: ''},
    {path: '/job-posting-attendance', title: 'Application', icon: 'present_to_all', class: ''},
  {path: '/category', title: 'Members', icon: 'library_books', class: ''},
  {path: '/access', title: 'My Candidates', icon: 'library_books', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    return $(window).width() <= 991;
  };


  onLogoutClick() {
    StorageUtil.clearAllData();
    this.router.navigate(['/login']);
  }
}
