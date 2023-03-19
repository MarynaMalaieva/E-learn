import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from "../../models/rest.model";
import {MatDialog} from "@angular/material/dialog";
import {PopUpComponent} from "../pop-up/pop-up.component";

@Component({
    selector: 'app-lesson-card',
    templateUrl: './lesson-card.component.html',
    styleUrls: ['./lesson-card.component.less']
})
export class LessonCardComponent implements OnInit {
    @Input() public lesson: Lesson | undefined;
    @Input() public courseId: string | undefined | null;
    public _locked: boolean | undefined;

    constructor(private dialogRef: MatDialog) {
    }

    public ngOnInit(): void {
        this._locked = this.lesson?.status === 'locked';
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
