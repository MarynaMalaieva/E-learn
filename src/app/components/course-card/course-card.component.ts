import {Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {Course} from "../../models/rest.model";
import {Router} from "@angular/router";
import Hls from "hls.js";

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent implements OnDestroy {
    @Input() public course: Course | undefined;
    public hover = false;
    @ViewChild('videoPreview') public videoPreview: ElementRef | undefined;
    private video: any;
    private hls: Hls | undefined;

    constructor(private router: Router) {
    }

    public ngOnDestroy(): void {
        this.hls?.stopLoad();
    }

    public initPlayer(link: string) {
        if (link && this.video) {
            this.hls = new Hls();
            this.hls.loadSource(link);
            this.hls.attachMedia(this.video);
        }
    }

    public onCardClick() {
        this.router.navigate(['course/' + this.course?.id]);
    }

    public onMouseEnter() {
        this.hover = true;
        this.video = this.videoPreview?.nativeElement;
        const link = this.course?.meta?.courseVideoPreview?.link;
        link && this.initPlayer(link);
    }
}
