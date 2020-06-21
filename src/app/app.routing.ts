import { ErrorComponent } from './view/error/error.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
      path: '***',
      component: ErrorComponent
    },
    {
      path: '',
      component: HomeComponent
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}