[README.md](https://github.com/user-attachments/files/33442466/README.md)
# Full Stack Development (FSD) Assignments

A collection of six Full Stack Development lab assignments covering core JavaScript, DOM manipulation, form validation, and React fundamentals.

**Author:** Prathamesh Yerawar
**PRN:** 1272250087
**Program:** MCA, Dr. Vishwanath Karad MIT World Peace University, Pune

---

## Contents

| # | Assignment | Tech | Folder |
|---|------------|------|--------|
| 1 | JavaScript Calculator using Functions | HTML, CSS, JavaScript | `Assignment-1-JS-Calculato` |
| 2 | DOM-based To-Do List | HTML, CSS, JavaScript | `Assignment-2-Todo-List` |
| 3 | JavaScript Form Validation | HTML, CSS, JavaScript | `Assignment-3-Form-Validation` |
| 4 | React Profile Card using Props | React, Vite | `Assignment 4` |
| 5 | Controlled React Form | React, Vite | `Assignment 5` |
| 6 | React Counter App using useState | React, Vite | `Assignment 6` |

---

## Assignment 1: JavaScript Calculator (QuickCalc)

A calculator built with JavaScript functions that performs the four basic arithmetic operations using `if-else` statements.

**Features**
- Two number inputs with selectable operations: addition, subtraction, multiplication, division
- Input validation when a number is missing
- Handles division by zero with a clear message
- Shows the last 5 calculations in a history panel, with a Clear All button
- Press **Enter** to calculate
- Animated result display

**Concepts used:** functions, `if-else`, `parseFloat`, DOM selection, event handling, `data-*` attributes

---

## Assignment 2: DOM-based To-Do List (Daily Tasks)

An interactive to-do list built entirely with DOM methods.

**Features**
- Add tasks (empty tasks are rejected with an alert)
- Mark tasks as completed, with an Undo toggle
- Delete individual tasks, or remove all completed tasks at once
- Live counters for total, completed and pending tasks
- Empty-state message when there are no tasks
- Press **Enter** to add a task

**Concepts used:** `createElement`, `appendChild`, `classList`, `addEventListener`, `querySelectorAll`

---

## Assignment 3: JavaScript Form Validation

A user registration form with client-side validation and inline error messages.

| Field | Rule |
|-------|------|
| Full Name | Required, at least 3 characters |
| Email | Required, valid email format (regex) |
| Phone | Required, exactly 10 digits |
| Password | Required, minimum 8 characters with at least 1 letter and 1 number |

Fields turn red with an error message when invalid and green when valid. A success message appears when the form passes all checks.

**Concepts used:** regular expressions, form `submit` event, `preventDefault`, `novalidate`, dynamic class toggling

---

## Assignment 4: React Profile Card using Props

A reusable `ProfileCard` React component that receives `name`, `image` and `description` as props. The app renders multiple cards, and each has a **Connect** button.

**Concepts used:** components, props, JSX, event handlers, reusable UI

---

## Assignment 5: Controlled React Form

A controlled form in React where the inputs are tied to component state and the entered data is displayed in real time below the form.

**Concepts used:** controlled components, `useState`, `onChange` handlers

---

## Assignment 6: React Counter App using useState

A counter app with **Increment**, **Decrement** and **Reset** buttons, built with the `useState` hook.

**Concepts used:** React Hooks (`useState`), state updates, event handling

---

## How to Run

### Assignments 1 to 3 (HTML / CSS / JavaScript)

No installation needed.

1. Open the assignment folder.
2. Open `index.html` in any modern browser.

### Assignments 4 to 6 (React + Vite)

Requires [Node.js](https://nodejs.org/) (v18 or later recommended).

```bash
cd "Assignment 4"      # or "Assignment 5" / "Assignment 6"
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

Other useful commands:

```bash
npm run build      # create a production build
npm run preview    # preview the production build
npm run lint       # run ESLint
```

---

## Project Structure

```
.
├── Assignment-1-JS-Calculato/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── Assignment-2-Todo-List/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── Assignment-3-Form-Validation/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── Assignment 4/        # React + Vite
├── Assignment 5/        # React + Vite
├── Assignment 6/        # React + Vite
└── README.md
```

---

## Tech Stack

- HTML5, CSS3, JavaScript (ES6)
- React 19
- Vite
- Git and GitHub

---

## Author

**Prathamesh Yerawar**
MCA Student, Dr. Vishwanath Karad MIT World Peace University, Pune
