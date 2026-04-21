import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiPython, SiJavascript, SiMysql, SiReact, SiHtml5,
  SiTailwindcss, SiNodedotjs, SiPostgresql, SiGit, SiDocker,
  SiNumpy, SiPandas, SiFastapi,
} from 'react-icons/si'
import { FaBrain, FaCode, FaDatabase, FaRobot, FaChartBar, FaServer } from 'react-icons/fa'
import { FiCpu, FiGrid } from 'react-icons/fi'

const skillGroups = [
  {
    category: 'Languages',
    color: '#00f5ff',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Java', icon: <FaCode /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
  {
    category: 'Frontend',
    color: '#7c3aed',
    skills: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <FiGrid /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    category: 'Backend',
    color: '#00f5ff',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Express.js', icon: <FaServer /> },
    ],
  },
  {
    category: 'AI/ML',
    color: '#7c3aed',
    skills: [
      { name: 'Scikit-learn', icon: <FaRobot /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'FAISS', icon: <FaBrain /> },
      { name: 'Sentence-Transformers', icon: <FiCpu /> },
    ],
  },
  {
    category: 'Databases',
    color: '#00f5ff',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    category: 'Tools',
    color: '#7c3aed',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Power BI', icon: <FaChartBar /> },
      { name: 'Tableau', icon: <FaChartBar /> },
    ],
  },
]

// Build a flat list doubled for seamless loop
const allSkills = skillGroups.flatMap(g =>
  g.skills.map(s => ({ ...s, category: g.category, color: g.color }))
)
const doubled = [...allSkills, ...allSkills]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" style={{ padding: '6rem 0' }}>
      <div className="section-container" ref={ref}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '0.75rem' }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '3rem' }}
        >
          Tech <span>Stack</span>
        </motion.h2>

        {/* Category labels row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          {skillGroups.map((g) => (
            <span
              key={g.category}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '0.35rem 0.85rem',
                border: `1px solid ${g.color}30`,
                color: g.color,
                background: `${g.color}08`,
              }}
            >
              {g.category}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Marquee — full width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.35 }}
      >
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {doubled.map((skill, i) => (
              <div key={i} className="skill-badge">
                <span
                  className="icon"
                  style={{ color: skill.color, filter: `drop-shadow(0 0 6px ${skill.color})` }}
                >
                  {skill.icon}
                </span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Second row — reversed */}
        <div className="marquee-wrapper" style={{ marginTop: '1rem' }}>
          <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
            {[...doubled].reverse().map((skill, i) => (
              <div key={i} className="skill-badge">
                <span
                  className="icon"
                  style={{ color: skill.color, filter: `drop-shadow(0 0 6px ${skill.color})` }}
                >
                  {skill.icon}
                </span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
