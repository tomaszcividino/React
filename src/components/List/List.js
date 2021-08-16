import React from 'react';
import Hero from '../Hero/Hero.js'

class List extends React.Component {
  render() {
    return (
      <section>
        <Hero title={this.props.title} />
      </section>
    )
  }
}

 

export default List;
