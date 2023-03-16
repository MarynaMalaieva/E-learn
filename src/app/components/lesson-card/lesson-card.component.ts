import {Component, Input} from '@angular/core';
import {Course, Lesson} from "../../models/rest.model";

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.less']
})
export class LessonCardComponent {
    @Input() public lesson: Lesson | undefined;

    onCardClick() {
        console.log("DOOOOONNNEEEEE      "+this.lesson?.title)
    }
}
