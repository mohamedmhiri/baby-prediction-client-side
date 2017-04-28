import { GiniComponent } from './../gini/gini.component';
import { EntropyComponent } from './../entropy/entropy.component';
import { ForestComponent } from './../forest/forest.component';
import { DataComponent } from './../data/data.component';
import { MainContentComponent } from './../main-content/main-content.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: MainContentComponent
    },
    {
        path: 'data',
        component: DataComponent
    },
    {
        path: 'forest',
        component: ForestComponent
    },
    {
        path: 'entropy',
        component: EntropyComponent
    },
    {
        path: 'gini',
        component: GiniComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),// Add routes to the app
  ],
  declarations: [],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
      RouterModule
  ]
})
export class RoutesModule { }
