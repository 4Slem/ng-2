import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/sharedModule'

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ],
    declarations: [
        LoginComponent,
        RegistrationComponent
    ]
}) export class AuthModule {}