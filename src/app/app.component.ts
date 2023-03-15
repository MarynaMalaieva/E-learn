import {Component, OnInit} from '@angular/core';
import {RestService} from "./services/rest.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'E-learn';

    constructor(private rest: RestService) {
    }

    public ngOnInit(): void {
        this.rest.getCourses().subscribe(courses => {
            console.log(courses)
        })
    }

}
