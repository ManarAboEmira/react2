import {Component} from "react";

class ClassCom extends Component {
  render() {
    const { corse1, course2, children } = this.props;
    return (
      <div>
        <h2>Task No.Two</h2>
        <p>first course = {corse1}</p>
        <p>Second course = {course2}</p>
        {children}
      </div>
    );
  }
}
export default ClassCom;
