import React from 'react';
import heroPhoto from '../assets/photos/hero-photo.jpeg';
import { ARSENAL_TAGS, PROJECT_TAGS } from '../constants/tags';
import { PROFESSIONAL_HISTORY } from '../constants/history';

const Portfolio = () => {
  return (
    <div className="surface-base">
      {/* Navigation */}
      <nav className="container">
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', padding: '2rem 0' }}>
          <a href="#experience" className="label-text text-cyan nav-link">Experience</a>
          <a href="#stack" className="label-text text-cyan nav-link">Expertise</a>
          <a href="#projects" className="label-text text-cyan nav-link">Work</a>
          <a href="#contact" className="label-text text-gold nav-link">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-20)', position: 'relative' }}>
        <div className="magic-glow"></div>
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div className="label-text text-gold" style={{ marginBottom: '1rem' }}>Dhoby Schon Fitz Bumacod</div>
            <h1 className="display-text" style={{ fontSize: '4.5rem', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '2rem', maxWidth: '800px' }}>
              Software, Data, <span className="text-cyan">& AI Engineering</span>.
            </h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '3rem' }}>
              Leveraging high-precision engineering to architect resilient solutions that transform complex challenges into scalable business impact. Based in Metro Manila, Philippines.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#contact" className="btn-primary">Connect <span className="gem" style={{ margin: '0 0 0 0.5rem', width: '6px', height: '6px', backgroundColor: 'var(--background)' }}></span></a>
              <a href="#projects" className="btn-secondary">View the Arsenal</a>
            </div>
          </div>
          <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center' }}>
            <div className="hero-image-wrapper">
              <div className="portal-ring ring-1"></div>
              <div className="portal-ring ring-2"></div>
              <div className="portal-ring ring-3"></div>
              <img src={heroPhoto} alt="Dhoby Schon Fitz Bumacod" className="hero-image" />
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <div className="section-divider"></div>
      <section id="experience" className="surface-low" style={{ padding: 'var(--space-20) 0' }}>
        <div className="container">
          <h2 className="display-text" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Professional History</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {PROFESSIONAL_HISTORY.map((job, index) => (
              <div key={index} className={job.variant === 'gold' ? 'history-item-gold' : 'history-item'} style={{ position: 'relative', paddingLeft: '2.5rem', borderLeft: `1px solid ${job.variant === 'gold' ? 'rgba(240, 191, 92, 0.4)' : 'var(--outline-variant)'}` }}>
                <span className={`gem ${job.variant === 'gold' ? 'gem-gold' : ''}`} style={{ position: 'absolute', left: '-5px', top: '8px', margin: 0 }}></span>
                <h3 className={`label-text text-${job.variant}`} style={{ marginBottom: '0.25rem', margin: 0 }}>{job.company}</h3>
                <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{job.role} <span style={{ fontSize: '0.875rem', opacity: 0.6, fontWeight: 400, marginLeft: '1rem' }}>{job.duration}</span></div>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', color: 'var(--on-surface-variant)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {job.highlightBullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arsenal / Expertise Section */}
      <div className="section-divider"></div>
      <section id="stack" className="container" style={{ paddingBottom: 'var(--space-20)', position: 'relative', zIndex: 10 }}>
        <div className="glass-card animated-glow-border">
          <h2 className="display-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>The Arsenal</h2>
          <div className="grid-2">

            <div className="recessed-container-gold">
              <h3 className="label-text text-gold" style={{ marginBottom: '1rem', margin: 0 }}><span className="gem" style={{ margin: '0 0.5rem 0 0' }}></span>Development</h3>
              <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {ARSENAL_TAGS.development.map(tech => (
                  <span key={tech} className="tech-tag tech-tag-gold">{tech}</span>
                ))}
              </div>
            </div>

            <div className="recessed-container">
              <h3 className="label-text text-cyan" style={{ marginBottom: '1rem', margin: 0 }}><span className="gem" style={{ margin: '0 0.5rem 0 0' }}></span>Infrastructure</h3>
              <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {ARSENAL_TAGS.infrastructure.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="recessed-container">
              <h3 className="label-text text-cyan" style={{ marginBottom: '1rem', margin: 0 }}><span className="gem" style={{ margin: '0 0.5rem 0 0' }}></span>Data</h3>
              <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {ARSENAL_TAGS.data.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="recessed-container-gold">
              <h3 className="label-text text-gold" style={{ marginBottom: '1rem', margin: 0 }}><span className="gem" style={{ margin: '0 0.5rem 0 0' }}></span>AI Engineering</h3>
              <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {ARSENAL_TAGS.aiEngineering.map(tech => (
                  <span key={tech} className="tech-tag tech-tag-gold">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
      <div className="section-divider"></div>
      <section id="projects" className="surface-low" style={{ position: 'relative' }}>
        <div className="magic-glow glow-gold" style={{ top: '50px', right: '-50px', left: 'auto' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="display-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Independent Ventures</h2>
            <p style={{ maxWidth: '600px' }}>Highlighting technical side-projects focused on scalable microservices and autonomous AI agents.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card ambient-shadow interactive-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ maxWidth: '800px' }}>
                <span className="label-text text-cyan" style={{ display: 'block', marginBottom: '0.75rem' }}>Microservices & Data Streaming</span>
                <h3 className="display-text" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Kafka Order Processing System</h3>
                <p style={{ margin: 0, color: 'var(--on-surface)', lineHeight: 1.6 }}>
                  Engineered a resilient event-driven microservices architecture to process simulated orders at scale.
                  Leveraged <span className="text-cyan">Apache Kafka</span> for message brokering and <span className="text-cyan">Redis</span> for real-time analytics.
                  Deployed the entire multi-consumer topology (including database persistence and automated email notifications) via <span className="text-gold">Kubernetes (Minikube)</span> utilizing Supabase for inventory state tracking.
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {PROJECT_TAGS.kafkaSystem.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/dhobyschon/simple-kafka-system" target="_blank" rel="noopener noreferrer" className="card-ghost-btn">
                <span>View Code</span>
                <span className="gem" style={{ margin: 0, width: '4px', height: '4px' }}></span>
              </a>
              <a href="https://github.com/dhobyschon/simple-kafka-system" target="_blank" rel="noopener noreferrer" className="card-side-blade">
                <span>VIEW REPOSITORY</span>
                <div className="blade-icon">→</div>
              </a>
            </div>

            <div className="glass-card ambient-shadow interactive-card-gold" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ maxWidth: '800px' }}>
                <span className="label-text text-gold" style={{ display: 'block', marginBottom: '0.75rem' }}>AI Engineering</span>
                <h3 className="display-text" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Dhoby's AI Personal Assistant</h3>
                <p style={{ margin: 0, color: 'var(--on-surface)', lineHeight: 1.6 }}>
                  Developed a conversational AI agent designed to dynamically comprehend user intent via natural language and directly execute utility tasks.
                  Built with <span className="text-gold">PydanticAI</span> and the Minimax M2.5 model, the agent seamlessly integrates with OAuth2 APIs to autonomously schedule <span className="text-cyan">Google Calendar/Meet events</span> and draft/send professional emails via <span className="text-cyan">Gmail SMTP</span> exactly as requested by the user.
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {PROJECT_TAGS.dhobyAI.map(tech => (
                    <span key={tech} className="tech-tag-gold">{tech}</span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/dhobyschon/dhoby-ai-assistant" target="_blank" rel="noopener noreferrer" className="card-ghost-btn card-ghost-btn-gold">
                <span>View Code</span>
                <span className="gem gem-gold" style={{ margin: 0, width: '4px', height: '4px' }}></span>
              </a>
              <a href="https://github.com/dhobyschon/dhoby-ai-assistant" target="_blank" rel="noopener noreferrer" className="card-side-blade card-side-blade-gold">
                <span>VIEW REPOSITORY</span>
                <div className="blade-icon">→</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <div className="section-divider"></div>
      <footer id="contact" className="surface-highest" style={{ padding: 'var(--space-20) 0 3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-text" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Let's build something exceptional.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.25rem' }}>
            Mapua University Alumnus (B.S. Computer Engineering).<br />
            Available for specialized engineering projects and strategic technical partnerships.
          </p>

          <a href="mailto:hello@dhobyschon.com" className="btn-primary" style={{ marginBottom: 'var(--space-16)' }}>Get in Touch</a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <span className="label-text text-cyan">+63 123 456 7890</span>
            <a href="mailto:hello@dhobyschon.com" className="label-text text-gold">Email</a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.875rem' }}>
            <span>© {new Date().getFullYear()} Dhoby Schon Fitz Bumacod. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
