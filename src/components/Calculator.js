import React from 'react';

import calculate from './logic/calculate';
import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="calc">
        <p className="calc__result" type="text">{ next || total || 0}</p>
        <ul className="rows">
          <li className="row">
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              AC
            </button>
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              +/-
            </button>
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              %
            </button>
            <button className="btn-default btn-orange" type="button" onClick={this.clickHandler}>
              &#247;
            </button>
          </li>
          <li className="row">
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              7
            </button>
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              8
            </button>
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              9
            </button>
            <button className="btn-default btn-orange" type="button" onClick={this.clickHandler}>
              x
            </button>
          </li>
          <li className="row">
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              4
            </button>
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              5
            </button>
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              6
            </button>
            <button className="btn-default btn-orange" type="button" onClick={this.clickHandler}>
              -
            </button>
          </li>
          <li className="row">
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              3
            </button>
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              2
            </button>
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              1
            </button>
            <button className="btn-default btn-orange" type="button" onClick={this.clickHandler}>
              +
            </button>
          </li>
          <li className="row">
            <button className="btn-default btn-zero" type="button" onClick={this.clickHandler}>
              0
            </button>
            <button className="btn-default" type="button" onClick={this.clickHandler}>
              .
            </button>
            <button className="btn-default btn-orange" type="button" onClick={this.clickHandler}>
              =
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
