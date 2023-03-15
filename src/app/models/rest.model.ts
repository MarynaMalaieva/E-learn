export interface ExtendedCourse {
}

export interface Course {
    containsLockedLessons: boolean;
    title: string;
    description: string;
    duration: number;
    id: string;
    launchDate: string;
    lessonsCount: number;
    previewImageLink: string;
    rating: number;
    meta: {
        "slug": string,
        "skills": string[],
        "courseVideoPreview": {
            "link": string,
            "duration": number,
            "previewImageLink": string
        }
    }
}

export interface Courses {
    courses: Course[];
}
