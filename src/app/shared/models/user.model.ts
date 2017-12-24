export class User {
    constructor (
        public userEmail: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public group: number,
        public id?: number
    ) {}
}