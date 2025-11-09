import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaAws, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiJenkins } from 'react-icons/si'

function Hero() {
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
    { Icon: FaAws, color: "#FF9900" },
    { Icon: SiTerraform, color: "#7B42BC" },
    { Icon: SiKubernetes, color: "#326CE5" },
    { Icon: FaDocker, color: "#2496ED" },
    { Icon: FaGitAlt, color: "#F05032" },
    { Icon: SiJenkins, color: "#D24939" }
  ]

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
          
          <div className="typing-wrapper">
            <TypeAnimation
              sequence={[
                'Cloud Infrastructure',
                2000,
                'CI/CD Automation',
                2000,
                'Kubernetes & EKS',
                2000,
                'Infrastructure as Code',
                2000,
                'GenAI Integration',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </div>

          <motion.p 
            className="hero-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            6+ years building secure, scalable infrastructure and automated CI/CD pipelines on AWS. 
            Specialties: Terraform, EKS, GitHub Actions, Jenkins, MSK, CockroachDB, AWS Bedrock + RAG workflows.
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
              Hire / Contact
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
            {techIcons.map(({ Icon, color }, i) => (
              <motion.div
                key={i}
                className="tech-icon"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                whileHover={{ scale: 1.3, rotate: 360 }}
                style={{
                  transform: `rotate(${i * 60}deg) translateX(100px) rotate(-${i * 60}deg)`
                }}
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

