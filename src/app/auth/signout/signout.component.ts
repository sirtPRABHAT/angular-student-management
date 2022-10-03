import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthServiceService } from '../auth-service.service'

@Component({
    selector: 'app-signout',
    templateUrl: './signout.component.html',
    styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
    constructor(
        private authService: AuthServiceService,
        private router: Router
    ) {}

    ngOnInit() {
        this.authService.signout()
        this.router.navigateByUrl('/')
    }
}
