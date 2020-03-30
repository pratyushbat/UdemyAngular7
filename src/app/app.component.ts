import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UdemyLearn';







  //   private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

 
    static isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }

  constructor( ) {}

  ngOnInit() {
      const isWindows = navigator.platform.indexOf('Win') > -1;

      if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
          // if we are on windows OS we activate the perfectScrollbar function
          document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
      } else {
          document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
      }
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

     //   this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
    //        elemMainPanel.scrollTop = 0;
    //        elemSidebar.scrollTop = 0;
    //   });
      // if (window.matchMedia(`(min-width: 960px)`).matches && !LayoutsComponent.isMac()) {
          // let ps = new PerfectScrollbar(elemMainPanel);
          // ps = new PerfectScrollbar(elemSidebar);
      // }
  }

    // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
      // LayoutsComponent.runOnRouteChange();
  }

  //   isMaps(path) {
  //       let titlee = this.location.prepareExternalUrl(this.location.path());
  //     titlee = titlee.slice( 1 );
  //       return path !== titlee;
  // }


}
