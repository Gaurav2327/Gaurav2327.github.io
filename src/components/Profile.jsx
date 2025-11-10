import { motion } from 'framer-motion'
import { FaCertificate, FaTrophy, FaAward } from 'react-icons/fa'

function Profile() {
  return (
    <motion.div 
      className="card profile-card"
      initial={{ x: 50, opacity: 0 }}
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
          <FaAward style={{ marginRight: 10 }} />
          Profile
        </motion.h3>
      </div>

      <motion.p 
        className="profile-description"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        AWS Certified DevOps Engineer with a passion for automation, secure infrastructure, and observability.
      </motion.p>

      <motion.div 
        className="certifications"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h4><FaCertificate style={{ marginRight: 8 }} />Certifications</h4>
        
        <motion.div 
          className="cert-item"
          whileHover={{ scale: 1.03, x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="cert-badge">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaTrophy color="#FFD700" />
            </motion.div>
          </div>
          <div className="cert-details">
            <strong>AWS Certified DevOps Engineer – Professional</strong>
            <span className="cert-period">2024–2027</span>
          </div>
        </motion.div>

        <motion.div 
          className="cert-item"
          whileHover={{ scale: 1.03, x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="cert-badge">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaTrophy color="#00d1ff" />
            </motion.div>
          </div>
          <div className="cert-details">
            <strong>AWS Certified Developer – Associate</strong>
            <span className="cert-period">2020–2027</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="quick-stats"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h4>Quick Stats</h4>
        <div className="stats-grid">
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.1 }}
          >
            <span className="stat-number">6+</span>
            <span className="stat-label">Years</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.1 }}
          >
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.1 }}
          >
            <span className="stat-number">3</span>
            <span className="stat-label">AWS Certs</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Profile

