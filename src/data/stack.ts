export interface StackItem {
  name: string
  category: 'Frontend & UI' | 'Backend & Database' | 'Tools & Deployment'
}

export const stack: StackItem[] = [
  { name: 'Next.js', category: 'Frontend & UI' },
  { name: 'React', category: 'Frontend & UI' },
  { name: 'TypeScript', category: 'Frontend & UI' },
  { name: 'Tailwind CSS', category: 'Frontend & UI' },
  { name: 'Figma', category: 'Frontend & UI' },
  { name: 'HTML5', category: 'Frontend & UI' },
  { name: 'CSS3', category: 'Frontend & UI' },
  { name: 'Bootstrap', category: 'Frontend & UI' },

  { name: 'Node.js', category: 'Backend & Database' },
  { name: 'PostgreSQL', category: 'Backend & Database' },
  { name: 'Supabase', category: 'Backend & Database' },
  { name: 'Prisma', category: 'Backend & Database' },
  { name: 'Python', category: 'Backend & Database' },
  { name: 'FastAPI', category: 'Backend & Database' },
  { name: 'Laravel', category: 'Backend & Database' },
  { name: 'Java', category: 'Backend & Database' },
  { name: 'C++', category: 'Backend & Database' },
  { name: 'Swift', category: 'Backend & Database' },

  { name: 'Vercel', category: 'Tools & Deployment' },
  { name: 'Git', category: 'Tools & Deployment' },
  { name: 'GitHub', category: 'Tools & Deployment' },
  { name: 'Docker', category: 'Tools & Deployment' },
  { name: 'NPM', category: 'Tools & Deployment' },
  { name: 'VS Code', category: 'Tools & Deployment' },
  { name: 'Postman', category: 'Tools & Deployment' },
  { name: 'Bash', category: 'Tools & Deployment' },
  { name: 'GoLand', category: 'Tools & Deployment' },
]
