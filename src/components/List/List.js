import React from 'react';
import styles from './App.scss';
import App from '../App.js'

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}>Things to do</h2>
      </section>
    )
  }
}

 

export default List;
