import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { z } from 'zod';

// Database tables (Issue #11)
export const courses = sqliteTable('courses', {
  id: integer('id').primaryKey(),
  title: text('title').notNull()
});

export const chapters = sqliteTable('chapters', {
  id: integer('id').primaryKey(),
  courseId: integer('course_id').references(() => courses.id),
  title: text('title').notNull()
});

export const quizzes = sqliteTable('quizzes', {
  id: integer('id').primaryKey(),
  chapterId: integer('chapter_id').references(() => chapters.id),
  title: text('title').notNull()
});

export const questions = sqliteTable('questions', {
  id: integer('id').primaryKey(),
  quizId: integer('quiz_id').references(() => quizzes.id),
  text: text('text').notNull(),
  answer: text('answer').notNull()
});

export const submissions = sqliteTable('submissions', {
  id: integer('id').primaryKey(),
  quizId: integer('quiz_id').references(() => quizzes.id),
  userId: integer('user_id'),
  score: integer('score')
});

export const userProfiles = sqliteTable('user_profiles', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  country: text('country')
});

export const courseSchema = z.object({ id: z.number(), title: z.string() });
