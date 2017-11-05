import {environment} from '../environments/environment';
import {InjectionToken} from '@angular/core';
import {Route} from '@angular/router';
import {LoginComponent} from './login/login.component';
export const BASE_URL: string = environment.baseUrl;
export const BASE_URL_TOKEN: InjectionToken<string> = new InjectionToken(BASE_URL);

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
