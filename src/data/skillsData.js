export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'HTML', level: 'Comfortable' },
      { name: 'CSS', level: 'Comfortable' },
      { name: 'JavaScript', level: 'Comfortable' },
      { name: 'React', level: 'Improving' },
      { name: 'Tailwind CSS', level: 'Comfortable' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 'Learning' },
      { name: 'Express.js', level: 'Learning' },
      { name: 'Supabase', level: 'Learning' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 'Beginner' },
      { name: 'PostgreSQL', level: 'Comfortable' },
      { name: 'Supabase', level: 'Learning' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'C', level: 'Comfortable' },
      { name: 'C++', level: 'Comfortable' },
      { name: 'Java', level: 'Beginner' },
      { name: 'Python', level: 'Comfortable' },
      { name: 'JavaScript', level: 'Comfortable' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Version Control',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 'Comfortable' },
      { name: 'GitHub', level: 'Comfortable' },
      { name: 'VS Code', level: 'Comfortable' },
      { name: 'Vercel', level: 'Comfortable' },
    ],
  },
  {
    id: 'learning',
    title: 'Currently Learning',
    icon: 'Sparkles',
    skills: [
      { name: 'ML / AI ', level: 'Learning' },
      { name: 'Thesis Writing', level: 'Learning' },
      { name: 'Advanced React', level: 'Learning' },
      { name: 'Backend Dev', level: 'Learning' },
    ],
  },
]

export const levelColors = {
  Comfortable: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30',
  Improving:   'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-500/30',
  Learning:    'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-500/30',
  Beginner:    'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-500/30',
}

export const levelBar = {
  Comfortable: { percent: 80, color: 'bg-emerald-500' },
  Improving:   { percent: 60, color: 'bg-blue-500' },
  Learning:    { percent: 40, color: 'bg-amber-500' },
  Beginner:    { percent: 25, color: 'bg-purple-500' },
}
