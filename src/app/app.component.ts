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
        private authService: AuthServiceService
    ) {
        this.signedin$ = this.authService.signedin$
    }

    ngOnInit() {
        this.authService.checkAuth().subscribe(() => {})
    }

    isTeacherUrl() {
        return this.router.url.startsWith('/teacher')
    }
}
