import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PartsComponent } from './components/parts/parts.component';
import { TrailDetailComponent } from './components/trails/trail-detail/trail-detail.component';
import { TrailsComponent } from './components/trails/trails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'trails',
    component: TrailsComponent,
  },
  {
    path: 'trails/:id',
    component: TrailDetailComponent,
  },

  {
    path: 'parts',
    component: PartsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
