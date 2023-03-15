import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Auth} from "../utils/auth.utils";
import {Courses} from "../models/rest.model";

const COURSES_URL = "/api/v1/core/preview-courses"
const COURSE_URL = "/api/v1/core/preview-courses/"

@Injectable({
    providedIn: 'root'
})
export class RestService {

    public headers: HttpHeaders = new HttpHeaders(`Authorization: Bearer ${Auth.token}`)

    constructor(private httpClient: HttpClient) {
    }

    public getCourses(): Observable<Courses> {
        return this.httpClient.get<Courses>(COURSES_URL, {headers: this.headers});
    }

    public getCourse(courseId: string): Observable<any> {
        return this.httpClient.get(COURSE_URL + courseId, {headers: this.headers})
    }
}
