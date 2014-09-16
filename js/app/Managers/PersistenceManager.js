var PersistenceManager = function(crewList, criteriaList) {
	var self = this,
		crewKey = 'CREW',
		criteriaListKey = 'CRITERIALIST';
	
	self.save = function() {
		window.localStorage.setItem(crewKey, ko.toJSON(crewList));
		window.localStorage.setItem(criteriaListKey, ko.toJSON(criteriaList()));
	};
	
	self.load = function() {
		var crewListFromStorageJson = window.localStorage.getItem(crewKey);
		if(crewListFromStorageJson) {
			var crewListFromStorage = JSON.parse(crewListFromStorageJson);
			
			// Clear localstorage if using an older version
			if(crewListFromStorage.availableSoulstones) {
				window.localStorage.setItem(crewKey, ko.toJSON(crewList));
				return;
			}
			
			var newCrewList = [];
			_.each(crewListFromStorage, function(crewFromStorage, index) {
				var crew = new Crew();
				crew.availableSoulstones(crewFromStorage.availableSoulstones);
				crew.name(crewFromStorage.name);
			
				var newCrew = [];
				_.each(crewFromStorage.added, function(modelOrUpgrade) {
					switch(modelOrUpgrade.type) {
						case "Model":
							var model = new Model(modelOrUpgrade.name, modelOrUpgrade.factionList, modelOrUpgrade.characteristicList, modelOrUpgrade.cost, modelOrUpgrade.cache);
							model.isLeader(modelOrUpgrade.isLeader);
							newCrew.push(model);
							break;
						case "Upgrade":
							var upgrade = new Upgrade(modelOrUpgrade.name, modelOrUpgrade.factionList, modelOrUpgrade.restrictionsList, modelOrUpgrade.cost);
							newCrew.push(upgrade);
							break;
					}
					
				});
				crew.added.removeAll();
				crew.added.push.apply(crew.added, newCrew);
				newCrewList.push(crew);
			});

			crewList.removeAll();
			crewList.push.apply(crewList, newCrewList);
		}
		
		var criteriaFromStorageJson = window.localStorage.getItem(criteriaListKey);
		if(criteriaFromStorageJson) {
			var criteriaFromStorage = JSON.parse(criteriaFromStorageJson),
				newCriteriaList = [];
				
			_.each(criteriaFromStorage, function(criteria) {
				var searchBoolean = criteria.searchBoolean === "true";
				var selectedSearchOption = _.findWhere(SearchOption.List, {displayName: criteria.selectedSearchOption.displayName});
				
				newCriteriaList.push(new SearchCriteria(selectedSearchOption, criteria.searchText, searchBoolean, criteria.notOrIs));
			});
			
			criteriaList.removeAll();
			criteriaList.push.apply(criteriaList, newCriteriaList);
		}
	};
	
	self.onCordovaReady = function() {
		document.addEventListener('pause', self.save, false);
		document.addEventListener('resume', self.load, false);
	};
	
	return self;
};