import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importer FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TrainingCycleComponent } from './training-cycle/training-cycle.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormationCardComponent } from './formation-card/formation-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { ParticipantsComponent } from './participants/participants.component';
import { CyclesComponent } from './cycles/cycles.component';
import { HttpClientModule } from '@angular/common/http';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    TrainingCycleComponent,
    AboutusComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    FormationCardComponent,
    AdminPanelComponent,
    FormateursComponent,
    ParticipantsComponent,
    CyclesComponent,
    EvaluationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
