import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CourseCardComponent} from './components/course-card/course-card.component';
import {HttpClientModule} from "@angular/common/http";
import {FeedComponent} from './components/feed/feed.component';
import {LessonCardComponent} from './components/lesson-card/lesson-card.component';
import {CoursePageComponent} from './components/course-page/course-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        CourseCardComponent,
        FeedComponent,
        LessonCardComponent,
        CoursePageComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
