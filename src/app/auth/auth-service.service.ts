import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'

interface CheckAuthResponse {
    authenticated: boolean
}

interface SigninResponse {
    message: string
    accessToken: string
}

interface SigninCredentials {
    email: string
    password: string
}

@Injectable({
    providedIn: 'root',
})
export class AuthServiceService {
    // rootUrl = 'https://student-management-node.herokuapp.com/v1'
    rootUrl = 'http://localhost:4201/v1'
    signedin$ = new BehaviorSubject(null)

    constructor(private http: HttpClient) {}

    checkAuth() {
        return this.http
            .get<CheckAuthResponse>(`${this.rootUrl}/teacher/is-loggedin`)
            .pipe(
                tap(({ authenticated }) => {
                    console.log('check', authenticated)
                    if (authenticated) {
                        this.signedin$.next(authenticated)
                    } else {
                        this.signedin$.next(false)
                    }
                })
            )
    }

    signin(credentials: SigninCredentials) {
        return this.http
            .post<SigninResponse>(`${this.rootUrl}/teacher/login`, credentials)
            .pipe(
                tap((response) => {
                    console.log(response)
                    localStorage.setItem('accessToken', response.accessToken)
                    this.signedin$.next(true)
                })
            )
    }

    signout() {
        localStorage.removeItem('accessToken')
        return this.signedin$.next(false)
    }
}
