import {Component, ViewChild} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent {
    public currentPage = 0;

    @ViewChild(MatPaginator)
    public paginator: MatPaginator | undefined;

    public courses$ = this.rest.getCourses();

    constructor(private rest: RestService) {
    }

}
