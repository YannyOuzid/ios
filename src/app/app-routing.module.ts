import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import { ParcoursPageComponent } from './parcours-page/parcours-page.component';
import { ReglagePageComponent } from './reglage-page/reglage-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ProchePageComponent } from './proche-page/proche-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'parcours', component: ParcoursPageComponent},
  {path: 'reglages', component: ReglagePageComponent},
  {path: 'profil', component: ProfilPageComponent},
  {path: 'map', component: MapPageComponent},
  {path: 'proche', component: ProchePageComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
