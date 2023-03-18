import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Course, ExtendedCourse, Lesson} from "../../models/rest.model";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import Hls from "hls.js";

@Component({
    selector: 'app-course-page',
    templateUrl: './course-page.component.html',
    styleUrls: ['./course-page.component.less']
})
export class CoursePageComponent implements OnInit, AfterViewInit, OnDestroy {
    public courseId: string | null | undefined;
    public _course: ExtendedCourse | undefined;
    @ViewChild('videoLesson') public videoLesson: ElementRef | undefined;
    private video: any;
    private hls: Hls | undefined;
    private subscription: Subscription | undefined;
    private contentRendered = false;

    constructor(private rest: RestService,
                private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.courseId = this.route.snapshot.paramMap.get('courseId');
        if (this.courseId) {
            this.subscription = this.rest.getCourseById(this.courseId)
                .subscribe(course => {
                    course.lessons = course.lessons.sort(this.sortFunc)
                    this._course = course;
                    const link = this._course?.lessons[0].link;
                    link && this.initPlayer(link);
                })
        }
    }

    public ngAfterViewInit(): void {
        this.contentRendered = true;
        this.video = this.videoLesson?.nativeElement;
        const link = this._course?.lessons[0].link;
        link && this.initPlayer(link);
    }

    public ngOnDestroy(): void {
        this.subscription && this.subscription.unsubscribe();
        this.hls?.stopLoad();
    }

    public initPlayer(link: string) {
        if (this._course?.lessons[0].link) {
            this.hls = new Hls();
            this.hls.loadSource(link);
            this.hls.attachMedia(this.video);
            this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                this.video.play();
            });
        }
    }

    public sortFunc(a: Lesson, b: Lesson) {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0;
    }
}
