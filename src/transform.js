const groupAdultsByAgeRange = (people) => {
    const result = {};
    if (people.length === 0) {
        return result;
    } else {
        const firstGroup = people.map(person => person)
            .filter(person => person.age > 17 && person.age < 21)
            .reduce((previous, current) => {
                return [...previous, { 'name': current.name, 'age': current.age }];
            }, []);

        const secondGroup = people.map(person => person)
            .filter(person => person.age >= 21 && person.age <= 30)
            .reduce((previous, current) => {
                return [...previous, { 'name': current.name, 'age': current.age }];
            }, []);

        const thirdGroup = people.map(person => person)
            .filter(person => person.age >= 31 && person.age <= 40)
            .reduce((previous, current) => {
                return [...previous, { 'name': current.name, 'age': current.age }];
            }, []);

        const fourthGroup = people.map(person => person)
            .filter(person => person.age >= 41 && person.age <= 50)
            .reduce((previous, current) => {
                return [...previous, { 'name': current.name, 'age': current.age }];
            }, []);

        const fifthGroup = people.map(person => person)
            .filter(person => person.age >= 51)
            .reduce((previous, current) => {
                return [...previous, { 'name': current.name, 'age': current.age }];
            }, []);

        const resultObject = {
            ['20 and younger']: firstGroup,
            ['21-30']: secondGroup,
            ['31-40']: thirdGroup,
            ['41-50']: fourthGroup,
            ['51 and older']: fifthGroup
        };

        return Object.keys(resultObject).filter(key => resultObject[key].length != 0).reduce((previous, key) => {
            previous[key] = resultObject[key];
            return previous;
        }, {})
    }
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;