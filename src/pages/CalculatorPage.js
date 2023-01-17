import React from 'react';

import Calculator from '../components/Calculator';
import Card from '../components/UI/Card';
import classes from './CalculatorPage.module.css';

const CalculatorPage = () => (
  <section className={classes.calculator_section}>
    <Card extraclass={classes.calculator_page_detail}>
      <h3>Lets do some Math!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        numquam atque, ipsam sint molestiae doloremque consequatur nam dolorum
        eum fuga ut similique earum saepe nisi odit placeat quos nihil aut.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad odit
        repudiandae mollitia, illum, excepturi repellendus cum corrupti hic
        voluptatibus odio enim sunt necessitatibus dolorum dolor! Iure quae
        officia aperiam delectus.
      </p>
    </Card>
    <Calculator />
  </section>
);

export default CalculatorPage;
