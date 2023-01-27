import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscussEuComponent } from './discuss-eu.component';
import { ExpertInterviewsComponent } from './expert-interviews/expert-interviews.component';
import { PolicyRoundtablesComponent } from './policy-roundtables/policy-roundtables.component';

const routes: Routes = [
  {
    path: '',
    component: DiscussEuComponent,
  },
  {
    path:'/expert-interviews',
    component:ExpertInterviewsComponent
  },
  {
    path:'/policy-roundtables',
    component:PolicyRoundtablesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DisccusEuRoutingModule {}