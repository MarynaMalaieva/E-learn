import {Component, Input} from '@angular/core';
import {Course} from "../../models/rest.model";

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.less']
})
export class LessonCardComponent {
    @Input() public course: Course | undefined;

    onCardClick() {
        console.log("DOOOOONNNEEEEE      "+this.course?.title)
    }
}
