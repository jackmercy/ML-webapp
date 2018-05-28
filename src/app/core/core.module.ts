import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreService } from './services/core.service';
import { RecommendService } from './services/recommend.service';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar.component';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent],
    providers: [
        CoreService,
        RecommendService,
        UserService,
        AuthGuard
    ]
})
export class CoreModule { }
