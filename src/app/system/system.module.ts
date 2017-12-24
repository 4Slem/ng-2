import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile/profile.component';
import { SystemRoutingModule } from './system-routing.module';

import { ProfileService } from './profile/profile.service';

@NgModule({
    imports: [
        SystemRoutingModule
      
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [
        ProfileService
    ]
})
export class SystemModule {}