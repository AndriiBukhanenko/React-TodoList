import React from "react";

import "./TodoListItem.css";

export default class TodoListItem extends React.Component {
  render() {
    const {
      label,
      onDeleted,
      onDoneClick,
      onImportantClick,
      done,
      important
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames = classNames + " done";
    }
    if (important) {
      classNames = classNames + " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onDoneClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onImportantClick}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
