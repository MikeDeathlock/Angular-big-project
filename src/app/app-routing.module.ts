import { DialogBoardComponent } from './pages/messages/dialog-board/dialog-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendFormComponent } from './pages/contacts/send-form/send-form.component';
import { HomeComponent } from './pages/home/home.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { UsersComponent } from './pages/administrator/users/users.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { TermsComponent } from './pages/terms/terms.component';
import {AuthGuard} from "./core/interceptors/auth.guard";
import {NotAuthGuard} from "./core/interceptors/not-auth.guard";
import { BannedUsersComponent } from './pages/administrator/banned-users/banned-users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[NotAuthGuard]
  },
  {
    path: 'mentor',
    loadChildren: () =>
      import('./pages/mentor/mentor.module').then((m) => m.MentorModule),
  },
  {
    path: 'mentor-details',
    loadChildren: () =>
      import('./pages/mentor-details/mentor-details.module').then(
        (m) => m.MentorDetailsModule
      ),
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'moderator',
    loadChildren: () =>
      import('./pages/moderator/moderator.module').then(
        (m) => m.ModeratorModule
      ),
      canActivate:[AuthGuard]
  },
  {
    path: 'administrator',
    loadChildren: () => import('./pages/administrator/admin/admin.module').then(m => m.AdminModule),
   
    canActivate:[AuthGuard]
    
  },

  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'terms',
    component: TermsComponent,
  },

  {
    path: 'messages',
    component: MessagesComponent,
    // pathMatch:'full',
    children:[
      {path:':id',component:DialogBoardComponent}
    ],canActivate:[AuthGuard]
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'error-page',
    loadChildren: () => import('./pages/error-pages/error-pages.module').then(m => m.ErrorPagesModule)
  },
  {
    path: '**',
    redirectTo: 'error-page',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
