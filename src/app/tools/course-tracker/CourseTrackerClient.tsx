'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Calculator, Save, RotateCcw, GraduationCap, BookOpen, Clock } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';

// Types
type Grade = 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'F';

interface Course {
    id: string;
    name: string;
    creditHours: number;
    grade: Grade;
}

// Constants
const GRADE_POINTS: Record<Grade, number> = {
    'A': 4.0, 'A-': 3.75, 'B+': 3.5, 'B': 3.0,
    'B-': 2.75, 'C+': 2.5, 'C': 2.0, 'C-': 1.75,
    'D+': 1.5, 'D': 1.0, 'F': 0.0
};

const GRADES = Object.keys(GRADE_POINTS) as Grade[];

const STORAGE_KEY = 'mubx-course-tracker-data';

export default function CourseTrackerClient() {
    // State
    const [courses, setCourses] = useState<Course[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cumulativeGPA, setCumulativeGPA] = useState<number | null>(null);
    const [newCourse, setNewCourse] = useState<{ name: string; creditHours: string; grade: Grade }>({
        name: '',
        creditHours: '3',
        grade: 'A'
    });

    // Load data from localStorage
    useEffect(() => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            try {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setCourses(JSON.parse(savedData));
            } catch (e) {
                console.error('Failed to load course data', e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save data to localStorage
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
        }
    }, [courses, isLoaded]);

    // Calculations
    const calculateStats = () => {
        const totalPoints = courses.reduce((acc, course) => {
            return acc + (GRADE_POINTS[course.grade] * course.creditHours);
        }, 0);

        const totalHours = courses.reduce((acc, course) => acc + course.creditHours, 0);

        const gpa = totalHours > 0 ? totalPoints / totalHours : 0;

        return { totalPoints, totalHours, gpa };
    };

    const { totalHours, gpa } = calculateStats();

    // Handlers
    const handleAddCourse = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCourse.name.trim()) return;

        const course: Course = {
            id: crypto.randomUUID(),
            name: newCourse.name,
            creditHours: parseInt(newCourse.creditHours) || 3,
            grade: newCourse.grade
        };

        setCourses([...courses, course]);
        setNewCourse({ ...newCourse, name: '' });
    };

    const handleRemoveCourse = (id: string) => {
        setCourses(courses.filter(c => c.id !== id));
    };

    const handleReset = () => {
        if (window.confirm('Are you sure you want to clear all courses? This cannot be undone.')) {
            setCourses([]);
        }
    };

    if (!isLoaded) return null;

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/20 text-neon text-sm font-medium mb-4">
                        <GraduationCap className="w-4 h-4" />
                        <span>Academic Tools</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                        <AnimatedText text="Course Tracker & GPA Calculator" />
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Keep track of your academic progress with our precision GPA calculator.
                        All your data is stored locally on your device using premium privacy standards.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-2xl bg-glass border border-border/50 shadow-lg relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="text-muted text-sm font-medium uppercase tracking-wider mb-1">Cumulative GPA</div>
                            <div className="text-4xl font-bold font-display text-foreground flex items-baseline gap-2">
                                {gpa.toFixed(2)}
                                <span className="text-sm font-normal text-muted">/ 4.00</span>
                            </div>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neon/10 group-hover:text-neon/20 transition-colors duration-500">
                            <Calculator className="w-16 h-16" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-2xl bg-glass border border-border/50 shadow-lg relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="text-muted text-sm font-medium uppercase tracking-wider mb-1">Total Hours</div>
                            <div className="text-4xl font-bold font-display text-foreground">
                                {totalHours}
                            </div>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500/10 group-hover:text-blue-500/20 transition-colors duration-500">
                            <Clock className="w-16 h-16" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-6 rounded-2xl bg-glass border border-border/50 shadow-lg relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="text-muted text-sm font-medium uppercase tracking-wider mb-1">Total Courses</div>
                            <div className="text-4xl font-bold font-display text-foreground">
                                {courses.length}
                            </div>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-500/10 group-hover:text-purple-500/20 transition-colors duration-500">
                            <BookOpen className="w-16 h-16" />
                        </div>
                    </motion.div>
                </div>

                {/* Input Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="p-6 md:p-8 rounded-3xl bg-card border border-border shadow-sm"
                >
                    <form onSubmit={handleAddCourse} className="flex flex-col md:flex-row gap-4 items-end">
                        <div className="flex-1 w-full space-y-2">
                            <label htmlFor="courseName" className="text-sm font-medium text-muted">Course Name</label>
                            <input
                                id="courseName"
                                type="text"
                                placeholder="e.g. Advanced AI Algorithms"
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all placeholder:text-muted/50"
                                value={newCourse.name}
                                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                            />
                        </div>

                        <div className="w-full md:w-32 space-y-2">
                            <label htmlFor="creditHours" className="text-sm font-medium text-muted">Credits</label>
                            <select
                                id="creditHours"
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all appearance-none cursor-pointer"
                                value={newCourse.creditHours}
                                onChange={(e) => setNewCourse({ ...newCourse, creditHours: e.target.value })}
                            >
                                {[1, 2, 3, 4, 5, 6].map(h => (
                                    <option key={h} value={h}>{h} Hrs</option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full md:w-32 space-y-2">
                            <label htmlFor="grade" className="text-sm font-medium text-muted">Grade</label>
                            <select
                                id="grade"
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all appearance-none cursor-pointer font-mono"
                                value={newCourse.grade}
                                onChange={(e) => setNewCourse({ ...newCourse, grade: e.target.value as Grade })}
                            >
                                {GRADES.map(g => (
                                    <option key={g} value={g}>{g}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={!newCourse.name.trim()}
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-neon text-white font-medium hover:bg-neon/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            <span>Add</span>
                        </button>
                    </form>
                </motion.div>

                {/* Course List */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold font-display">Your Courses</h3>
                        {courses.length > 0 && (
                            <button
                                onClick={handleReset}
                                className="text-sm text-red-500 hover:text-red-400 flex items-center gap-1 transition-colors px-3 py-1 rounded-lg hover:bg-red-500/10"
                            >
                                <Trash2 className="w-4 h-4" />
                                Clear All
                            </button>
                        )}
                    </div>

                    <div className="grid gap-3">
                        <AnimatePresence mode='popLayout'>
                            {courses.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="p-12 text-center border border-dashed border-border rounded-2xl bg-card/50"
                                >
                                    <BookOpen className="w-12 h-12 text-muted/30 mx-auto mb-4" />
                                    <p className="text-muted text-lg">No courses added yet.</p>
                                    <p className="text-muted/60 text-sm">Start by adding your current or past courses above.</p>
                                </motion.div>
                            ) : (
                                courses.map((course) => (
                                    <motion.div
                                        key={course.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="group flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 hover:border-neon/30 transition-all hover:shadow-lg hover:shadow-neon/5"
                                    >
                                        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                            <div className="md:col-span-8 font-medium text-lg">{course.name}</div>
                                            <div className="md:col-span-2 text-sm text-muted bg-background/50 py-1 px-3 rounded-md w-fit md:w-auto text-center">
                                                {course.creditHours} Credits
                                            </div>
                                            <div className={`md:col-span-2 font-bold font-mono text-xl ${['A', 'A-'].includes(course.grade) ? 'text-neon' : 'text-foreground'
                                                }`}>
                                                {course.grade}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveCourse(course.id)}
                                            className="ml-4 p-2 text-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                                            aria-label="Remove course"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
