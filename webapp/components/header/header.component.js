(function (angular) {
    'use strict';
    let app = angular.module("eShopper");

    app.component('headerComponent', {
        templateUrl: 'components/header/header.template.html',
        controller: HeaderCtrl
    });

    function HeaderCtrl(CompanyService) {

        CompanyService.getInfo().then(data => this.company = data);


        this.options = [
            /* { name: 'Account', href: '', icon: 'fa fa-user' },
             { name: 'Wishlist', href: '', icon: 'fa fa-star' },*/
            { name: 'Checkout', href: 'checkout', icon: 'fa fa-crosshairs' },
            { name: 'Cart', href: 'cart', icon: 'fa fa-shopping-cart' },
            { name: 'Login', href: 'login', icon: 'fa fa-lock' }];

        this.menu = [

            {
                name: "Home",
                href: "home"
            },
            {
                name: "Shop",
                href: "",
                hasChilds: true,
                childs: [
                    { name: "Products", href: "product-list" },
                    { name: "Checkout", href: "checkout" },
                    { name: "Cart", href: "cart" },
                    { name: "Login", href: "login" }]
            },
            {
                name: "Blog",
                href: "blogger"
            },
            {
                name: "Contact",
                href: "contact"
            }
        ]
    }
}(angular))