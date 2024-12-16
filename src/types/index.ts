// define the Person class' attributes
export interface Person{
    id: string,
    name: string,
    age: number,
    gender?: string // optional
}

export type Persons = Array<Person> // generics
// export type Persons = Person[] // array , ok