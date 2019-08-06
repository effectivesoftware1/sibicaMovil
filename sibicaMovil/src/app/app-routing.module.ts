import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
  {path: 'tabs', loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule) },
];
// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'home', loadChildren: '../pages/home/home.module#HomePageModule' },
//   { path: 'login', loadChildren: '../pages/login/login.module#LoginPageModule' }
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
