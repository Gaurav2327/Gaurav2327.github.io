import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

function Header() {
  return (
    <motion.div 
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="header-content">
        <motion.div 
          className="avatar"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            GD
          </motion.span>
        </motion.div>
        
        <div className="header-info">
          <motion.h1 
            className="title"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Gaurav Dhapola
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            AWS DevOps Engineer • Cloud, IaC, CI/CD, Kubernetes
          </motion.p>
          
          <motion.div 
            className="social-links"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="mailto:gaurav.dhapola2327@gmail.com"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> Email
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/gaurav-dhapola-4ba386151/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/gauravdhapola"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Header

