var itunesApp = angular.module("itunesApp");


var model = {
    tracks: [
      {artistName:"Matthew Vaughn", collectionName:"Kingsman 2 Movie Collection", trackName:"Kingsman: The Secret Service",   trackId:957056432,
		artworkUrl60:"http://is1.mzstatic.com/image/thumb/Video3/v4/4e/df/0f/4edf0f4b-83cf-2640-8c6c-de22a54864db/source/30x30bb.jpg"}, 
		{artistName:"Michael Jackson", collectionName:"The Essential Michael Jackson", trackName:"Man In the Mirror", trackId:159294478,
			artworkUrl60:"http://is2.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg"}, 
		{artistName:"Michael Jackson", collectionName:"The Essential Michael Jackson", trackName:"Billie Jean", trackId:159293848,
		artworkUrl60:"http://is2.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg"}, 
		{artistName:"Michael Jackson", collectionName:"The Essential Michael Jackson", trackName:"Thriller", trackId:159294311,
		artworkUrl60:"http://is2.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg"}
	
    ]
};



itunesApp.controller('itunesController',
	function itunesController($scope, $http){
		
		
		
		$scope.search= function(val) {
			
			val = val.trim();
			val = val.replace(/\s+/g, '+');
			
		$http({method:'GET', url:'https://itunes.apple.com/search', params: {'term':val}})
             .then(function successCallback(response) {
                
            
            $scope.list.tracks = response.data.results;
            
			}, function errorCallback(response) {}
			);
		}    
		
		
		$scope.opened=[];
		
		$scope.showDetails = function(id){
			
			if (id != undefined){
				var td = angular.element(document.getElementById("d"+id));
				var btn = angular.element(document.getElementById("b"+id));
				
				if(btn.text()=='+'){
					td.css('display','table-cell');
					btn.html("&ndash;");
					
				}else{
					$scope.opened=[];
					td.css('display','none');
					btn.text('+');
					
					return;
					
				}
				if($scope.opened!='undefined'){
					
					$scope.opened.forEach(function(item, i, arr) {
						var div = angular.element(document.getElementById("d"+item));
						var btn = angular.element(document.getElementById("b"+item));
						div.css('display','none');
						btn.text('+');
					});
					$scope.opened=[];
					$scope.opened.push(id);	
				}
			
				
			
				
			}
		}
		
		
		
		$scope.list = model;
		   
		   
		
		
		$scope.myfunc = function(){
			//console.log("init");
			$scope.search('Michael Jackson');
		}
		
 }); 
