export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  COMPLEX = 'COMPLEX', // For tables, code completion, etc.
  FILL_IN_THE_BLANK = 'FILL_IN_THE_BLANK',
  ESSAY = 'ESSAY', // For short answer/essay questions
}

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: string[]; // For single choice
  correctAnswer?: string; // For single choice and true/false ('A', 'B', 'T', 'F')
  explanation: string; // Supports simple HTML/Markdown-like string
  complexContent?: string; // Additional context like code blocks or initial tables
}

export interface UserAnswers {
  [key: number]: string; // questionId: selectedOption
}