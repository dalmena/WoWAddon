$(function(){
    if(window.location.search.replace('?Server', '') != window.location.search){
        var notificationStorage = new AuctionNotificationStorage();
    	
        new AuctionCheckTimeLeftChangesTransaction(new TimeLeftAuctionStorage(), new TimeLeftChangeStorage(), notificationStorage).execute();
        new ThemeLessAddon().execute();
          
        location.href = location.href;        	   
    }
});