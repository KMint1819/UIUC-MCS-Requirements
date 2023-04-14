import React, { useState, StyleSheet } from 'react';
import './AdvancedRequirement.css'

const text = "You must have more than 3 advanced courses (500-level)";
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
        return (
            <p >
                <font className="req-satisfied" color="green">
                    {text}
                </font>
            </p>
        )
    return (
        <p >
            <font color="red" className="req-unsatisfied">
                {text}
            </font>
        </p>
    )
}
export default AdvancedRequirement;