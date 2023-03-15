import {Component, Input} from '@angular/core';
import {Course} from "../../models/rest.model";
import {RestService} from "../../services/rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent {
    @Input() public course: Course | undefined;


    constructor(private router: Router) {
    }

    onCardClick() {
        this.router.navigate(['course/'+this.course?.id]);
    }
}
