import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren:() => import('./portfolio-purchase/portfolio-purchase.module').then(m => m.PortfolioPurchaseModule)
        //component: HomeComponent,
      },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
