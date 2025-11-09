import { motion } from 'framer-motion'
import { FaAws, FaDocker, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiTerraform, SiKubernetes, SiJenkins, SiTypescript } from 'react-icons/si'

function Skills() {
  const skills = [
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "EKS / Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "GitHub Actions", icon: FaGitAlt, color: "#181717" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "CI/CD", color: "#00d1ff" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Monitoring", color: "#7b61ff" },
    { name: "MSK / Kafka", color: "#231F20" },
    { name: "CockroachDB", color: "#6933FF" }
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

