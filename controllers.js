/**
 * Created by jh on 2016/11/30.
 */
var app= angular.module('myapp', []);
var cart_app = angular.module('cart-app',[]);
app.controller('HelloController',function ($scope) {
    $scope.greeting = {text:'Hello'};
});
cart_app.controller('cartController',function ($scope) {
    $scope.items = [
        {title:'Paint pots',quantity:8,price:3.95},
        {title:'Polka dots',quantity:17,price:12.95},
        {title:'Pebbles',quantity:5,price:6.95},
    ];
    $scope.remove = function (index) {
        $scope.items.splice(index,1);
    }
});