import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Auth} from "../utils/auth.utils";
import {Courses} from "../models/rest.model";

const COURSES_URL = "/api/v1/core/preview-courses"
const COURSE_URL = "/api/v1/core/preview-courses/:courseId"

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

  public getCourse(): Observable<any> {
    return this.httpClient.get(COURSE_URL, {headers: this.headers})
  }
}
