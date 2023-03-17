import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import Hls from 'hls.js';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Lesson} from "../../models/rest.model";


interface CourseLessonProgress {
    [key: string]: {
        [key: string]: number
    }
}

const LESSONS_PROGRESS = "lessonsProgress"

@Component({
    selector: 'app-pop-up',
    templateUrl: './pop-up.component.html',
    styleUrls: ['./pop-up.component.less']
})
export class PopUpComponent implements AfterViewInit {
    @ViewChild('videoLesson') public videoLesson: ElementRef | undefined;
    private video: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: { lesson: Lesson, courseId: string }) {
    }

    ngAfterViewInit(): void {
        this.video = this.videoLesson?.nativeElement;
        if (this.data.lesson.link) {
            const hls = new Hls();
            let courseLessonsProgress = this.getLessonsProgress();
            this.setCurrentTime(courseLessonsProgress[this.data.courseId][this.data.lesson?.id]);
            hls.loadSource(this.data.lesson.link);
            hls.attachMedia(this.video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                this.video.play();
            });
            setInterval(() => {


                console.log('works')
            }, 5000)
        }
    }

    getCurrentTime(): number {
        console.log(">>> TIME: ", this.video.currentTime);
        console.log(this.data)
        return this.video.currentTime
    }
    setCurrentTime(currentTime: number) {
        this.video.currentTime = currentTime
    }

    public getLessonsProgress(): CourseLessonProgress {
        const dataFromLocalStorage = localStorage.getItem(LESSONS_PROGRESS);
        return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : {};
    }

    public setTimeFromLocalStorage() {
        localStorage.setItem(LESSONS_PROGRESS, "")
    }


}
