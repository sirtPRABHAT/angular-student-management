import { Injectable } from '@angular/core'
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType,
    HTTP_INTERCEPTORS,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap, filter } from 'rxjs/operators'

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Modify or log the outgoing request
        const token = localStorage.getItem('accessToken')
        if (token) {
            const modifiedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token),
            })

            return next.handle(modifiedReq)
        } else {
            return next.handle(req)
        }
    }
}
