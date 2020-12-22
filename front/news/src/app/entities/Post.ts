export class Post {
    constructor(
        public title:string,
        public author:string,
        public text:string,
        public created_at:Date = null,
        public _id:string = null,
        public archived_at:string = null,
        public newPost:boolean = false
    ) {}
}