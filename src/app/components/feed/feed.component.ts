import {Component, ViewChild} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {MatPaginator} from "@angular/material/paginator";
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.less']
})
export class FeedComponent {
    public currentPage = 0;

    @ViewChild(MatPaginator)
    public paginator: MatPaginator | undefined;

    public courses$ = this.dataService.getCourses();

    constructor(private dataService: DataService) {
    }

}
