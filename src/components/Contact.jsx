import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa'

function Contact() {
  return (
    <motion.div 
      id="contact"
      className="card contact-card"
      initial={{ x: 50, opacity: 0 }}
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
          <FaEnvelope style={{ marginRight: 10 }} />
          Contact
        </motion.h3>
      </div>

      <motion.div 
        className="contact-info"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="contact-item"
          whileHover={{ x: 10 }}
        >
          <FaEnvelope className="contact-icon" />
          <div>
            <strong>Email</strong>
            <a href="mailto:gaurav.dhapola2327@gmail.com">
              gaurav.dhapola2327@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-item"
          whileHover={{ x: 10 }}
        >
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <strong>Location</strong>
            <span>Dehradun, Uttarakhand, India</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.p 
        className="contact-text"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Want to discuss a project or opportunity? Feel free to reach out!
      </motion.p>

      <motion.div 
        className="contact-actions"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <motion.a 
          href="mailto:gaurav.dhapola2327@gmail.com"
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope style={{ marginRight: 8 }} />
          Email Me
        </motion.a>
        <motion.a 
          href="./assets/Resume-Gaurav-Dhapola.pdf"
          download
          className="btn btn-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFileDownload style={{ marginRight: 8 }} />
          Download Resume
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default Contact

