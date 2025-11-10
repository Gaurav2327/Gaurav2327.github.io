import { motion } from 'framer-motion'
import { FaAws, FaDocker, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiTerraform, SiKubernetes, SiJenkins, SiTypescript, SiGithubactions, SiGrafana, SiApachekafka, SiCockroachlabs } from 'react-icons/si'
import { SiGooglecloud, SiNewrelic, SiPrometheus, SiOpenai } from 'react-icons/si'

function Skills() {
  const skills = [
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "ECS / Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Monitoring (Grafana)", icon: SiGrafana, color: "#F46800" },
    { name: "Logs & Tracing (New Relic)", icon: SiNewrelic, color: "#00C7B7" },
    { name: "Metrics (Prometheus)", icon: SiPrometheus, color: "#E6522C" },
    { name: "MSK / Kafka", icon: SiApachekafka, color: "#231F20" },
    { name: "CockroachDB", icon: SiCockroachlabs, color: "#6933FF" },
    { name: "GenAI", icon: SiOpenai, color: "#00A67E" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div 
      className="card"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-header">
        <motion.h3
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          Core Skills
        </motion.h3>
        <motion.div 
          className="section-line"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-chip"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: `0 5px 20px ${skill.color}40`,
              borderColor: skill.color
            }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.icon && <skill.icon style={{ color: skill.color }} size={18} />}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Skills

