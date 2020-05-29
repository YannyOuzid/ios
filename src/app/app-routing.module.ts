import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import { ParcoursPageComponent } from './parcours-page/parcours-page.component';
import { ReglagePageComponent } from './reglage-page/reglage-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ProchePageComponent } from './proche-page/proche-page.component';
import { RecherchePageComponent } from './recherche-page/recherche-page.component';
import { ExploitPageComponent } from './exploit-page/exploit-page.component';
import { ObjectifPageComponent } from './objectif-page/objectif-page.component';
import { CreerPageComponent } from './creer-page/creer-page.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'parcours', component: ParcoursPageComponent},
  {path: 'reglages', component: ReglagePageComponent},
  {path: 'profil', component: ProfilPageComponent},
  {path: 'map', component: MapPageComponent},
  {path: 'proche', component: ProchePageComponent},
  {path: 'recherche', component: RecherchePageComponent},
  {path: 'exploit', component: ExploitPageComponent},
  {path: 'objectif', component: ObjectifPageComponent},
  {path: 'creer', component: CreerPageComponent},
  {path: 'tutorial', component: TutorialPageComponent},
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
