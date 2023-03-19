import {AfterViewInit, Component, ElementRef, HostListener, Inject, OnDestroy, ViewChild} from '@angular/core';
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
export class PopUpComponent implements AfterViewInit, OnDestroy {
    @ViewChild('videoLesson') public videoLesson: ElementRef | undefined;
    public video: any;
    private timer: number | undefined;
    private hls: Hls | undefined;
    private minVideoSpeed = 0.25;
    private maxVideoSpeed = 2;
    private videoSpeedStep = 0.25;

    constructor(@Inject(MAT_DIALOG_DATA) public data: { lesson: Lesson, courseId: string }) {
    }

    public ngAfterViewInit(): void {
        this.video = this.videoLesson?.nativeElement;
        if (this.data.lesson.link) {
            this.hls = new Hls();
            let courseLessonsProgress = this.getLessonsProgress();
            const oldLessonTime = courseLessonsProgress[this.data.courseId]
                && courseLessonsProgress[this.data.courseId][this.data.lesson?.id]
            oldLessonTime && this.setCurrentTime(oldLessonTime);
            this.hls.loadSource(this.data.lesson.link);
            this.hls.attachMedia(this.video);
            this.timer = window.setInterval(() => {
                courseLessonsProgress[this.data.courseId] = courseLessonsProgress[this.data.courseId] || {};
                courseLessonsProgress[this.data.courseId][this.data.lesson?.id] = this.getCurrentTime()
                this.setLessonsProgress(courseLessonsProgress)
            }, 5000)
        }
    }

    public ngOnDestroy(): void {
        this.timer && clearInterval(this.timer);
        this.hls?.stopLoad();
    }

    @HostListener('window:keydown', ['$event'])
    public handleKeyboardEvent(event: KeyboardEvent) {
        if (this.video) {
            if (event.key === "4" && this.video.playbackRate > this.minVideoSpeed) {
                this.video.playbackRate -= this.videoSpeedStep;
            }
            if (event.key === "6" && this.video.playbackRate < this.maxVideoSpeed) {
                this.video.playbackRate += this.videoSpeedStep;
            }
        }
    }

    public getCurrentTime(): number {
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
