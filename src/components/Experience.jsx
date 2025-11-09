import { motion } from 'framer-motion'
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa'

function Experience() {
  const experiences = [
    {
      role: "Senior DevOps Engineer",
      company: "GlobalLogic",
      period: "Oct 2022 – Present",
      bullets: [
        "Designed Terraform infra for AWS MSK, Flink, and CockroachDB; built reusable modules.",
        "Built CI/CD pipelines with GitHub Actions & Jenkins for microservices on ECS and EKS.",
        "Integrated blue/green deployments, automated secret rotation, and monitoring with OpenSearch & New Relic."
      ]
    },
    {
      role: "AWS Engineer / Software Developer",
      company: "V3iT Consulting",
      period: "Jul 2019 – Oct 2022",
      bullets: [
        "Built AWS IoT and Kinesis ingestion pipelines, automated ETL with Glue.",
        "Implemented Cognito authentication, serverless APIs, and blockchain-based solutions."
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div 
      id="experience"
      className="card"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="section-header">
        <motion.h3
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <FaBriefcase style={{ marginRight: 10 }} />
          Experience
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
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0, 209, 255, 0.2)"
            }}
          >
            <div className="timeline-marker">
              <motion.div 
                className="timeline-dot"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(0, 209, 255, 0.7)",
                    "0 0 0 10px rgba(0, 209, 255, 0)",
                    "0 0 0 0 rgba(0, 209, 255, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {index < experiences.length - 1 && <div className="timeline-line" />}
            </div>
            
            <div className="timeline-content">
              <h4>{exp.role}</h4>
              <div className="company-period">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <ul>
                {exp.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <FaCheckCircle className="bullet-icon" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Experience

