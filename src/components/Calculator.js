import React from 'react';

import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc">
        <div className="calc__input-group">
          <input className="calc__input" type="text" value="0" readOnly />
        </div>
        <ul className="rows">
          <li className="row">
            <button className="btn-default" type="button">
              AC
            </button>
            <button className="btn-default" type="button">
              +/-
            </button>
            <button className="btn-default" type="button">
              %
            </button>
            <button className="btn-default btn-orange" type="button">
              %
            </button>
          </li>
          <li className="row">
            <button className="btn-default" type="button">
              7
            </button>
            <button className="btn-default" type="button">
              8
            </button>
            <button className="btn-default" type="button">
              9
            </button>
            <button className="btn-default btn-orange" type="button">
              x
            </button>
          </li>
          <li className="row">
            <button className="btn-default" type="button">
              4
            </button>
            <button className="btn-default" type="button">
              5
            </button>
            <button className="btn-default" type="button">
              6
            </button>
            <button className="btn-default btn-orange" type="button">
              -
            </button>
          </li>
          <li className="row">
            <button className="btn-default" type="button">
              3
            </button>
            <button className="btn-default" type="button">
              2
            </button>
            <button className="btn-default" type="button">
              1
            </button>
            <button className="btn-default btn-orange" type="button">
              +
            </button>
          </li>
          <li className="row">
            <button className="btn-default btn-zero" type="button">
              0
            </button>
            <button className="btn-default" type="button">
              .
            </button>
            <button className="btn-default btn-orange" type="button">
              =
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
