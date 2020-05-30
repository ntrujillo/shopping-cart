(function (angular) {
    'use strict';

    let app = angular.module('eShopper');

    app.component('productList', {
        bindings: { products: '<' },
        templateUrl: 'components/shop/product.list.template.html',
        controller: Controller
    });

    function Controller(ShoppingCartService) {
        this.addToCart = item => ShoppingCartService.add(item);
    }


}(angular))