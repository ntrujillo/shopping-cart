angular.module("eShopper")
    .component('headerComponent', {
        templateUrl: 'components/header/header.template.html',
        controller: ['ShopperService', '$translate',
            function (service, $translate) {

                service.getInfo().then(data => this.company = data);

                this.changeLanguage = lang => {
                    $translate.use(lang);
                }

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
                   /* {
                        name: "Blog",
                        href: "blog-list"
                    },*/
                    {
                        name: "Contact",
                        href: "contact"
                    }
                ]
            }
        ]
    });

