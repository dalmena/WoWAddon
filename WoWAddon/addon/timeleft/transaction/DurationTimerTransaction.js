var DurationTimerTransaction = function(view, duration, initialDate){
    this.view = view;
 	this.duration = duration;
    this.initialDate = initialDate;
    this.clockInterval = null;
}

DurationTimerTransaction.prototype.execute = function(){	
    var that = this;
    this.clockInterval = setInterval(function(){
    	that.clock();
    }, 1000);
}

DurationTimerTransaction.prototype.reverse = function(){	
    clearInterval(this.clockInterval);
    this.clockInterval = null;
}

DurationTimerTransaction.prototype.clock = function(){
    var currentDate = new Date();
    var duration = this.duration;
    
    var timeLeft = currentDate.getTime() - this.initialDate.getTime();
    var timeLeftInSeconds = Math.floor(timeLeft/1000);
    
    var seconds = (timeLeftInSeconds) % 60;
    var minutes = Math.floor(timeLeftInSeconds/60) % 60;
    var hours = Math.floor(timeLeftInSeconds/3600);
        
    var newDuration = new AuctionDuration(duration.hours, duration.minutes, duration.seconds);
    newDuration.addSeconds(-seconds);
    newDuration.addMinutes(-minutes);
    newDuration.addHours(-hours);
    
    TimeLeftViewFactory.format(this.view, newDuration);   
}

unsafeWindow.DurationTimerTransaction = DurationTimerTransaction;