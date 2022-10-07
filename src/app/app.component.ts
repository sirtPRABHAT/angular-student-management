import { Location } from '@angular/common'
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { AuthServiceService } from './auth/auth-service.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    signedin$: BehaviorSubject<boolean>

    constructor(
        private router: Router,
        private authService: AuthServiceService,
        private _location: Location
    ) {
        this.signedin$ = this.authService.signedin$
    }

    ngOnInit() {
        this.authService.checkAuth().subscribe({
            next: () => {},
            error: (error) => {
                this.authService.signedin$.next(false)
            },
        })
    }

    onBackPressed() {
        this._location.back()
    }

    isTeacherUrl() {
        return this.router.url.startsWith('/teacher')
    }

    isHomeUrl() {
        return this.router.url == '/'
    }

    isSigninUrl() {
        return this.router.url == '/teacher/signin'
    }
    isSignupUrl() {
        return this.router.url == '/teacher/signup'
    }
}
