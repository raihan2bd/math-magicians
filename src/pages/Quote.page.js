import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../components/UI/Card';
import classes from './QuotePage.module.css';

const DUMMY_QUOTES = [
  {
    id: 1,
    quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: 'Albert Einstein',
  },
  {
    id: 2,
    quote:
      'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
    author: 'Albert Einstein',
  },
  {
    id: 3,
    quote:
      'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.',
    author: 'David Hilbert',
  },
  {
    id: 4,
    quote:
      "I've always enjoyed mathematics. It is the most precise and concise way of expressing an idea.",
    author: 'N.R. Narayana Murthy',
  },
  {
    id: 5,
    quote:
      'A mathematician who is not also something of a poet will never be a complete mathematician.',
    author: 'Karl Weierstrass',
  },
  {
    id: 6,
    quote:
      'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  },
  {
    id: 7,
    quote:
      'In mathematics the art of proposing a question must be held of higher value than solving it.',
    author: 'Georg Cantor',
  },
  {
    id: 8,
    quote:
      'To me, mathematics, computer science, and the arts are insanely related. They’re all creative expressions.',
    author: 'Sebastian Thrun',
  },
  {
    id: 9,
    quote:
      'Life is a math equation. In order to gain the most, you have to know how to convert negatives into positives.',
    author: 'Anonymous',
  },
  {
    id: 10,
    quote:
      'Mathematics is not a careful march down a well-cleared highway, but a journey into a strange wilderness, where the explorers often get lost. Rigor should be a signal to the historians that the maps have been made, and the real explorers have gone elsewhere.',
    author: 'W.S. Anglin',
  },
];

const QuotePage = () => {
  const navigate = useNavigate();
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const randomQuote = DUMMY_QUOTES.find((quote) => quote.id === randomNumber);

  const refreshHandler = () => {
    navigate('/quote');
  };

  if (!randomQuote) {
    return <p>No quote Found</p>;
  }

  return (
    <section className={classes.quote_section}>
      <button
        className={classes.btn_refresh}
        type="button"
        onClick={refreshHandler}
      >
        Refresh
      </button>
      <Card extraclass={classes.quote}>
        <h3>{randomQuote.quote}</h3>
        <span>{`- ${randomQuote.author}`}</span>
      </Card>
    </section>
  );
};

export default QuotePage;
