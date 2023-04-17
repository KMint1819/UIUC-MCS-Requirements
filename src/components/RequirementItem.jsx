import React from 'react';
import './RequirementItem.css';

const RequirementItem = (props) => {
  const courses = props.selectedCourses;
  const description = props.description;
  const checker = props.checker;

  if (checker(courses))
    return (
      <p >
        <font className="req-satisfied" color="green">
          {description}
        </font>
      </p>
    );
  return (
    <p >
      <font color="red" className="req-unsatisfied">
        {description}
      </font>
    </p>
  );
};
export default RequirementItem;