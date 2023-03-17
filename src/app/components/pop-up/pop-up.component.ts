import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import Hls from 'hls.js';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Lesson} from "../../models/rest.model";


@Component({
    selector: 'app-pop-up',
    templateUrl: './pop-up.component.html',
    styleUrls: ['./pop-up.component.less']
})
export class PopUpComponent implements AfterViewInit {
    @ViewChild('videoLesson') public videoLesson: ElementRef | undefined;
    private video: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: Lesson) {
    }

    ngAfterViewInit(): void {
        this.video = this.videoLesson?.nativeElement;
        const hls = new Hls();
        hls.loadSource(this.data.link);
        hls.attachMedia(this.video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            this.video.play();
        });
    }

    getCurrentTime() {
        console.log(">>> TIME: ", this.video.currentTime);
        console.log(this.data)
    }
}
