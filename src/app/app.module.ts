import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisListComponent, HeroDetailComponent } from './components';

const appRoutes: Routes = [
  {
    path: '',
    component: HeroDetailComponent,
    data: {
      title: 'Hero Detail Title'
    }
  },
  {
    path: 'crisis-center',
    component: CrisisListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
