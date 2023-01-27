import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussEuComponent } from './discuss-eu.component';
import { DisccusEuRoutingModule } from './disccus-eu-routing.module';
import { PolicyRoundtablesComponent } from './policy-roundtables/policy-roundtables.component';
import { ExpertInterviewsComponent } from './expert-interviews/expert-interviews.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DiscussEuComponent,
    PolicyRoundtablesComponent,
    ExpertInterviewsComponent,
  ],
  imports: [
    CommonModule,
    DisccusEuRoutingModule
  ]
})
export class DiscussEUModule {}
