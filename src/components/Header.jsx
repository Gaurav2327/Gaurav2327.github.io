import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function Header() {
  const [showPhone, setShowPhone] = useState(false)

  // Auto-reset the flip after a short delay so it flips back to "Call"
  useEffect(() => {
    if (!showPhone) return
    const id = setTimeout(() => setShowPhone(false), 10000)
    return () => clearTimeout(id)
  }, [showPhone])

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
            DevOps Engineer • AI enthusiast
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
              href="https://github.com/Gaurav2327"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub
            </motion.a>

            {/* Flip Call button */}
            <div style={{ perspective: 800 }}>
              <motion.div
                style={{ position: 'relative', width: '100%', transformStyle: 'preserve-3d' }}
                initial={false}
                animate={{ rotateY: showPhone ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Front face: Call */}
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setShowPhone(true)}
                  style={{
                    display: showPhone ? 'none' : 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <FaPhone /> Call me
                </button>

                {/* Back face: phone number with tel: link */}
                <a
                  href="tel:+919690309285"
                  className="btn-ghost"
                  style={{
                    display: showPhone ? 'inline-flex' : 'none',
                    alignItems: 'center',
                    gap: 6,
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <FaPhone /> +919690309285
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Header

