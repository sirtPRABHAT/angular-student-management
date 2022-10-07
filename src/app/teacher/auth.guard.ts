import { Injectable } from '@angular/core'
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'
import { take, skipWhile, tap } from 'rxjs/operators'
import { AuthServiceService } from '../auth/auth-service.service'

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthServiceService
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.authService.signedin$.pipe(
            skipWhile((value) => value === null),
            take(1),
            tap((authenticated) => {
                if (!authenticated) {
                    this.router.navigateByUrl('/teacher/signin')
                }
            })
        )
    }
}
