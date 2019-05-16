import React, {Component} from "react";

class Collapsible extends Component {
  render() {
    const {id, title, fromTvShow, isVisible, cid, collapsibleAction} = this.props;
    return (
      <section id={id} class={`collapsible ${isVisible && cid === id ? 'collapsible--open' : null}`}>
        <div className="collapsible__trigger" data-id={id} onClick={collapsibleAction}>
          <h2 className="collapsible__title">{title}</h2>
        </div>
        <div className="collapsible__panel">
          <p className="collapsible__from">From: {fromTvShow}</p>
        </div>
      </section>
    );
  }
}

export default Collapsible;