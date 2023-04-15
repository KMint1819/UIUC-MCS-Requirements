import json

areas = {}
with open('courses', 'r') as f:
    for line in f.readlines():
        parts = line.split(': CS ')
        area= parts[0]
        courses = parts[1]
        courses = courses.strip()
        courses = courses.split(', ')
        areas[area] = courses
with open('breadth_areas.json', 'w') as f:
    json.dump(areas, f, indent=4)


