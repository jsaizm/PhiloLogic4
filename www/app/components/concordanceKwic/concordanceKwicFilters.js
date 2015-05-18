philoApp.filter('kwicBiblioDisplay', ['$rootScope', function($rootScope) {
    return function(kwicResults) {
		if (typeof(kwicResults) !== 'undefined') {
            var biblioFields = $rootScope.philoConfig.kwic_bibliography_fields;
			var buildFullCitation = function(metadataField) {
				var citationList = [];
				for (var i=0; i < biblioFields.length; i++) {
					if (biblioFields[i] in metadataField) {
                        var biblioField = metadataField[biblioFields[i]] || '';
						if (biblioField.length > 0) {
							citationList.push(biblioField); 
						}
                    }
				}
				if (citationList.length > 0) {
                    return citationList.join(', ');
                } else {
					return '';
				}
			}
			var filteredResults = [];
			for (var i=0; i < kwicResults.length; i++) {
				var resultObject = kwicResults[i];
				resultObject.fullBiblio = buildFullCitation(resultObject.metadata_fields);
				resultObject.shortBiblio = resultObject.fullBiblio.slice(0,30);
				filteredResults.push(resultObject);
			}
			return filteredResults;
        } else {
			return [];
		}
		
    }
}]);