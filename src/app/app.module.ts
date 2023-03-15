import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './components/course-card/course-card.component';
import {HttpClientModule} from "@angular/common/http";
import { FeedComponent } from './components/feed/feed.component';
import { LessonCardComponent } from './components/lesson-card/lesson-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    FeedComponent,
    LessonCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
