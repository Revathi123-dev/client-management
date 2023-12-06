import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RegistrationComponent } from './registration/registration.component';
import { MeetingSchedulerComponent } from './meeting-scheduler/meeting-scheduler.component';

const routes: Routes = [
  { path: 'meeting', component: MeetingSchedulerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
