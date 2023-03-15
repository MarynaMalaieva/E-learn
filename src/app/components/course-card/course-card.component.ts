import {Component, Input} from '@angular/core';
import {Course} from "../../models/rest.model";
import {RestService} from "../../services/rest.service";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent {
    @Input() public course: Course | undefined;


    constructor(public r: RestService) {
    }

    onCardClick() {
        this.course?.id && this.r.getCourse(this.course.id).subscribe(r => {
            console.log(">>> RES: ", r)
        })
    }
}
