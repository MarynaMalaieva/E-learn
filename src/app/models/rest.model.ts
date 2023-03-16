export interface ExtendedCourse {
    id: string,
    title: string,
    tags: string[],
    launchDate: string,
    status: string,
    description: string,
    duration: number,
    previewImageLink: string,
    rating: number,
    lessons: Lesson[],
    meta: {
        slug: string,
        skills: string[],
        courseVideoPreview: {
            link: string,
            duration: number,
            previewImageLink: string
        }
    }
}

export interface Lesson {
    id: string,
    title: string,
    duration: number,
    order: number,
    type: string,
    status: string,
    link: string,
    previewImageLink: string,
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
