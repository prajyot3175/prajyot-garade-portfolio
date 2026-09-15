import { useState } from 'react';
import { ArrowDownToLine, ArrowUpRight, AtSign, Download, Github, Linkedin, Mail, MapPin, Menu, Phone, X } from 'lucide-react';

const overallResume = '/assets/prajyot-software-engineer-resume.pdf';
const qaResume = '/assets/prajyot-qa-testing-resume.pdf';
const linkedin = 'https://www.linkedin.com/in/prajyot-garade-5821713ba/';
const github = 'https://github.com/prajyot3175';

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
];

const skillGroups = [
  { title: 'Programming', items: ['C++', 'Java', 'SQL', 'JavaScript', 'Python', 'PHP'] },
  { title: 'Web technologies', items: ['HTML5', 'CSS3', 'React.js'] },
  { title: 'Core computer science', items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'SDLC'] },
  { title: 'QA / testing', items: ['Manual Testing', 'Test Case Design', 'Test Scenario Development', 'Bug Reporting', 'Defect Tracking'] },
  { title: 'Automation', items: ['Selenium', 'UFT One — building hands-on practice'] },
  { title: 'Machine learning', items: ['Scikit-learn', 'Data Cleaning', 'Feature Engineering', 'Model Training', 'Classification — SVM'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Apache JMeter', 'Jira', 'Pandas', 'NumPy', 'AI chatbots'] },
  { title: 'Working style', items: ['Communication', 'Teamwork', 'Leadership'] },
];

const projects = [
  {
    index: '01 / build',
    title: 'Online E-Learning Platform',
    copy: 'A peer-to-peer course platform for hand-written notes and video lectures, with subscription-based access control. Built a modular, user-friendly JavaScript architecture and PHP backend split into maintainable functional files.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Manual testing'],
    featured: true,
  },
  {
    index: '02 / model',
    title: 'Loan Approval Prediction System',
    copy: 'A machine learning system that predicts loan approval from financial and demographic data. Cleaned and validated the dataset, evaluated SVM performance across train/test splits, and deployed the project on Streamlit for real-time use.',
    tags: ['Python', 'Scikit-learn', 'SVM', 'Streamlit'],
  },
  {
    index: '03 / signal',
    title: 'IoT Water Quality Monitoring',
    copy: 'A real-time monitoring system using Arduino Uno with pH, turbidity, temperature, and dissolved oxygen sensors for continuous environmental assessment and analysis.',
    tags: ['Arduino Uno', 'IoT', 'Sensors', 'C++'],
  },
];

const experience = [
  {
    date: 'June 2026 — August 2026',
    role: 'FullStack Developer Intern',
    company: 'Cognifyz IT Solutions Pvt. Ltd.',
    copy: 'Developed and maintained responsive web applications using HTML, CSS, JavaScript, and modern development practices. Implemented front-end features with back-end functionality, worked on bug fixing and UI enhancement, and collaborated through Git and GitHub.',
  },
  {
    date: 'June 2024 — August 2024',
    role: 'Web Developer Intern',
    company: 'Earth Logicware Technologies',
    copy: 'Designed responsive web pages, improved performance and mobile usability, and assisted with front-end optimization. Participated in testing, debugging, and deployment activities to ensure application quality in a collaborative environment.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar container">
        <a href="#top" className="brand" data-testid="link-brand" onClick={closeMenu}>
          <span className="brand-mark">PV</span>
          <span>Prajyot Vijay Garade</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a href={href} key={href} data-testid={`link-nav-${label.toLowerCase()}`}>{label}</a>)}
          <a className="nav-resume" href={overallResume} download data-testid="link-download-nav">Resume <Download size={13} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <a href={href} key={href} onClick={closeMenu} data-testid={`link-mobile-${label.toLowerCase()}`}>{label}</a>)}
          <a href={overallResume} download onClick={closeMenu} data-testid="link-mobile-resume">Download resume</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <div className="hero-kicker reveal">Kolhapur, Maharashtra / open to learning</div>
            <h1 className="reveal delay-1">Prajyot<br /><em>Garade</em></h1>
            <p className="hero-intro reveal delay-2">A technically curious computer science student building at the intersection of <strong>software engineering</strong> and <strong>quality-minded testing</strong>.</p>
            <div className="hero-actions reveal delay-3">
              <a className="button button-primary" href="#work" data-testid="link-hero-work">See selected work <ArrowDownToLine size={15} /></a>
              <a className="button button-ghost" href={qaResume} download data-testid="link-download-qa-hero">QA / testing resume <Download size={15} /></a>
            </div>
          </div>
          <div className="hero-side reveal delay-3">
            <div className="signal-card">
              <div className="label">The signal</div>
              <p>Gold medal in Software Testing. Hands-on builds in web, ML, and IoT.</p>
              <small>India Skills West-Regional 2025<br />Software Testing skill category</small>
            </div>
            <div className="hero-meta">
              <div><strong>6.78</strong><span>CGPA / 10</span></div>
              <div><strong>2027</strong><span>B.Tech target</span></div>
              <div><strong>3</strong><span>Builds to explore</span></div>
            </div>
          </div>
        </div>
        <div className="scroll-note">Scroll to inspect ↓</div>
      </section>

      <div className="ticker" aria-label="Areas of focus">
        <div className="ticker-track">
          {Array.from({ length: 2 }).flatMap((_, group) => ['Software Engineer', 'QA Analyst', 'Software Testing', 'DSA', 'OOP', 'Always learning'].map((item, index) => <span key={`${group}-${index}`}>{item} <b>•</b></span>))}
        </div>
      </div>

      <section className="section about" id="about">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow">01 / profile</div><h2>Useful curiosity,<br /><span className="serif">tested in the real world.</span></h2></div>
            <p>A quick read on the person behind the projects, the medal, and the two resumes.</p>
          </div>
          <div className="about-grid">
            <p className="about-quote">“I like understanding <em>why</em> something breaks — then making it better.”</p>
            <div className="about-copy">
              <p>I’m Prajyot, a B.Tech Computer Science and Engineering student from Kolhapur. I’m building a foundation across software development, data structures, databases, and the discipline of testing software before it ships.</p>
              <p>Winning the India Skills West-Regional 2025 Gold Medal in Software Testing gave me a practical appreciation for live test scenarios, structured test cases, bug identification, and the detail that turns a working feature into a dependable one. My internships and projects keep that instinct grounded in building.</p>
              <div className="about-note">
                <div className="note-item"><span>Current chapter</span><strong>B.Tech CSE, pursuing</strong></div>
                <div className="note-item"><span>Based in</span><strong>Kolhapur, Maharashtra</strong></div>
                <div className="note-item"><span>Best fit</span><strong>Software / QA teams</strong></div>
                <div className="note-item"><span>Next move</span><strong>Keep shipping, keep testing</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow">02 / toolkit</div><h2>A stack with<br /><span className="serif">two strong lenses.</span></h2></div>
            <p>Engineering breadth, with a testing mindset threaded through how I approach the work.</p>
          </div>
          <div className="skills-layout">
            <p className="skills-statement">Build the feature.<br /><span>Challenge the feature.</span><br />Learn from both.</p>
            <div className="skills-groups">
              {skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-list">{group.items.map(item => <span className="skill-chip" key={item}>{item}</span>)}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow">03 / selected builds</div><h2>Projects that show<br /><span className="serif">range and follow-through.</span></h2></div>
            <p>From course access to loan decisions to environmental sensing — each one starts with a real problem.</p>
          </div>
          <div className="work-grid">
            {projects.map((project) => <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title} data-testid={`card-project-${project.index.slice(0, 2)}`}>
              <div className="project-index">{project.index}</div>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              {project.featured && <div className="project-visual" aria-hidden="true" />}
              <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow">04 / experience</div><h2>Learning by<br /><span className="serif">doing the work.</span></h2></div>
            <p>Internship experience across full-stack delivery, web development, testing, debugging, and collaboration.</p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => <article className="timeline-row" key={item.company} data-testid={`row-experience-${index}`}>
              <div className="timeline-date">{item.date}</div>
              <div><div className="timeline-role">{item.role}</div><div className="timeline-company">{item.company}</div></div>
              <p className="timeline-copy">{item.copy}</p>
            </article>)}
          </div>
          <p className="mono" style={{ color: 'var(--muted)', fontSize: 10, marginTop: 19 }}>Note: the role-specific resume also describes a Java FullStack Developer virtual internship with Eduskills, June 2026 — August 2026.</p>
        </div>
      </section>

      <section className="section credentials" id="achievements">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow">05 / proof points</div><h2>Signals worth<br /><span className="serif">pausing on.</span></h2></div>
            <p>Recognition, leadership, and certifications that give the work a little more context.</p>
          </div>
          <div className="credentials-grid">
            <div className="achievement-list">
              <article className="achievement"><div className="achievement-num">01</div><div><h3>India Skills West-Regional 2025 — Gold Medal</h3><p>Software Testing skill category, competing on live test scenarios and bug identification tasks.</p></div></article>
              <article className="achievement"><div className="achievement-num">02</div><div><h3>India Skills National Competition 2025</h3><p>Participated in the Software Testing skill category after the regional competition.</p></div></article>
              <article className="achievement"><div className="achievement-num">03</div><div><h3>Best Annual Achiever — AMGOI Fusion 2k25</h3><p>Recognized as the best annual achiever of the year.</p></div></article>
              <article className="achievement"><div className="achievement-num">04</div><div><h3>Team Leader — Diploma Capstone Project</h3><p>Led the major project team and gained sponsorship for the project.</p></div></article>
            </div>
            <div className="cert-box">
              <h3>Certification shelf</h3>
              <ul className="cert-list">
                <li>India Skills West-Regional Gold Medalist Certification — Software Testing</li>
                <li>TCS ion Career Edge — Young Professional</li>
                <li>Infosys Springboard — Database Management Systems Part 1 &amp; 2</li>
                <li>AWS Academy Graduate — Cloud Foundations</li>
                <li>Yuva AI for All — IndiaAI, nasscom</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow">06 / education</div><h2>Still studying.<br /><span className="serif">Already building.</span></h2></div>
            <p>The formal foundation behind the practical work.</p>
          </div>
          <div className="education-grid">
            <article className="edu-card"><div className="edu-badge">2024 — 2027 / pursuing</div><h3>B.Tech in Computer Science and Engineering</h3><p>Ashokrao Mane Group of Institutions, Kolhapur.</p><div className="edu-stat">CGPA 6.78 / 10</div></article>
            <article className="edu-card"><div className="edu-badge">2022 — 2024 / completed</div><h3>Diploma in Computer Engineering</h3><p>Bharati Vidyapeeth’s College of Engineering (Diploma), Kolhapur.</p><div className="edu-stat">81.29% / First Class Distinction</div></article>
          </div>
        </div>
      </section>

      <footer className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-box">
            <div><div className="eyebrow">07 / contact</div><h2>Let’s talk<br /><em>next steps.</em></h2></div>
            <div className="contact-side"><p>If you’re hiring for a thoughtful software engineer or QA-minded developer, I’d be glad to hear what you’re building.</p><a className="button button-primary" href="mailto:prajyotgarade@gmail.com" data-testid="link-email-footer">Email Prajyot <Mail size={15} /></a></div>
          </div>
          <div className="contact-links">
            <a href="mailto:prajyotgarade@gmail.com" data-testid="link-email"><AtSign size={14} /> prajyotgarade@gmail.com</a>
            <a href="tel:+919503815295" data-testid="link-phone"><Phone size={14} /> +91 9503815295</a>
            <a href={linkedin} target="_blank" rel="noreferrer" data-testid="link-linkedin"><Linkedin size={14} /> LinkedIn <ArrowUpRight size={13} /></a>
            <a href={github} target="_blank" rel="noreferrer" data-testid="link-github"><Github size={14} /> GitHub <ArrowUpRight size={13} /></a>
            <a href={overallResume} download data-testid="link-download-overall"><Download size={14} /> Software engineer resume</a>
            <a href={qaResume} download data-testid="link-download-qa"><Download size={14} /> QA / testing resume</a>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Prajyot Vijay Garade</span><span><MapPin size={11} style={{ verticalAlign: 'middle' }} /> Kolhapur, Maharashtra</span><span>Built with intent, not noise.</span></div>
        </div>
      </footer>
    </main>
  );
}

export default App;
