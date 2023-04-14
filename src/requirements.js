import BreadthAreas from "./BreadthAreas.json";
const requirements = [
    {
        'description': 'You must have more than 3 advanced courses (500-level).',
        'checker': (courses) => {
            if (courses.length >= 3) {
                let numAdvanced = 0;
                courses.forEach(element => {
                    if (element >= 500) {
                        numAdvanced++;
                    }
                });
                if (numAdvanced >= 3)
                    return true;
            }
            return false;
        }
    },
    {
        'description': 'Must complete four different courses, each from a different core area, with a grade of B- or higher.',
        'checker': (courses) => {
            if (courses.length >= 4) {
                let numBreadths = 0;
                for (const [name, arr] of Object.entries(BreadthAreas)) {
                    for (let i = 0; i < courses.length; i++) {
                        if (arr.includes(courses[i])) {
                            numBreadths++;
                            break;
                        }
                    }
                }
                if (numBreadths >= 4)
                    return true;
            }
            return false;
        }
    }
];
export default requirements;