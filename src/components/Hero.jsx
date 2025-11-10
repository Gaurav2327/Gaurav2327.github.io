import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaAws, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiJenkins } from 'react-icons/si'
import { SiGooglecloud, SiGithubactions } from 'react-icons/si'
import { SiApachekafka } from 'react-icons/si'
import { useState } from 'react'

function Hero() {
  const [topic, setTopic] = useState('cloud')
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  }

  const techIcons = [
    { Icon: FaAws, color: "#FF9900", title: "AWS" },
    { Icon: SiGooglecloud, color: "#4285F4", title: "Google Cloud" },
    { Icon: SiTerraform, color: "#7B42BC", title: "Terraform" },
    { Icon: SiKubernetes, color: "#326CE5", title: "Kubernetes / EKS" },
    { Icon: FaDocker, color: "#2496ED", title: "Docker" },
    { Icon: SiJenkins, color: "#D24939", title: "Jenkins" },
    { Icon: SiGithubactions, color: "#2088FF", title: "GitHub Actions" },
    { Icon: FaGitAlt, color: "#181717", title: "Git" }
  ]

  const angle = 360 / techIcons.length

  return (
    <motion.div 
      className="card hero-card"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            DevOps Engineer
          </motion.h1>
          
          <div className="typing-wrapper" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <TypeAnimation
              sequence={[
                () => setTopic('cloud'),
                'Cloud Infrastructure',
                2000,
                () => setTopic('cicd'),
                'CI/CD Automation',
                2000,
                () => setTopic('containers'),
                'Docker & Kubernetes',
                2000,
                () => setTopic('iac'),
                'Infrastructure as Code',
                2000,
                () => setTopic('genai'),
                'GenAI Integration',
                2000,
                () => setTopic('streaming'),
                'Data Streaming: MSK, Kinesis, Glue',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              {topic === 'cloud' && (<>
                <FaAws title="AWS" size={22} style={{ color: '#FF9900' }} />
                <SiGooglecloud title="Google Cloud" size={22} style={{ color: '#4285F4' }} />
              </>)}
              {topic === 'cicd' && (<>
                <SiJenkins title="Jenkins" size={22} style={{ color: '#D24939' }} />
                <SiGithubactions title="GitHub Actions" size={22} style={{ color: '#2088FF' }} />
              </>)}
              {topic === 'containers' && (<>
                <FaDocker title="Docker" size={22} style={{ color: '#2496ED' }} />
                <SiKubernetes title="Kubernetes / EKS" size={22} style={{ color: '#326CE5' }} />
              </>)}
              {topic === 'iac' && (
                <SiTerraform title="Terraform" size={22} style={{ color: '#7B42BC' }} />
              )}
              {topic === 'genai' && (
                <FaAws title="AWS Bedrock (placeholder)" size={22} style={{ color: '#FF9900' }} />
              )}
              {topic === 'streaming' && (<>
                <SiApachekafka title="MSK (Kafka)" size={22} style={{ color: '#231F20' }} />
                <FaAws title="Kinesis / Glue (placeholder)" size={22} style={{ color: '#FF9900' }} />
              </>)}
            </span>
          </div>

          <motion.p 
            className="hero-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            DevOps Engineer with 6+ years of experience specializing in AWS Cloud, Infrastructure as
            Code, CI/CD automation, and container orchestration. Proven expertise in designing
            scalable, secure, and reliable infrastructure using AWS, Terraform, and Kubernetes (ECS).
            Skilled in implementing CI/CD pipelines using GitHub Actions,Jenkins and AWS Code Pipeline,
            automating deployments, and optimizing infrastructure operations. Strong focus on monitoring,
            security, and best practices in DevOps, with experience across financial and consulting industries.
          </motion.p>

          <motion.div 
            className="cta"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a 
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 209, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
            <motion.a 
              href="#experience"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Experience
            </motion.a>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div 
            className="tech-icon-circle"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {techIcons.map(({ Icon, color, title }, i) => (
              <motion.div
                key={i}
                className="tech-icon"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                whileHover={{ scale: 1.3, rotate: 360 }}
                style={{
                  transform: `rotate(${i * angle}deg) translateX(100px) rotate(-${i * angle}deg)`
                }}
                title={title}
              >
                <Icon style={{ color }} size={32} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="center-avatar"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(0, 209, 255, 0.5)",
                "0 0 40px rgba(123, 97, 255, 0.5)",
                "0 0 20px rgba(0, 209, 255, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="avatar-text">GD</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero

