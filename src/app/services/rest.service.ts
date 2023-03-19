import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Courses, ExtendedCourse, Token} from "../models/rest.model";
import {AuthService} from "./auth.service";

const COURSES_URL = "/api/v1/core/preview-courses";
const COURSE_URL = "/api/v1/core/preview-courses/";
const TOKEN_URL = "/api/v1/auth/anonymous?platform=subscriptions";

@Injectable({
    providedIn: 'root'
})
export class RestService {
    constructor(private httpClient: HttpClient, private authService: AuthService) {
    }

    public getToken(): Observable<Token> {
        return this.httpClient.get<Token>(TOKEN_URL);
    }

    public getCourses(): Observable<Courses> {
        return this.httpClient.get<Courses>(COURSES_URL, {headers: this.authService.getHeaders()});
    }

    public getCourseById(courseId: string): Observable<ExtendedCourse> {
        return this.httpClient.get<ExtendedCourse>(COURSE_URL + courseId, {headers: this.authService.getHeaders()})
    }
}

