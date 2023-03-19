import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FeedComponent} from "./components/feed/feed.component";
import {CoursePageComponent} from "./components/course-page/course-page.component";

const routes: Routes = [
    {path: '', redirectTo: 'feed', pathMatch: 'full'},
    {path: 'feed', component: FeedComponent},
    {path: 'course/:courseId', component: CoursePageComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule {
}
