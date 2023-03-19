import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.less']
})
export class FeedComponent {
    public currentPage = 0;
    public courses$ = this.dataService.getCourses();
    @ViewChild(MatPaginator)
    public paginator: MatPaginator | undefined;

    constructor(private dataService: DataService) {
    }
}
