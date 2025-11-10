import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="footer-content"
        animate={{ 
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <p className="footer-credits">
          © {new Date().getFullYear()} Gaurav Dhapola. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  )
}

export default Footer

