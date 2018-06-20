var app = angular.module('app', ['ui.bootstrap']);
app.controller('appController', function ($scope, $uibModal, $log) {
	
	$scope.eintraege=[
		 {id:1, vorname: "Donald", nachname: "Duck", ort: "Entenhausen", telefon: "555-0815"}
		,{id:2, vorname: "Peter", nachname: "Pan", ort: "Nimmerland", telefon: "555-1234"}
	];
	
	$scope.lastId = $scope.eintraege.length; // Id des letzten Eintrags vorhalten
	
	// Aktion Eintrag hinzufuegen
	$scope.newRow = function() {
		
		var props = $scope.inputEintrag.split(',');
		
		$scope.eintraege.push({
			id: ++$scope.lastId,			// Neue Id durch Inkrement ermitteln
			vorname: props[0],	 
			nachname: props[1],
			ort: props[2],
			telefon: props[3],
		});
		$scope.inputEintrag = ''; // Textfeld leeren
	};
	
	// Aktion Eintrag entfernen
	$scope.removeRow = function(id){				
		var index = -1;		
		var comArr = eval( $scope.eintraege );
		// Listenposition des Eintrags ermitteln (via Schleife)
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].id === id ) { 
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.eintraege.splice( index, 1 );		
	};
	
	// Aktion Eintrag bearbeiten
	$scope.editRow = function(row){

		var neuerEintrag = {
			id: row.id,
			vorname: row.vorname,
			nachname: row.nachname,
			ort: row.ort,
			telefon: row.telefon
		};
		
		//Eintrag dem Bearbeiten Dialog uebergeben
		var modalInstance = $uibModal.open({
			templateUrl: 'editEintrag.html',  // Via template include (index.html)
			controller: 'modalController',
			backdrop  : 'static',
			keyboard  : false,
			//size: size, // z.B. 'lg' oder 'sm'
			resolve: {
				item: function () {
					return neuerEintrag;
				}
			}
		});
		
		//Eintrag in Liste aktualisieren		
		modalInstance.result.then(function (selectedItem) {
			var rows = $scope.eintraege;
			// Listenposition des Eintrags ermitteln (via IndexOf)
			var idx = rows.map(function(e) { 
				return e.id; 
			}).indexOf(selectedItem.id);
			$scope.eintraege[idx] = selectedItem; //Eintrag ersetzen
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});

	}
});

app.controller('modalController', function ($scope, $uibModalInstance, item) { 

  $scope.item = item; // Zu bearbeitender Eintrag

  $scope.ok = function () {
  	$uibModalInstance.close($scope.item); // Eintrag zurueckgeben
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                 event.preventDefault();
            }
        });
    };
});