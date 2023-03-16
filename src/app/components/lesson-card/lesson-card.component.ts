import {Component, Input} from '@angular/core';
import {Course, Lesson} from "../../models/rest.model";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {PopUpComponent} from "../pop-up/pop-up.component";
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.less']
})
export class LessonCardComponent {
    @Input() public lesson: Lesson | undefined;
    constructor(private dialogRef: MatDialog) {}

    onLessonClick() {
        if (this.lesson?.status === 'unlocked') {
            this.dialogRef.open(PopUpComponent);
        } else {
            console.log('This lesson is ' +this.lesson?.status)
        }
    }
}
