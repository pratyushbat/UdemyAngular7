import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './pages/upload/upload.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { PostsComponent } from './pages/posts/posts.component';
import { GithubFollowerComponent } from './pages/github-follower/github-follower.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';
import { GithubProfileComponent } from './pages/github-profile/github-profile.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { ArchieveComponent } from './pages/archieve/archieve.component';
import { ArcheveParentComponent } from './pages/archeve-parent/archeve-parent.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

import { UseMyMapComponent } from './pages/use-my-map/use-my-map.component';

const routes: Routes = [
  
      
    
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
      {
        path: 'home',
        component: HomeComponent
      } ,
      {
        path: 'post',
        component: PostsComponent
      } ,
      {
        path: 'customers',
        loadChildren: () => import('./lload/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
      },
      
      {
        path: 'upload',
        component: UploadComponent
      } ,
      
      {
        path: 'favourite',
        component: FavouriteComponent
      } ,
      {
        path: 'follower/:id/:username',
        component: GithubProfileComponent
      },
      {
        path: 'layout',
        component: LayoutsComponent
      },
      {
        path: 'follower',
        component: GithubFollowerComponent
      },
      {
        path: 'archieve/:year/:month',
        component: ArchieveComponent
      },
      {
        path: 'archeve',
        component: ArcheveParentComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'map',
        component: UseMyMapComponent
      },
    


      {
        path: '**',
        component: NotFoundComponentComponent
      }
      

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
