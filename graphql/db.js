export const people = [
    {
    id:0,
    name: "Taeri",
    age: 25,
    gender: 'male'
    },
    {
    id:1,
    name: "Sejin",
    age: 28,
    gender: 'female'
    },
    {
    id:2,
    name: "Homin",
    age: 26,
    gender: 'male'
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id)
    return filteredPeople[0]
} 