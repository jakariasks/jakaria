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
      { name: 'Bootstrap', level: 'Comfortable' },
      { name: 'Tailwind CSS', level: 'Comfortable' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'PHP', level: 'Beginner' },
      { name: 'Node.js', level: 'Learning' },
      { name: 'REST API', level: 'Learning' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 'Beginner' },
      { name: 'RDBMS Concepts', level: 'Comfortable' },
      { name: 'Supabase', level: 'Beginner' },
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
      { name: 'Python', level: 'Beginner' },
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
      { name: 'Vite', level: 'Comfortable' },
      { name: 'Vercel', level: 'Comfortable' },
    ],
  },
  {
    id: 'dsa',
    title: 'Problem Solving',
    icon: 'BrainCircuit',
    skills: [
      { name: 'DSA Basics', level: 'Improving' },
      { name: 'Logical Thinking', level: 'Comfortable' },
      { name: 'Codeforces', level: 'Improving' },
      { name: 'LeetCode', level: 'Improving' },
    ],
  },
  {
    id: 'learning',
    title: 'Currently Learning',
    icon: 'Sparkles',
    skills: [
      { name: 'MERN Stack', level: 'Learning' },
      { name: 'RESTful APIs', level: 'Learning' },
      { name: 'Advanced React', level: 'Learning' },
      { name: 'Backend Dev', level: 'Learning' },
    ],
  },
]

export const levelColors = {
  Comfortable: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30',
  Improving: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-500/30',
  Learning: 'bg-amber-100 dark:bg-gold-500/20 text-amber-700 dark:text-gold-400 border-amber-300 dark:border-gold-500/30',
  Beginner: 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-500/30',
}
