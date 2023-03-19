import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, switchMap, tap} from "rxjs";
import {Courses, ExtendedCourse} from "../models/rest.model";
import {RestService} from "./rest.service";
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private restService: RestService, private authService: AuthService) {
    }

    public getCourses(): Observable<Courses> {
        const courses$ = this.restService.getCourses().pipe(
            catchError(() => this.updateToken().pipe(
                    switchMap(() => this.restService.getCourses()),
                ),
            ),
        );

        return this.handleToken().pipe(
            switchMap(() => courses$),
        );
    }

    public getCourseById(courseId: string): Observable<ExtendedCourse> {
        const courseById$ = this.restService.getCourseById(courseId).pipe(
            catchError(() => this.updateToken().pipe(
                    switchMap(() => this.restService.getCourseById(courseId)),
                ),
            ),
        );

        return this.handleToken().pipe(
            switchMap(() => courseById$),
        );
    }

    private handleToken(): Observable<void | string> {
        return !this.authService.getToken() ? this.updateToken() : new BehaviorSubject("");
    }

    private updateToken(): Observable<string> {
        return this.restService.getToken().pipe(
            map(token => token.token),
            tap(token => this.authService.setToken(token)),
        );
    }
}
