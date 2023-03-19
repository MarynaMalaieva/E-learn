import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Course, ExtendedCourse, Lesson} from "../../models/rest.model";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {PopUpComponent} from "../pop-up/pop-up.component";
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import Hls from "hls.js";

@Component({
    selector: 'app-lesson-card',
    templateUrl: './lesson-card.component.html',
    styleUrls: ['./lesson-card.component.less']
})
export class LessonCardComponent implements OnInit {
    @Input() public lesson: Lesson | undefined;
    @Input() public courseId: string | undefined | null;
    public locked: boolean | undefined;

    constructor(private dialogRef: MatDialog) {
    }

    ngOnInit(): void {
        this.locked = this.lesson?.status === 'locked';
    }



    public onLessonClick() {
        if (this.lesson?.status === 'unlocked') {
            this.dialogRef.open(PopUpComponent, {
                data: {
                    lesson: this.lesson,
                    courseId: this.courseId
                },
            });
        } else {
            console.log('This lesson is ' + this.lesson?.status)
        }
    }
}
