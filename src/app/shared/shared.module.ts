import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatGridListModule,
    MatTabsModule
} from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatIconModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatMenuModule,
        MatGridListModule,
        MatTabsModule,
        NgxPaginationModule
    ],

    declarations: []
})
export class SharedModule { }
