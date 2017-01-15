class jlScheduleItem
{
    public startDate : Date;
    public endDate : Date;
    public name : string;
    constructor( name : string , startDate : Date, endDate : Date )
    {
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;	
    }

}



class jlSchedule {
    constructor(startDate: Date) 
    {
        this._startDate = startDate;
    }
    
    static MS_PER_MINUTE : number = 60000;

    private _startDate : Date;
    private _schedule : Array<jlScheduleItem> = [];

    private _addDays( startDate : Date, days : number ) : Date 
    {
        let result_ = new Date(startDate.valueOf());
        result_.setDate(result_.getDate() + days);
        return result_;
    }

    private _getEndDate(startDate:Date, numDays:number):Date
    {
        let sevenDaysLater = this._addDays( startDate, numDays );
	let durationInMinutes = 15;
        let endDate = new Date( sevenDaysLater.valueOf() - durationInMinutes * jlSchedule.MS_PER_MINUTE );
        return endDate;
    }     
    
    private _getScheduleItem( name: string, startDate : Date, numDays: number ) : jlScheduleItem
    {
        let endDate_ = this._getEndDate( startDate, numDays );
	return new jlScheduleItem( name, startDate, endDate_ );
    }

    public addSchedule( nameList: string[] ):Array<jlScheduleItem>
    {
        
        let arrayLength_ = nameList.length;
        let currentDate_ = this._startDate;
        for (let name of  nameList) 

	{
	    this._schedule.push( this._getScheduleItem( name, currentDate_, 7 ) );
	    currentDate_ = this._addDays( currentDate_, 7 );
	
        } 
    
    
       this._startDate = currentDate_;
       return this._schedule; 
    }
}
