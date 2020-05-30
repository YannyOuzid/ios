import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-objectif-page',
  templateUrl: './objectif-page.component.html',
  styleUrls: ['./objectif-page.component.scss'],
})
export class ObjectifPageComponent implements OnInit {

  constructor(public router : Router,) { }

  ngOnInit() {}

  goToParcours(){
    this.router.navigateByUrl('parcours')
  }

  goToHome(){
    this.router.navigateByUrl('')
  }

  goToProfil(){
    this.router.navigateByUrl('profil')
  }



}


