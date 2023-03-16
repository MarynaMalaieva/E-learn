import {Component, Input, OnInit} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Course, ExtendedCourse} from "../../models/rest.model";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'app-course-page',
    templateUrl: './course-page.component.html',
    styleUrls: ['./course-page.component.less']
})
export class CoursePageComponent implements OnInit {
    public courseId: string | null | undefined;
    public course$: Observable<ExtendedCourse> | undefined;

    // public course$ = this.rest.getCourse(this.courseId);


    constructor(private rest: RestService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.courseId = this.route.snapshot.paramMap.get('courseId');
        if (this.courseId) {
            this.course$ =  this.rest.getCourseById(this.courseId);
        }

    }

}
