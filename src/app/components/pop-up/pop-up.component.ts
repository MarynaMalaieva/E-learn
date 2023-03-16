import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Hls from 'hls.js';

@Component({
    selector: 'app-pop-up',
    templateUrl: './pop-up.component.html',
    styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements AfterViewInit {
    @ViewChild('videoLesson') public videoLesson: ElementRef | undefined;

    ngAfterViewInit(): void {
        const video = this.videoLesson?.nativeElement;
        const hls = new Hls();
        hls.loadSource('https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play();
        });
    }
}
