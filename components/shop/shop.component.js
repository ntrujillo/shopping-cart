(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('shop', {        
        templateUrl: 'components/shop/shop.template.html',
        controller: Controller
    });



    function Controller(ShoppingCartService) {


        this.addCart = product => ShoppingCartService.add(product);

    }


}(angular))