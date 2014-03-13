var Model = function(name, factionList, characteristicList, cost, cache) {
	var self = this;
	
	self.name = name;
	self.factionList = factionList;
	self.characteristicList = characteristicList;
	self.cost = cost;
	self.cache = cache;
	
	self.isLeader = ko.observable(false);
			
	self.canBeLeader = ko.computed(function() {
		return !self.isLeader() && self.cache;
	});
	
	self.clone = function() {
		return new Model(name, factionList, characteristicList, cost, cache);
	};
	
	self.type = "Model";
}