import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ContextComponent } from './context/context.component';
import { CourseComponent } from './course/course.component';
import { DiscussEuComponent } from './discuss-eu/discuss-eu.component';
import { FullBlogComponent } from './full-blog/full-blog.component';
import { FullUpcomingComponent } from './full-upcoming/full-upcoming.component';
import { FullNewsComponent } from './fullNews/fullNews.component';
import { MainComponent } from './main/main.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ResearchEuComponent } from './research-eu/research-eu.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { UpcomingConsultationsComponent } from './upcoming-consultations/upcoming-consultations.component';
import { VideoComponentComponent } from './video-component/video-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'context',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'staff',
    component: StaffPageComponent,
  },
  {
    path: 'news',
    component: NewsPageComponent,
  },
  {
    path: 'full-news',
    component: FullNewsComponent,
  },
  {
    path: 'full-blog',
    component: FullBlogComponent,
  },
  {
    path:'full-event',
    component:FullUpcomingComponent
  },
  {
    path: 'researchEu',
    component: ResearchEuComponent,
  },
  {
    path: 'staff',
    component: StaffPageComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'discuss-eu',
    component: DiscussEuComponent,
  },
  {
    path: 'contact',
    component: ContactMeComponent,
  },
  {
    path: 'context',
    component: ContextComponent,
  },
  {
    path: 'video',
    component: VideoComponentComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path:'course',
    component:CourseComponent,
  },
  {
    path:'events',
    component: UpcomingConsultationsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
