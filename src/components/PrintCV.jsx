import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Printer, X, Download } from 'lucide-react'
import { profile } from '../data/profileData'
import { education } from '../data/educationData'
import { skillCategories } from '../data/skillsData'
import { projects } from '../data/projectsData'
import { achievements } from '../data/achievementsData'
import { teachingExperience } from '../data/teachingExperienceData'

export default function PrintCV() {
  const [open, setOpen] = useState(false)

const handlePrint = () => {
    const printContent = document.getElementById('print-area').innerHTML
    const printWindow = window.open('', '_blank', 'width=900,height=700')
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>CV — Jakaria Hasan</title>
          <meta charset="UTF-8" />
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', system-ui, sans-serif; color: #111827; background: white; }
            @page { size: A4; margin: 0.5in; }
            .no-print { display: none !important; }
            a { color: #d97706; text-decoration: none; }
            h1 { font-size: 26px; font-weight: 700; color: #111827; margin-bottom: 4px; }
            h2 { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #d97706; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
            h2::before, h2::after { content: ''; flex: 1; height: 1px; background: #fde68a; display: block; }
            .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid #f59e0b; }
            .tagline { color: #d97706; font-size: 12px; font-weight: 500; margin-bottom: 6px; }
            .meta { display: flex; flex-wrap: wrap; gap: 12px; font-size: 11px; color: #6b7280; }
            .logo { width: 52px; height: 52px; border-radius: 10px; background: linear-gradient(135deg, #f59e0b, #b45309); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 18px; flex-shrink: 0; }
            .section { margin-bottom: 18px; }
            .row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
            .row-left p:first-child { font-size: 13px; font-weight: 600; color: #111827; }
            .row-left p:last-child { font-size: 11px; color: #6b7280; margin-top: 2px; }
            .row-right { text-align: right; flex-shrink: 0; margin-left: 16px; }
            .row-right p:first-child { font-size: 11px; font-weight: 500; color: #d97706; }
            .row-right p:last-child { font-size: 11px; color: #9ca3af; }
            .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
            .skill-cat p:first-child { font-size: 11px; font-weight: 600; color: #374151; margin-bottom: 2px; }
            .skill-cat p:last-child { font-size: 11px; color: #6b7280; }
            .project { margin-bottom: 10px; }
            .project-header { display: flex; justify-content: space-between; }
            .project-header p:first-child { font-size: 13px; font-weight: 600; color: #111827; }
            .project-header p:last-child { font-size: 10px; color: #9ca3af; }
            .project-desc { font-size: 11px; color: #6b7280; margin-top: 2px; }
            .project-tech { font-size: 11px; color: #d97706; margin-top: 2px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1>${profile.name}</h1>
              <p class="tagline">${profile.tagline}</p>
              <div class="meta">
                <span>📍 ${profile.location}</span>
                <a href="mailto:${profile.email}">${profile.email}</a>
                <a href="${profile.socials.github}">github.com/jakariasks</a>
                <a href="${profile.socials.linkedin}">linkedin.com/in/jakaria-sks</a>
              </div>
            </div>
            <div class="logo">JH</div>
          </div>

          <div class="section">
            <h2>Education</h2>
            ${education.map(edu => `
              <div class="row">
                <div class="row-left">
                  <p>${edu.degree}</p>
                  <p>${edu.institution}</p>
                </div>
                <div class="row-right">
                  <p>${edu.result}</p>
                  <p>${edu.duration}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <h2>Technical Skills</h2>
            <div class="grid2">
              ${skillCategories.slice(0, 6).map(cat => `
                <div class="skill-cat">
                  <p>${cat.title}</p>
                  <p>${cat.skills.map(s => s.name).join(', ')}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="section">
            <h2>Projects</h2>
            ${projects.map(p => `
              <div class="project">
                <div class="project-header">
                  <p>${p.title}</p>
                  <p>${p.status}</p>
                </div>
                <p class="project-desc">${p.description}</p>
                <p class="project-tech">${p.tech.join(' · ')}</p>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <h2>Teaching Experience</h2>
            ${teachingExperience.map(exp => `
              <div class="row">
                <div class="row-left">
                  <p>${exp.position}</p>
                  <p>${exp.institution} · ${exp.subjects.join(', ')}</p>
                </div>
                <div class="row-right">
                  <p>${exp.duration}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <h2>Achievements</h2>
            <div class="grid2">
              ${achievements.map(a => `
                <div class="skill-cat">
                  <p>${a.title}</p>
                  <p>${a.subtitle} — ${a.organizer}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 500)
  }

  return (
    <>
      {/* Trigger button — floating left side */}
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Print CV"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111] dark:bg-white/10 border border-white/15 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 text-xs font-medium backdrop-blur transition-all"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.04 }}
      >
        <Printer size={14} />
        Print CV
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9990] bg-black/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              id="print-area"
            >
              {/* Action bar — hidden on print */}
              <div className="no-print flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-700">CV Preview</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold transition-colors"
                  >
                    <Printer size={13} />
                    Print / Save PDF
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-200 text-gray-500 transition-colors"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* CV Content */}
              <div className="p-8 sm:p-10 print-content">

                {/* Header */}
                <div className="flex items-start justify-between mb-6 pb-6 border-b-2 border-amber-500">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">{profile.name}</h1>
                    <p className="text-amber-600 font-medium text-sm mb-2">{profile.tagline}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                      <span>📍 {profile.location}</span>
                      <a href={`mailto:${profile.email}`} className="text-amber-600">{profile.email}</a>
                      <a href={profile.socials.github} className="text-amber-600">github.com/jakariasks</a>
                      <a href={profile.socials.linkedin} className="text-amber-600">linkedin.com/in/jakaria-sks</a>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">JH</span>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-6">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3 flex items-center gap-2">
                    <span className="flex-1 h-px bg-amber-200" />
                    Education
                    <span className="flex-1 h-px bg-amber-200" />
                  </h2>
                  <div className="space-y-3">
                    {education.map(edu => (
                      <div key={edu.id} className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{edu.degree}</p>
                          <p className="text-xs text-gray-500">{edu.institution}</p>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <p className="text-xs font-medium text-amber-600">{edu.result}</p>
                          <p className="text-xs text-gray-400">{edu.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3 flex items-center gap-2">
                    <span className="flex-1 h-px bg-amber-200" />
                    Technical Skills
                    <span className="flex-1 h-px bg-amber-200" />
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    {skillCategories.slice(0, 6).map(cat => (
                      <div key={cat.id}>
                        <p className="text-xs font-semibold text-gray-700 mb-1">{cat.title}</p>
                        <p className="text-xs text-gray-500">{cat.skills.map(s => s.name).join(', ')}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-6">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3 flex items-center gap-2">
                    <span className="flex-1 h-px bg-amber-200" />
                    Projects
                    <span className="flex-1 h-px bg-amber-200" />
                  </h2>
                  <div className="space-y-2.5">
                    {projects.map(p => (
                      <div key={p.id}>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-gray-900">{p.title}</p>
                          <span className="text-xs text-gray-400">{p.status}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{p.description}</p>
                        <p className="text-xs text-amber-600 mt-0.5">{p.tech.join(' · ')}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Teaching Experience */}
                <div className="mb-6">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3 flex items-center gap-2">
                    <span className="flex-1 h-px bg-amber-200" />
                    Teaching Experience
                    <span className="flex-1 h-px bg-amber-200" />
                  </h2>
                  <div className="space-y-2">
                    {teachingExperience.map(exp => (
                      <div key={exp.id} className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{exp.position}</p>
                          <p className="text-xs text-gray-500">{exp.institution} · {exp.subjects.join(', ')}</p>
                        </div>
                        <p className="text-xs text-gray-400 flex-shrink-0 ml-4">{exp.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3 flex items-center gap-2">
                    <span className="flex-1 h-px bg-amber-200" />
                    Achievements
                    <span className="flex-1 h-px bg-amber-200" />
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    {achievements.map(a => (
                      <div key={a.id}>
                        <p className="text-xs font-semibold text-gray-900">{a.title}</p>
                        <p className="text-xs text-gray-500">{a.subtitle}</p>
                        <p className="text-xs text-gray-400">{a.organizer}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Print styles */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #print-area, #print-area * { visibility: visible !important; }
          #print-area { position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; border-radius: 0 !important; }
          .no-print { display: none !important; }
          @page { margin: 0.5in; size: A4; }
        }
      `}</style>
    </>
  )
}