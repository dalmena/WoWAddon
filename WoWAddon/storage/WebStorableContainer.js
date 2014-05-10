var WebStorableContainer = function(container){
 	this.container = container;
}

WebStorableContainer.prototype.set = function(index, data){
	this.container.setItem(index, data);    
}

WebStorableContainer.prototype.get = function(index, defaultValue){
	return this.container.getItem(index, defaultValue);    
}

unsafeWindow.WebStorableContainer = WebStorableContainer;