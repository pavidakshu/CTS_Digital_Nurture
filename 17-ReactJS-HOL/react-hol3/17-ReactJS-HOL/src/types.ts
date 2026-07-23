export interface Student {
  id: number
  name: string
  age: number
  course: string
  marks: number
}

export interface StudentCardProps {
  student: Student
  onDelete: (id: number) => void
}

export interface AddStudentFormProps {
  onAdd: (student: Omit<Student, 'id'>) => void
}
