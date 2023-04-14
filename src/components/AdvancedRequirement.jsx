import React, { useState, StyleSheet } from 'react';
import './AdvancedRequirement.css'

const AdvancedRequirement = (props) => {
    const courses = props.selectedCourses;
    let isSatisfied = false;
    if (courses.length >= 3) {
        let numAdvanced = 0;
        courses.forEach(element => {
            if (element >= 500) {
                numAdvanced++;
            }
        });
        if (numAdvanced >= 3)
            isSatisfied = true;
    }
    console.log('AdvancedRequirement is satisfied: ' + isSatisfied + '');
    if (isSatisfied)
        return <p className="req-satisfied">You should have more than 3 advanced courses (500-level)</p>
    return <p className="req-unsatisfied">You have more than 3 advanced courses (500-level)</p>
}
export default AdvancedRequirement;