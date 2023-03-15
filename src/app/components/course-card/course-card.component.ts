import {Component, Input} from '@angular/core';
import {Course} from "../../models/rest.model";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent {
    @Input() public course: Course | undefined;

    onCardClick() {
        console.log("DOOOOONNNEEEEE      "+this.course?.title)
    }
}
