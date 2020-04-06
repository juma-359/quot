export class Quote {
    public showDescription:boolean;constructor(public description:string, public  upvotes:number,_publicDownvotes:number, public author:string,public addNewQuote:string,public completeDate:Date){
        this.showDescription = false
    }
}
