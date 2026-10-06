export interface StackItem {
  name: string
  category: 'Frontend & UI' | 'Backend & Database' | 'Tools & Deployment'
  core?: boolean
  role?: string
}

export const stack: StackItem[] = [
  { name: 'Next.js', category: 'Frontend & UI', core: true, role: 'Primary Framework' },
  { name: 'React', category: 'Frontend & UI', core: true, role: 'UI Library' },
  { name: 'TypeScript', category: 'Frontend & UI', core: true, role: 'Type Safety' },
  { name: 'Tailwind CSS', category: 'Frontend & UI' },
  { name: 'Figma', category: 'Frontend & UI' },
  { name: 'HTML5', category: 'Frontend & UI' },
  { name: 'CSS3', category: 'Frontend & UI' },
  { name: 'Bootstrap', category: 'Frontend & UI' },

  { name: 'Node.js', category: 'Backend & Database', core: true, role: 'Backend Runtime' },
  { name: 'PostgreSQL', category: 'Backend & Database', core: true, role: 'Primary Database' },
  { name: 'Supabase', category: 'Backend & Database' },
  { name: 'Prisma', category: 'Backend & Database' },
  { name: 'Python', category: 'Backend & Database' },
  { name: 'FastAPI', category: 'Backend & Database' },
  { name: 'Laravel', category: 'Backend & Database' },
  { name: 'Java', category: 'Backend & Database' },
  { name: 'C++', category: 'Backend & Database' },
  { name: 'Swift', category: 'Backend & Database' },
  { name: 'Kotlin', category: 'Backend & Database' },

  { name: 'Vercel', category: 'Tools & Deployment', core: true, role: 'Hosting & Edge' },
  { name: 'Git', category: 'Tools & Deployment' },
  { name: 'GitHub', category: 'Tools & Deployment' },
  { name: 'Docker', category: 'Tools & Deployment' },
  { name: 'NPM', category: 'Tools & Deployment' },
  { name: 'VS Code', category: 'Tools & Deployment' },
  { name: 'Postman', category: 'Tools & Deployment' },
  { name: 'Bash', category: 'Tools & Deployment' },
  { name: 'GoLand', category: 'Tools & Deployment' },
  { name: 'PowerShell', category: 'Tools & Deployment' },
  { name: 'Android Studio', category: 'Tools & Deployment' },
  { name: 'Groq', category: 'Tools & Deployment' },
  { name: 'Claude AI', category: 'Tools & Deployment' },
  { name: 'Perplexity', category: 'Tools & Deployment' },
  { name: 'OpenCode', category: 'Tools & Deployment' },
]
