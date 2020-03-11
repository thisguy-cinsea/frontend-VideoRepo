export class User {
    private userName: String;
    private password: String;
    private userId: Number;

    constructor(){}


    public getUserName():String {
        return this.userName;
    }

    public setUserName(userName:String){
        this.userName = userName;
    }

    public getPassword():String {
        return this.password;
    }

    public setPassword(password:String){
        this.password = password;
    }

    public setUserId(userId:Number){
        this.userId = userId;
    }

    public getUserId():Number {
        return this.userId;
    }

}