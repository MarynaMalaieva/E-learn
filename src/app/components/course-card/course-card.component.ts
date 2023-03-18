import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Course} from "../../models/rest.model";
import {Router} from "@angular/router";
import Hls from "hls.js";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent {
    @Input() public course: Course | undefined;
    public hover = false;

    constructor(private router: Router) {
    }

    onCardClick() {
        this.router.navigate(['course/'+this.course?.id]);
    }
}
