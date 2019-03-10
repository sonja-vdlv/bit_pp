'use strict'

    (function () {

        function Product(name, price, expDate) {
            this.productId = Math.floor(100000 * Math.random() + 10000)
            this.name = name;
            this.price = price;
            this.expDate = new Date(expDate);

            this.getInfo = function () {
                var nameArr = this.name.toUpperCase().split("");
                var newName = [];
                newName.push(nameArr[0]);
                newName.push(nameArr[nameArr.length - 1]);
                newName = newName.join("");
                var productCode = newName + this.productId;

                return productCode + ' ' + this.name + ' ' + this.price;
            } // getInfo

        } // product


        function ShoppingBag() {
            this.listOfProducts = [];

            this.addProduct = function (product) {
                var date = new Date();
                if (product.expDate > date) {
                    this.listOfProducts.push(product);
                };
            } //addProduct

            this.avrProductPrice = function () {
                var priceSum = 0;
                for (var i = 0; i < this.listOfProducts.length; i++) {
                    priceSum += this.listOfProducts[i].price
                }
                var avrPrice = priceSum / this.listOfProducts.length;
                avrPrice = avrPrice;

                return avrPrice;
            } // avrProductPrice

            this.getMostExpensive = function () {
                var maxPrice;
                var num = 0
                for (var i = 1; i < this.listOfProducts.length; i++) {
                    maxPrice = this.listOfProducts[0].price;
                    if (this.listOfProducts[i].price > maxPrice) {
                        maxPrice = this.listOfProducts[i].price;
                        num++
                    }
                }

                return this.listOfProducts[num];
            } // getMostExpensive

            this.totalPrice = function () {
                var priceSum = 0;
                for (var i = 0; i < this.listOfProducts.length; i++) {
                    priceSum += this.listOfProducts[i].price
                }

                return priceSum
            } //totalPrice

        } // ShoppingBag


        function PaymentCard(accountBallance, status, date) {
            this.accountBallance = accountBallance;
            this.isActive = status;
            this.date = new Date(date)

            this.checkOutAndBuy = function (shoppingBag) {
                if (this.accountBallance >= shoppingBag.totalPrice() && this.isActive === true && this.date > new Date()) {
                    console.log('purchase is successful');
                } else {
                    console.log('purchase is NOT successful');

                    if (!(this.accountBallance >= shoppingBag.totalPrice())) {
                        var miss = shoppingBag.totalPrice() - this.accountBallance
                        console.log('You are missing ' + miss + ' dinars');
                    } else if (this.isActive !== true) {
                        console.log('Your card is not active');
                    } else if (!(this.date > new Date())) {
                        console.log('Your card is not updated');
                    }

                }
            } // checkOutAndBuy

        } // PaymentCard


        var banana = new Product('banana', 200, '1 1 2021')
        var jagoda = new Product('jagoda', 300, '1 1 2021')
        var limun = new Product('limun', 200, '1 1 2021')
        var shoppingBag = new ShoppingBag()
        shoppingBag.addProduct(banana)
        shoppingBag.addProduct(jagoda)
        shoppingBag.addProduct(limun)

        var card = new PaymentCard(3000, true, '1 1 2010')
        card.checkOutAndBuy(shoppingBag);

    })();


