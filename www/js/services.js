angular.module('starter.services', []).factory('Lectures', ['$http',
    function($http) {
        return {
            getData: function(callback) {
                $http.get('https://mylogicapi.herokuapp.com/get').success(
                	function(data) {
                    	callback(data);
                	}
                );
            },

            getMidterm: function(callback){
                $http.get('https://mylogicapi.herokuapp.com/mid').success(
                    function(data) {
                        callback(data);
                    }
                );
            },

            getFinal: function(callback){
                $http.get('https://mylogicapi.herokuapp.com/final').success(
                    function(data) {
                        callback(data);
                    }
                );
            }
        }
    }
]);