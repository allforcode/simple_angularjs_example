var bookApp = angular.module('bookApp', ['ngRoute'])
		.controller('BookCtrl', function($scope, $http, $filter, $routeParams, $sce) {

			$scope.template = {
				'list':'tpls/bookList.html',
				'detail':'tpls/bookDetail.html'
			}
			
			$http.get('data/books.json').success(function(data){
				$scope.books = data;
			}).error(function(data, status){
				console.log("Server error with status of " + status);
			});

			$scope.getBookDetail = function(title){
				$scope.curBook = $filter('filter')($scope.books, function (d) {return d.title === title;})[0];
				//console.log($scope.curBook);
			}
			
			$scope.renderHTML = function(html){
				return $sce.trustAsHtml(html)
			}
			
		});