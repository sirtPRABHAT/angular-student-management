import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthServiceService } from '../auth-service.service'

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
    authForm = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
        ]),
    })

    constructor(
        private router: Router,
        private authService: AuthServiceService
    ) {}

    ngOnInit() {}

    onSubmit() {
        if (this.authForm.invalid) return
        const { username, password } = this.authForm.value

        this.authService.signin({ email: username, password }).subscribe({
            next: () => {
                this.router.navigateByUrl('/teacher')
            },
            error: ({ error, status }) => {
                if (status == 404) {
                    this.authForm.setErrors({ credentials: true })
                }
            },
        })
    }

    onResetClick() {
        this.authForm.reset()
    }
}
