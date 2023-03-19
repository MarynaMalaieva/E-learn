import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CourseCardComponent} from './components/course-card/course-card.component';
import {HttpClientModule} from "@angular/common/http";
import {FeedComponent} from './components/feed/feed.component';
import {LessonCardComponent} from './components/lesson-card/lesson-card.component';
import {CoursePageComponent} from './components/course-page/course-page.component';
import {AppRoutingModule} from './app-routing.module';
import {MatDialogModule} from "@angular/material/dialog";
import {PopUpComponent} from './components/pop-up/pop-up.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    declarations: [
        AppComponent,
        CourseCardComponent,
        FeedComponent,
        LessonCardComponent,
        CoursePageComponent,
        PopUpComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
