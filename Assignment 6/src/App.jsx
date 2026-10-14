import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const projects = [
  {
    id: 'calculator',
    number: '01',
    title: 'JavaScript Calculator',
    description: 'A handy calculator for everyday arithmetic.',
    detail: 'Perform addition, subtraction, multiplication, and division.',
    category: 'HTML / CSS / JS',
    topic: 'Functions · Switch',
    art: 'calculator',
  },
  {
    id: 'todo',
    number: '02',
    title: 'Interactive To-Do List',
    description: 'Organize your day, one task at a time.',
    detail: 'Add, complete, and remove tasks with a live progress summary.',
    category: 'HTML / CSS / JS',
    topic: 'DOM · Events',
    art: 'todo',
  },
  {
    id: 'registration',
    number: '03',
    title: 'User Registration Form',
    description: 'A friendly form with helpful validation.',
    detail: 'Validate a name, email, phone number, and password.',
    category: 'HTML / CSS / JS',
    topic: 'Validation · Regex',
    art: 'registration',
  },
  {
    id: 'profile',
    number: '04',
    title: 'User Profile Card',
    description: 'A reusable profile card built with React props.',
    detail: 'View profile cards and try the interactive Connect buttons.',
    category: 'REACT',
    topic: 'useState · Props',
    art: 'profile',
  },
  {
    id: 'controlled',
    number: '05',
    title: 'Controlled Form',
    description: 'See your form values update as you type.',
    detail: 'A React-controlled contact form with a live preview.',
    category: 'REACT',
    topic: 'useState · Forms',
    art: 'controlled',
  },
  {
    id: 'counter',
    number: '06',
    title: 'React Counter App',
    description: 'A small counter with big button energy.',
    detail: 'Increment, decrement, or reset the count using React state.',
    category: 'REACT',
    topic: 'Components · Events',
    art: 'counter',
  },
];

const filters = ['All Work', 'HTML / CSS / JS', 'React'];

function ProjectArtwork({ type }) {
  return (
    <div className={`project-art art-${type}`} aria-hidden="true">
      {type === 'calculator' && (
        <div className="mini-calculator">
          <div className="art-calculator-screen">125 + 04</div>
          <div className="art-keypad">
            {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '−', '0', '.', '=', '+'].map((key, index) => (
              <span className={index % 4 === 3 ? 'key accent' : 'key'} key={key + index}>{key}</span>
            ))}
          </div>
        </div>
      )}
      {type === 'todo' && (
        <div className="mini-todo">
          <strong>My Tasks</strong>
          <span><i className="checked" /> Finish assignment</span>
          <span><i /> Read for 20 mins</span>
          <span><i /> Practice React</span>
          <b>+ Add new task</b>
        </div>
      )}
      {type === 'registration' && (
        <div className="mini-registration">
          <span className="art-avatar">♙</span>
          <b>Create Account</b>
          <i />
          <i />
          <i />
          <strong>Register Now</strong>
        </div>
      )}
      {type === 'profile' && (
        <div className="mini-profile">
          <span className="art-profile-avatar">SJ</span>
          <span><b>Sarah Jenkins</b><i>Frontend Developer</i></span>
          <small>PRO</small>
        </div>
      )}
      {type === 'controlled' && (
        <div className="mini-controlled">
          <b>✳</b>
          <span><i /><i /><i /></span>
          <small>LIVE STATE</small>
        </div>
      )}
      {type === 'counter' && (
        <div className="mini-counter">
          <b>−</b><strong>08</strong><b>+</b>
        </div>
      )}
      <span className="art-sparkle">{type === 'calculator' ? '✳' : type === 'todo' ? '✓' : type === 'registration' ? '✦' : type === 'counter' ? '01' : '✧'}</span>
    </div>
  );
}

function CalculatorDemo() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  function calculate(event) {
    event.preventDefault();
    const a = Number(first);
    const b = Number(second);
    if (first.trim() === '' || second.trim() === '') {
      setError('Enter both numbers to calculate.');
      setResult(null);
      return;
    }
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      setError('Please enter valid numbers.');
      setResult(null);
      return;
    }
    if (operation === '/' && b === 0) {
      setError('You cannot divide by zero.');
      setResult(null);
      return;
    }
    const answer = operation === '+' ? a + b : operation === '-' ? a - b : operation === '*' ? a * b : a / b;
    const expression = `${a} ${operation === '*' ? '×' : operation === '/' ? '÷' : operation} ${b}`;
    setError('');
    setResult(answer);
    setHistory((items) => [{ expression, answer }, ...items].slice(0, 5));
  }

  return (
    <div className="demo-content calculator-demo">
      <form onSubmit={calculate}>
        <div className="demo-field">
          <label htmlFor="calc-first">First number</label>
          <input id="calc-first" type="number" step="any" value={first} onChange={(event) => setFirst(event.target.value)} placeholder="e.g. 24" />
        </div>
        <div className="demo-field">
          <label htmlFor="calc-operation">Operation</label>
          <select id="calc-operation" value={operation} onChange={(event) => setOperation(event.target.value)}>
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (×)</option>
            <option value="/">Division (÷)</option>
          </select>
        </div>
        <div className="demo-field">
          <label htmlFor="calc-second">Second number</label>
          <input id="calc-second" type="number" step="any" value={second} onChange={(event) => setSecond(event.target.value)} placeholder="e.g. 8" />
        </div>
        <button className="primary-button full-button" type="submit">Calculate</button>
        {error && <p className="form-message error-message" role="alert">{error}</p>}
      </form>
      <div className="result-panel" aria-live="polite">
        <span>Result</span>
        <strong>{result === null ? '—' : result}</strong>
      </div>
      <div className="demo-history">
        <div className="demo-section-heading">
          <h3>Recent calculations</h3>
          {history.length > 0 && <button type="button" className="text-button" onClick={() => setHistory([])}>Clear</button>}
        </div>
        {history.length === 0 ? <p className="muted-copy">Your calculations will appear here.</p> : history.map((item, index) => (
          <div className="history-row" key={`${item.expression}-${index}`}><span>{item.expression}</span><strong>{item.answer}</strong></div>
        ))}
      </div>
    </div>
  );
}

function TodoDemo() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const nextId = useRef(1);
  const completed = tasks.filter((task) => task.completed).length;

  function addTask(event) {
    event.preventDefault();
    const text = taskText.trim();
    if (!text) return;
    setTasks((items) => [...items, { id: nextId.current++, text, completed: false }]);
    setTaskText('');
  }

  return (
    <div className="demo-content todo-demo">
      <form className="inline-form" onSubmit={addTask}>
        <input aria-label="New task" value={taskText} onChange={(event) => setTaskText(event.target.value)} placeholder="What needs to get done?" />
        <button className="primary-button" type="submit">Add task</button>
      </form>
      <div className="task-stats">
        <div><strong>{tasks.length}</strong><span>Total</span></div>
        <div><strong>{completed}</strong><span>Completed</span></div>
        <div><strong>{tasks.length - completed}</strong><span>Remaining</span></div>
      </div>
      <div className="demo-section-heading">
        <h3>Your tasks</h3>
        {completed > 0 && <button type="button" className="text-button" onClick={() => setTasks((items) => items.filter((task) => !task.completed))}>Clear completed</button>}
      </div>
      {tasks.length === 0 ? <div className="empty-demo"><span>✓</span><strong>Nothing on your list yet</strong><p>Add a task above to get started.</p></div> : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li className={task.completed ? 'task-row task-done' : 'task-row'} key={task.id}>
              <button className="task-check" type="button" aria-label={task.completed ? `Mark ${task.text} incomplete` : `Complete ${task.text}`} onClick={() => setTasks((items) => items.map((item) => item.id === task.id ? { ...item, completed: !item.completed } : item))}>{task.completed ? '✓' : ''}</button>
              <span>{task.text}</span>
              <button className="remove-task" type="button" aria-label={`Delete ${task.text}`} onClick={() => setTasks((items) => items.filter((item) => item.id !== task.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function RegistrationDemo() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const errors = {
    name: !values.name.trim() ? 'Your name is required.' : values.name.trim().length < 3 ? 'Name must be at least 3 characters.' : '',
    email: !values.email.trim() ? 'Email is required.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ? 'Enter a valid email address.' : '',
    phone: !values.phone.trim() ? 'Phone number is required.' : !/^\d{10}$/.test(values.phone.trim()) ? 'Enter exactly 10 digits.' : '',
    password: !values.password ? 'Password is required.' : !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password) ? 'Use 8+ characters with at least one letter and one number.' : '',
  };

  function updateField(event) {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSuccess(false);
  }

  function submit(event) {
    event.preventDefault();
    setSubmitted(true);
    setSuccess(Object.values(errors).every((message) => !message));
  }

  return (
    <form className="demo-content registration-demo" onSubmit={submit} noValidate>
      {[
        ['name', 'Full name', 'Jordan Lee', 'text'],
        ['email', 'Email address', 'jordan@example.com', 'email'],
        ['phone', 'Phone number', '10-digit phone number', 'tel'],
        ['password', 'Password', 'At least 8 characters', 'password'],
      ].map(([name, label, placeholder, type]) => (
        <div className={`demo-field ${submitted && errors[name] ? 'has-error' : ''}`} key={name}>
          <label htmlFor={`register-${name}`}>{label}</label>
          <input id={`register-${name}`} name={name} type={type} value={values[name]} onChange={updateField} placeholder={placeholder} />
          {submitted && errors[name] && <span className="field-error">{errors[name]}</span>}
        </div>
      ))}
      <button className="primary-button full-button" type="submit">Create account</button>
      {success && <p className="form-message success-message" role="status">Registration complete. You're all set!</p>}
    </form>
  );
}

function ProfileDemo() {
  const people = [
    { name: 'Sarah Jenkins', initials: 'SJ', role: 'Frontend developer', description: 'Building accessible, thoughtful web experiences.' },
    { name: 'Alex Rivera', initials: 'AR', role: 'Full-stack engineer', description: 'Open-source contributor and coffee enthusiast.' },
  ];
  const [connected, setConnected] = useState([]);

  return (
    <div className="demo-content people-list">
      {people.map((person) => {
        const isConnected = connected.includes(person.name);
        return (
          <article className="person-card" key={person.name}>
            <div className={`person-avatar ${person.initials === 'AR' ? 'avatar-coral' : ''}`}>{person.initials}</div>
            <div className="person-info"><h3>{person.name}</h3><span>{person.role}</span><p>{person.description}</p></div>
            <button className={isConnected ? 'secondary-button connected-button' : 'primary-button'} type="button" onClick={() => setConnected((items) => isConnected ? items.filter((name) => name !== person.name) : [...items, person.name])}>{isConnected ? 'Connected ✓' : 'Connect'}</button>
          </article>
        );
      })}
    </div>
  );
}

function ControlledFormDemo() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const filledFields = Object.values(form).filter((value) => value.trim()).length;

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSubmitted(false);
  }

  function submit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="demo-content controlled-demo">
      <form className="controlled-form" onSubmit={submit}>
        <div className="demo-field"><label htmlFor="controlled-name">Your name</label><input id="controlled-name" name="name" value={form.name} onChange={update} placeholder="Type your name" /></div>
        <div className="demo-field"><label htmlFor="controlled-email">Email address</label><input id="controlled-email" name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" /></div>
        <div className="demo-field"><label htmlFor="controlled-message">Message</label><textarea id="controlled-message" name="message" value={form.message} onChange={update} placeholder="Write a short message..." rows="4" /></div>
        <button className="primary-button full-button" type="submit">Send message</button>
        {submitted && <p className="form-message success-message" role="status">Your message is ready to send. Thanks, {form.name.trim() || 'there'}!</p>}
      </form>
      <aside className="live-preview">
        <div className="preview-heading"><span className="live-dot" /> LIVE PREVIEW</div>
        <h3>{form.name || 'Your name appears here'}</h3>
        <p>{form.email || 'you@example.com'}</p>
        <blockquote>{form.message || 'Your message will show up here as you type.'}</blockquote>
        <span className="field-count">{filledFields} of 3 fields filled</span>
      </aside>
    </div>
  );
}

function CounterDemo() {
  const [count, setCount] = useState(0);
  return (
    <div className="demo-content counter-demo">
      <p className="muted-copy">Click the buttons and watch the count update.</p>
      <div className="counter-value" aria-live="polite">{count}</div>
      <div className="counter-actions">
        <button className="counter-button counter-minus" type="button" aria-label="Decrement" onClick={() => setCount((value) => value - 1)}>−</button>
        <button className="secondary-button" type="button" onClick={() => setCount(0)}>Reset</button>
        <button className="counter-button counter-plus" type="button" aria-label="Increment" onClick={() => setCount((value) => value + 1)}>+</button>
      </div>
      <span className="counter-caption">React state, updated instantly</span>
    </div>
  );
}

function DemoModal({ project, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  const demos = {
    calculator: <CalculatorDemo />,
    todo: <TodoDemo />,
    registration: <RegistrationDemo />,
    profile: <ProfileDemo />,
    controlled: <ControlledFormDemo />,
    counter: <CounterDemo />,
  };

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title">
        <header className="modal-header">
          <div><span className="modal-eyebrow">PROJECT {project.number} / 06</span><h2 id="demo-title">{project.title}</h2><p>{project.detail}</p></div>
          <button className="close-button" type="button" onClick={onClose} aria-label="Close demo">×</button>
        </header>
        {demos[project.id]}
      </section>
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState('All Work');
  const [search, setSearch] = useState('');
  const [activeProject, setActiveProject] = useState(null);
  const searchInput = useRef(null);
  const filteredProjects = useMemo(() => projects.filter((project) => {
    const matchesFilter = filter === 'All Work' || project.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = `${project.title} ${project.description} ${project.category}`.toLowerCase().includes(search.trim().toLowerCase());
    return matchesFilter && matchesSearch;
  }), [filter, search]);

  useEffect(() => {
    function focusSearch(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchInput.current?.focus();
      }
    }
    document.addEventListener('keydown', focusSearch);
    return () => document.removeEventListener('keydown', focusSearch);
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="AssignmentHub home"><span className="brand-mark">A</span><span>Assignment<span className="brand-accent">Hub</span></span></a>
        <a className="learning-status" href="#projects"><span className="status-dot" /> My Learning Portfolio</a>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="hero-copy">
            <span className="eyebrow"><i /> MY ACADEMIC WORK</span>
            <h1>Learning by <span>Building.</span></h1>
            <p>A collection of practical assignments, experiments, and projects built while exploring web development.</p>
            <div className="hero-stats">
              <div><strong>06</strong><span>Total Assignments</span></div>
              <div><strong>02</strong><span>Technologies</span></div>
              <div><strong>100%</strong><span>Hands-on Learning</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="code-window">
              <div className="window-top"><span /><span /><span /><small>learning.js</small></div>
              <pre><span>const</span> journey = {'{'}{'\n'}  <em>learn</em>: <b>"Build"</b>,{'\n'}  <em>practice</em>: <b>true</b>,{'\n'}  <em>improve</em>: <b>"Daily"</b>{'\n'}{'}'};</pre>
              <span className="code-success">success!</span>
            </div>
            <div className="float-label label-build">✦ Keep Building</div>
            <div className="float-label label-progress"><span className="status-dot" /> Progress in Motion</div>
          </div>
        </section>

        <section className="collection page-width" id="projects">
          <div className="collection-heading">
            <div><span className="eyebrow">THE COLLECTION</span><h2>My Assignments<span>.</span></h2><p>Explore the work I’ve created so far.</p></div>
            <span className="project-count">{String(filteredProjects.length).padStart(2, '0')} Projects</span>
          </div>
          <div className="collection-controls">
            <label className="search-box"><span aria-hidden="true">⌕</span><input ref={searchInput} value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search assignments..." aria-label="Search assignments" />{search && <button type="button" aria-label="Clear search" onClick={() => setSearch('')}>×</button>}<kbd>Ctrl K</kbd></label>
            <div className="filter-list" aria-label="Filter projects">
              {filters.map((item) => <button className={filter === item ? 'filter-chip selected' : 'filter-chip'} type="button" key={item} onClick={() => setFilter(item)}>{item === 'HTML / CSS / JS' && <i className="filter-dot amber" />}{item === 'React' && <i className="filter-dot cyan" />}{item}</button>)}
            </div>
          </div>
          {filteredProjects.length > 0 ? (
            <div className="project-grid">
              {filteredProjects.map((project) => (
                <article className="project-card" key={project.id}>
                  <button className="card-open" type="button" onClick={() => setActiveProject(project)} aria-label={`Open ${project.title} demo`}>
                    <ProjectArtwork type={project.art} />
                    <div className="card-content">
                      <div className="card-category"><span className={project.category === 'REACT' ? 'react-tag' : ''}>{project.category}</span><span className="card-number">{project.number} / 06</span></div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="card-footer"><span>{project.topic}</span><span className="open-link">Explore Project <b>→</b></span></div>
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results"><strong>No projects found.</strong><span>Try another search or choose a different category.</span><button className="text-button" type="button" onClick={() => { setSearch(''); setFilter('All Work'); }}>Clear filters</button></div>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">A</span><span>Assignment<span className="brand-accent">Hub</span></span></a>
        <p>Designed with curiosity. Built through practice.</p>
        <span>© 2026</span>
      </footer>

      {activeProject && <DemoModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  );
}

export default App;
