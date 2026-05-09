import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import '../styles/Services.css';

function Services() {
  // Active level filter: 'all', 'Beginner', 'Intermediate', 'Advanced'
  const [activeLevel, setActiveLevel] = useState('all');

  // ── All C++ Topics with Quiz Questions ──
  const topics = [
    {
      title: 'Variables',
      level: '🌱 Beginner',
      levelKey: 'Beginner',
      icon: '📦',
      color: '#39ff14',
      description: 'Variables are containers that store data values. In C++, you must declare the type of data before using a variable.',
      codeSnippet: `int age = 20;\nfloat gpa = 3.8;\nstring name = "Alice";`,
      questions: [
        {
          question: 'Which keyword is used to declare an integer variable in C++?',
          options: ['var', 'int', 'num', 'integer'],
          correct: 1,
        },
        {
          question: 'What is the output of: int x = 5; cout << x;',
          options: ['x', '5', '"x"', 'Error'],
          correct: 1,
        },
        {
          question: 'Which of these is a valid variable name in C++?',
          options: ['2name', 'my-name', 'myName', 'my name'],
          correct: 2,
        },
        {
          question: 'What does this do: int a = 10, b = 3; cout << a + b;',
          options: ['Prints 103', 'Prints 13', 'Error', 'Prints 10'],
          correct: 1,
        },
      ],
    },
    {
      title: 'Data Types',
      level: '🌱 Beginner',
      levelKey: 'Beginner',
      icon: '🧩',
      color: '#ffe600',
      description: 'C++ has several built-in data types: int (integers), float/double (decimals), char (single character), bool (true/false), and string (text).',
      codeSnippet: `int age = 25;\nfloat pi = 3.14;\nbool isOn = true;\nchar grade = 'A';`,
      questions: [
        {
          question: 'Which data type stores a single character in C++?',
          options: ['string', 'char', 'letter', 'int'],
          correct: 1,
        },
        {
          question: 'What type would you use to store the value true or false?',
          options: ['int', 'float', 'bool', 'char'],
          correct: 2,
        },
        {
          question: 'Which data type can store decimal numbers with more precision?',
          options: ['int', 'char', 'float', 'double'],
          correct: 3,
        },
        {
          question: 'What is the size of a bool in C++ (in bytes)?',
          options: ['4 bytes', '8 bytes', '1 byte', '2 bytes'],
          correct: 2,
        },
      ],
    },
    {
      title: 'Loops',
      level: '⚡ Intermediate',
      levelKey: 'Intermediate',
      icon: '🔄',
      color: '#00d4ff',
      description: 'Loops repeat a block of code multiple times. C++ has three loops: for (known count), while (condition-based), and do-while (runs at least once).',
      codeSnippet: `for(int i = 0; i < 5; i++) {\n  cout << i << " ";\n}\n// Output: 0 1 2 3 4`,
      questions: [
        {
          question: 'How many times does this loop run? for(int i=0; i<5; i++)',
          options: ['4 times', '5 times', '6 times', 'Infinite'],
          correct: 1,
        },
        {
          question: 'Which loop always executes its body at least once?',
          options: ['for loop', 'while loop', 'do-while loop', 'foreach loop'],
          correct: 2,
        },
        {
          question: 'What keyword exits a loop immediately?',
          options: ['exit', 'stop', 'break', 'return'],
          correct: 2,
        },
        {
          question: 'What does "continue" do in a loop?',
          options: ['Exits the loop', 'Skips current iteration', 'Restarts the loop', 'Does nothing'],
          correct: 1,
        },
      ],
    },
    {
      title: 'Arrays',
      level: '⚡ Intermediate',
      levelKey: 'Intermediate',
      icon: '📊',
      color: '#bf5fff',
      description: 'An array stores multiple values of the same type in a single variable. Elements are accessed by their index, starting from 0.',
      codeSnippet: `int scores[3] = {90, 85, 78};\ncout << scores[0]; // 90\ncout << scores[2]; // 78`,
      questions: [
        {
          question: 'What is the index of the FIRST element in a C++ array?',
          options: ['1', '-1', '0', 'Depends on type'],
          correct: 2,
        },
        {
          question: 'int arr[5]; — how many elements can this array hold?',
          options: ['4', '6', '5', '0'],
          correct: 2,
        },
        {
          question: 'How do you access the 3rd element of array "int a[5]"?',
          options: ['a[3]', 'a[2]', 'a(3)', 'a{2}'],
          correct: 1,
        },
        {
          question: 'What happens if you access arr[10] in an array of size 5?',
          options: ['Returns 0', 'Returns null', 'Undefined behavior / error', 'Returns last element'],
          correct: 2,
        },
      ],
    },
    {
      title: 'Functions',
      level: '⚡ Intermediate',
      levelKey: 'Intermediate',
      icon: '⚙️',
      color: '#ff9500',
      description: 'Functions are reusable blocks of code that perform a specific task. They reduce repetition and make code organized and readable.',
      codeSnippet: `int add(int a, int b) {\n  return a + b;\n}\nint result = add(3, 4); // 7`,
      questions: [
        {
          question: 'What keyword is used to send back a value from a function?',
          options: ['send', 'give', 'return', 'output'],
          correct: 2,
        },
        {
          question: 'A function that returns nothing uses which return type?',
          options: ['null', 'void', 'empty', 'none'],
          correct: 1,
        },
        {
          question: 'What are the inputs to a function called?',
          options: ['Arguments only', 'Parameters', 'Variables', 'Returns'],
          correct: 1,
        },
        {
          question: 'Can a C++ function call itself?',
          options: ['No, never', 'Only in loops', 'Yes, this is called recursion', 'Only with pointers'],
          correct: 2,
        },
      ],
    },
    {
      title: 'Pointers',
      level: '🔥 Advanced',
      levelKey: 'Advanced',
      icon: '🎯',
      color: '#ff2d78',
      description: 'A pointer is a variable that stores the memory address of another variable. Use * to declare a pointer and & to get an address.',
      codeSnippet: `int x = 42;\nint* ptr = &x;    // ptr stores address of x\ncout << *ptr;     // 42 (value at address)`,
      questions: [
        {
          question: 'What does the & operator do when used with a variable?',
          options: ['Gets its value', 'Gets its memory address', 'Doubles it', 'Deletes it'],
          correct: 1,
        },
        {
          question: 'How do you declare a pointer to an integer in C++?',
          options: ['int p;', 'pointer int p;', 'int* p;', '&int p;'],
          correct: 2,
        },
        {
          question: 'What does the * operator do when used on a pointer?',
          options: ['Gets the address', 'Multiplies by 2', 'Dereferences (gets the value)', 'Deletes the pointer'],
          correct: 2,
        },
        {
          question: 'What is a NULL pointer?',
          options: ['A pointer to 0', 'A pointer that points to nothing/nullptr', 'An empty array', 'A deleted variable'],
          correct: 1,
        },
      ],
    },
  ];

  // Filter topics by selected level
  const filtered = activeLevel === 'all'
    ? topics
    : topics.filter(t => t.levelKey === activeLevel);

  // Scroll to the next topic card (simplified next level)
  const handleNextLevel = () => {
    window.scrollBy({ top: 400, behavior: 'smooth' });
  };

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <main className="services-page">

      {/* ── Page Header ── */}
      <section className="services-hero">
        <h1 className="services-title">
          🎮 C++ <span className="accent-blue">Game Zone</span>
        </h1>
        <p className="services-sub">
          Pick a topic, read the concept, then crush the quiz! 💪
        </p>
      </section>

      {/* ── Level Filter Buttons ── */}
      <div className="level-filters">
        {levels.map(lv => (
          <button
            key={lv}
            className={`filter-btn ${activeLevel === lv ? 'active' : ''}`}
            onClick={() => setActiveLevel(lv)}
          >
            {lv === 'all' ? '🌐 All' : lv}
          </button>
        ))}
      </div>

      {/* ── Stats Bar ── */}
      <div className="stats-bar">
        <span>📚 Showing <strong>{filtered.length}</strong> topics</span>
        <span>🏆 Complete all to become a C++ Master!</span>
      </div>

      {/* ── Game Cards Grid ── */}
      <div className="cards-grid">
        {filtered.map((topic, index) => (
          <GameCard
            key={index}
            topic={topic}
            onNextLevel={handleNextLevel}
          />
        ))}
      </div>

    </main>
  );
}

export default Services;