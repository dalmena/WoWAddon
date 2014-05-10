var AuctionDuration = function(hours, minutes, seconds){
 	this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
}

AuctionDuration.prototype.addSeconds = function(seconds){
 	var totalSeconds = this.seconds + seconds;
    
    if(totalSeconds >= 60){
    	this.seconds = totalSeconds % 60;
        this.addMinutes(Math.floor(totalSeconds/60));
    }       
    else if(totalSeconds < 0){
   		this.seconds = 60 + (totalSeconds % 60); 
        this.addMinutes(Math.floor(totalSeconds/60));
    }
    else{
        this.seconds += seconds;
    }     
}

AuctionDuration.prototype.addMinutes = function(minutes){
 	var totalMinutes = this.minutes + minutes;
    
    if(totalMinutes >= 60){
    	this.minutes = totalMinutes % 60;
        this.addHours(Math.floor(totalMinutes/60));
    }       
    else if(totalMinutes < 0){
   		this.minutes = 60 + (totalMinutes % 60); 
        this.addHours(Math.floor(totalMinutes/60));
    }
    else{
        this.minutes += minutes;
    }           
}

AuctionDuration.prototype.addHours = function(hours){
 	this.hours += hours;
}

unsafeWindow.AuctionDuration = AuctionDuration;