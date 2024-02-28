import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from 'src/app/features/details/details.component';
import { HomeComponent } from 'src/app/features/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:game-search', component: HomeComponent },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
