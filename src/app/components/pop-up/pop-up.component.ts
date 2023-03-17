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
            const oldLessonTime = courseLessonsProgress[this.data.courseId]
                && courseLessonsProgress[this.data.courseId][this.data.lesson?.id]
            oldLessonTime && this.setCurrentTime(oldLessonTime);
            hls.loadSource(this.data.lesson.link);
            hls.attachMedia(this.video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                this.video.play();
            });
            setInterval(() => {
                courseLessonsProgress[this.data.courseId] = courseLessonsProgress[this.data.courseId] || {};
                courseLessonsProgress[this.data.courseId][this.data.lesson?.id] = this.getCurrentTime()
                this.setLessonsProgress(courseLessonsProgress)

                console.log('works')
            }, 5000)
        }
    }

    public getCurrentTime(): number {
        console.log(">>> TIME: ", this.video.currentTime);
        console.log(this.data)
        return this.video.currentTime
    }

    public setCurrentTime(currentTime: number) {
        this.video.currentTime = currentTime
    }

    public getLessonsProgress(): CourseLessonProgress {
        const dataFromLocalStorage = localStorage.getItem(LESSONS_PROGRESS);
        return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : {};
    }

    public setLessonsProgress(courseLessonProgress: CourseLessonProgress) {
        localStorage.setItem(LESSONS_PROGRESS, JSON.stringify(courseLessonProgress))
    }


}
