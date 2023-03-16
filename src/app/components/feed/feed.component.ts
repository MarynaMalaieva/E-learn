import {Component} from '@angular/core';
import {RestService} from "../../services/rest.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
    title = 'E-learn';

    public courses$ = this.rest.getCourses();

    constructor(private rest: RestService) {
    }
}
