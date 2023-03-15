import {Component, Input} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Course} from "../../models/rest.model";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.less']
})
export class CoursePageComponent {
    @Input() public courseId: string | undefined;


    constructor(private rest: RestService) {

    }

}