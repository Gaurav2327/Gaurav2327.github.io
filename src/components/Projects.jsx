import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaCloud, FaDatabase } from 'react-icons/fa'

function Projects() {
  const projects = [
    {
      icon: FaCloud,
      title: "Terraform Infrastructure Modules",
      description: "Built reusable Terraform modules for AWS Lambda, MSK, Flink, and CockroachDB deployments with automated testing.",
      tags: ["Terraform", "AWS", "IaC"]
    },
    {
      icon: FaRocket,
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented automated CI/CD pipelines using GitHub Actions and Jenkins for microservices deployment.",
      tags: ["GitHub Actions", "Jenkins", "Docker"]
    },
    {
      icon: FaDatabase,
      title: "CockroachDB Infrastructure",
      description: "Architected high-availability CockroachDB clusters on AWS with automated backup and monitoring solutions.",
      tags: ["CockroachDB", "AWS", "Monitoring"]
    },
    {
      icon: FaCode,
      title: "GenAI Integration with AWS Bedrock",
      description: "Integrated AWS Bedrock with RAG workflows for AI-powered applications with serverless architecture.",
      tags: ["AWS Bedrock", "GenAI", "Python"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="section-header">
        <motion.h3
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <FaCode style={{ marginRight: 10 }} />
          Selected Projects
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
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 40px rgba(0, 209, 255, 0.3)"
            }}
          >
            <motion.div 
              className="project-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <project.icon size={32} />
            </motion.div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects

