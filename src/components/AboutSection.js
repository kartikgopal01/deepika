import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section, Card, Grid } from './StyledComponents';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const AboutContent = styled.p`
  margin: 2rem auto;
  max-width: 800px;
  font-size: 1.2rem;
  line-height: 1.8;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(30px);
`;

const SkillCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2rem;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  
  h3 {
    margin: 1.2rem 0 0.8rem;
    color: var(--accent);
    font-size: 1.4rem;
  }
  
  svg {
    width: 60px;
    height: 60px;
    color: var(--accent2);
    filter: drop-shadow(0 0 5px rgba(var(--accent2RGB), 0.3));
  }
  
  p {
    font-size: 1.05rem;
    line-height: 1.6;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 5rem;
  flex-wrap: wrap;
  gap: 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  position: relative;
  
  .number {
    font-size: 3.8rem;
    font-weight: 700;
    color: var(--accent2);
    margin-bottom: 0.5rem;
    background: linear-gradient(var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .label {
    font-size: 1.2rem;
    color: var(--text);
    opacity: 0.8;
    letter-spacing: 1px;
  }
`;

const AccentLine = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  width: 150px;
  margin: 0 auto 3rem;
  opacity: 0;
`;

const Highlight = styled.span`
  color: var(--accent);
  font-weight: 600;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--accent);
  }
`;

const AboutSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const accentLineRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);
  
  useEffect(() => {
    // Content animation
    gsap.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%"
      }
    });
    
    // Accent line animation
    gsap.to(accentLineRef.current, {
      opacity: 0.6,
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: accentLineRef.current,
        start: "top 80%"
      }
    });
    
    // Cards animation
    cardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2 * index,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%"
        }
      });
    });
    
    // Stats animation
    statsRef.current.forEach((stat, index) => {
      gsap.to(stat, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.15 * index,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 85%"
        }
      });
    });
  }, []);
  
  const skills = [
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, MongoDB, PostgreSQL, and implementing RESTful APIs and GraphQL endpoints',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with React, Next.js, Redux, and modern CSS techniques including Styled Components',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'DevOps & Cloud',
      description: 'Deploying and managing applications on AWS, Firebase, and Heroku with CI/CD pipelines, containerization, and infrastructure as code',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  return (
    <Section id="about" ref={sectionRef}>
      <AboutContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>About Me</SectionTitle>
        </motion.div>
        
        <AboutContent ref={contentRef}>
          I'm <Highlight>Deepika S</Highlight>, a full-stack developer with expertise in both frontend and backend technologies. With a passion for building complete, scalable web applications, I specialize in the MERN stack (MongoDB, Express, React, Node.js) and related technologies. My experience spans from database design and API development to creating intuitive user interfaces and deploying applications to the cloud.
        </AboutContent>
        
        <AccentLine ref={accentLineRef} />
        
        <Grid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              ref={el => cardsRef.current[index] = el}
              as={motion.div}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {skill.icon}
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </SkillCard>
          ))}
        </Grid>
        
        <StatsContainer>
          <StatItem ref={el => statsRef.current[0] = el}>
            <div className="number">1+</div>
            <div className="label">Years Experience</div>
          </StatItem>
          
          <StatItem ref={el => statsRef.current[1] = el}>
            <div className="number">15+</div>
            <div className="label">Projects Completed</div>
          </StatItem>
          
          <StatItem ref={el => statsRef.current[2] = el}>
            <div className="number">2+</div>
            <div className="label">Satisfied Clients</div>
          </StatItem>
        </StatsContainer>
      </AboutContainer>
    </Section>
  );
};

export default AboutSection;