import { Routes } from '@angular/router';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { HomeComponent } from './pages/home/home.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { SuccessComponent } from './pages/success/success.component';
import { ValeHomeComponent } from './pages/vale-home/vale-home.component';
import { ValentineComponent } from './pages/valentine/valentine.component';
import { YesPageComponent } from './pages/yes-page/yes-page.component';

export const routes: Routes = [
  { path: 'example-page/:title', component: ExamplePageComponent },
  { path: '', component: ValeHomeComponent },
  { path: 'no', component: NoPageComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'vale-home', component: ValeHomeComponent },
  { path: 'valentine', component: ValentineComponent },
  { path: 'yes', component: YesPageComponent },
];