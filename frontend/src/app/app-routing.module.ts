import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TrainingCycleComponent } from './training-cycle/training-cycle.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';  // Import du LoginComponent
import { ParticipantsComponent } from './participants/participants.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { CyclesComponent } from './cycles/cycles.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'formation', component: TrainingCycleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'adminPanel', component:AdminPanelComponent},
  /*{ path: 'participants', component: ParticipantsComponent },
  { path: 'formateurs', component: FormateursComponent },
  { path: 'cycles', component: CyclesComponent },*/

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
