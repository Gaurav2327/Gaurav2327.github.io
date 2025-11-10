import { motion } from 'framer-motion'
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa'

function Experience() {
  const experiences = [
    {
      role: "Senior DevOps Engineer",
      company: "GlobalLogic",
      period: "Oct 2022 – Present",
      bullets: [
        "Designed and implemented data migration pipelines from legacy MySQL to CockroachDB and MongoDB using Kafka and Debezium CDC connectors.",
        "Built reusable Terraform modules for provisioning AWS MSK, AWS Flink, and CockroachDB resources, improving infrastructure consistency.",
        "Automated CI/CD pipelines for data ingestion and processing using Terraform, Ansible, and Jenkins.",
        "Configured AWS networking and security (VPC, Security Groups, IAM) to ensure secure data flow between ECS clusters, MSK, and databases.",
        "Set up centralized monitoring and alerting using New Relic and OpenSearch, proactively tracking pipeline health and performance.",
        "Implemented Secrets Manager and SSM Parameter Store for secure credential management and rotation.",
        "Collaborated with developers to apply schema-level access control in CockroachDB and implemented automated backup strategies.",
        "Enhanced developer productivity using GitHub Copilot, pre-commit hooks, and GitHub Actions for automated testing and code quality checks.",
        "Designed infrastructure for AI-driven applications using AWS Bedrock, OpenSearch, and Lambda.",
        "Developed multi-stack environments via AWS CDK (TypeScript), Serverless Framework, and CloudFormation, ensuring IaC consistency.",
        "Implemented GitHub Actions for scheduled and manual workflows (infrastructure builds, automation scripts, testing).",
        "Managed multi-environment infrastructure (Dev, Pre-Prod, Prod) for microservices and data components.",
        "Deployed and maintained workloads on AWS EKS, configuring Ingress, ALB ingress controller, and Service definitions for reliable access and load balancing.",
        "Created and maintained AWS infrastructure using Terraform, Jenkins, Ansible, and Bitbucket.",
        "Supported GenAI initiatives within private VPCs using AWS Bedrock and secured endpoints.",
        "Built infrastructure for data teams leveraging AWS Lambda, API Gateway, and Kinesis Streams for event-driven data processing.",
        "Monitored and debugged CI/CD pipelines in Jenkins and optimized build execution.",
        "Implemented AWS cost monitoring and optimization strategies to ensure budget efficiency.",
        "Worked on AWS EMR clusters for Big Data analytics workloads."
      ]
    },
    {
      role: "AWS Engineer / Software Developer",
      company: "V3iT Consulting",
      period: "Jul 2019 – Oct 2022",
      bullets: [
        "Designed and implemented IoT data collection pipelines using AWS IoT Core, SiteWise, Kinesis, Glue, and RDS.",
        "Managed IAM roles, policies, and RDS database configurations for secure and scalable IoT data management.",
        "Built real-time data streaming architecture with AWS Kinesis and S3, ensuring high data availability and durability.",
        "Automated data crawling and ETL processes using AWS Glue (Crawler and Jobs).",
        "Configured S3 cross-region replication for data backup and disaster recovery.",
        "Developed API integrations for SAP UME portal using XML-based requests and responses.",
        "Created and managed user profiles and CRUD operations in the UME Database through automation scripts.",
        "Validated and tested APIs using Postman for multiple business workflows.",
        "Built authentication and registration workflows for the vSurve application using AWS Cognito, Lambda, API Gateway, and SNS/SES.",
        "Deployed and maintained a static web application on S3 with secure access and automated CI/CD.",
        "Implemented multi-factor authentication (MFA) and integrated SAML and OAuth for user login flows.",
        "Configured application monitoring via CloudWatch and automated email notifications through SES/Pinpoint.",
        "Developed an RFID-based attendance and tracking system integrated with Blockchain (Multichain, Hyperledger Fabric).",
        "Integrated RFID readers with Java code to process tag data and securely transmit to SAP OData tables.",
        "Designed blockchain network for secure and immutable storage of attendance records.",
        "Managed connectivity between RFID devices and SAP backend for real-time updates."
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

