import { motion } from 'framer-motion'
import { FaHeart, FaReact } from 'react-icons/fa'
import { SiFramer } from 'react-icons/si'

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
        <p>
          Made with <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <FaHeart style={{ color: '#ff4757', margin: '0 4px' }} />
          </motion.span> 
          using <FaReact style={{ color: '#61dafb', margin: '0 4px' }} /> React 
          & <SiFramer style={{ color: '#00d1ff', margin: '0 4px' }} /> Framer Motion
        </p>
        <p className="footer-credits">
          © {new Date().getFullYear()} Gaurav Dhapola. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  )
}

export default Footer

