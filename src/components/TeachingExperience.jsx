import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'
import { teachingExperience } from '../data/teachingExperienceData'

export default function TeachingExperience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="6+ Years of Impact"
          title="Teaching & Mentoring Experience"
          subtitle="Alongside software development, I have strong teaching experience in Science and ICT for SSC, HSC, and admission-level students."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teachingExperience.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
