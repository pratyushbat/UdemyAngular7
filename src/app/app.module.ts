import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
  import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { UploadComponent } from './pages/upload/upload.component';
import { SummaryPipe } from './summary.piper';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './pages/like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './pages/zippy/zippy.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { AppErrorHandler } from './app-error-handler';
import { PagesComponent } from './pages/pages.component';
import { GithubFollowerComponent } from './pages/github-follower/github-follower.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';
import { GithubProfileComponent } from './pages/github-profile/github-profile.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ArchieveComponent } from './pages/archieve/archieve.component';
import { ArcheveParentComponent } from './pages/archeve-parent/archeve-parent.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AgmCoreModule } from '@agm/core';
import { UseMyMapComponent } from './pages/use-my-map/use-my-map.component';
import { FarrayPipe } from './farray.pipe';
import { Ng2CompleterModule } from "ng2-completer";
import { CustomersModule } from './lload/customers.module';
import { OrdersModule } from './orders/orders.module';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
   
    HomeComponent,
    LayoutsComponent,
    SummaryPipe,
    UploadComponent,
    TitleCasePipe,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    PostsComponent,
    PagesComponent,
    GithubFollowerComponent,
    NotFoundComponentComponent,
    GithubProfileComponent,
    NavbarComponent,
    ArchieveComponent,
    ArcheveParentComponent,
    LoginComponent,
    SignupComponent,

    UseMyMapComponent,

    FarrayPipe,

    SidebarComponent,

    FooterComponent
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    Ng2CompleterModule,
    FormsModule,
    HttpClientModule,
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0n1sHGFS-kWMVursAJyTLGagXVckQ_Sc',
      libraries: ['places']
}),
ReactiveFormsModule,
CustomersModule,
OrdersModule
  ],
  providers: [{provide:ErrorHandler, useClass:AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
