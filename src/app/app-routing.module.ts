import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BazsiComponent } from './bazsi/bazsi.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'bazsi', component: BazsiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent, BazsiComponent]
