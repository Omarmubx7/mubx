
import type { Metadata } from 'next';
import CourseTrackerClient from './CourseTrackerClient';

export const metadata: Metadata = {
    title: 'Course Tracker | MUBX',
    description: 'Track your university courses, calculate your GPA, and manage your academic progress with our precision tools.',
    openGraph: {
        title: 'Course Tracker | MUBX',
        description: 'Track your university courses, calculate your GPA, and manage your academic progress with our precision tools.',
    },
};

export default function CourseTrackerPage() {
    return <CourseTrackerClient />;
}
