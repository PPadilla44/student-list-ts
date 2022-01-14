export interface StudentInterface {
    city: string;
    company: string;
    email: string;
    firstName: string;
    grades: Array<string>;
    id: string;
    lastName: string;
    pic: string;
    skill: string;

}

export interface Data {
    student: StudentInterface;
    tags: Array<string>;
}