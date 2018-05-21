import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CoreService } from '../../core/services/core.service';
import { MatSnackBar } from '@angular/material';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginFormGroup: FormGroup;
    canDisableSignInButton: boolean;
    isLoggedIn: any;

    constructor(private _formBuilder: FormBuilder,
                private _coreService: CoreService,
                private _router: Router,
                public snackBar: MatSnackBar) { }

    ngOnInit() {
        this.loginFormGroup = this._formBuilder.group({
            userId: ['', Validators.required],
            userPassword: ['', Validators.required]
        });
        // this._coreService.getAllUser().subscribe( data => console.log(data));
        this.canDisableSignInButton = false;
    }

    onLogin() {
        this._coreService.login(this.userId.value, this.userPassword.value)
            .subscribe(
                data => {
                    if (data.message) {
                        this.snackBar.open(data.message , 'Got it', {
                            duration: 3000,
                        });
                    } else if (data.id) {
                        this._router.navigate(['']);
                    }

                },
                error => {
                    console.log(error);
                }
            );
    }

    onSignUp() {
        this._router.navigate(['/register']);
    }

    get userId() {
        return this.loginFormGroup.get('userId');
    }

    get userPassword() {
        return this.loginFormGroup.get('userPassword');
    }

    getIdErrorMessage() {
        return this.userId.hasError('required') ? 'Mandatory information' : '';
    }

    getPasswordErrorMessage() {
        return this.userPassword.hasError('required') ? 'Mandatory information' : '';
    }

}
