angular.module('9JinApp', [])
  .controller('9JinCon', function ($scope) {
    $scope.books = [
      { id: 1, name: 'Book1', price: 100, img: 'images/1.jpg' },
      { id: 2, name: 'Book2', price: 100, img: 'images/2.jpg' },
      { id: 3, name: 'Book3', price: 100, img: 'images/3.jpg' },
      { id: 4, name: 'Book4', price: 100, img: 'images/4.jpg' },
      { id: 5, name: 'Book5', price: 100, img: 'images/5.jpg' },
      { id: 6, name: 'Book6', price: 100, img: 'images/6.jpg' },
      { id: 7, name: 'Book7', price: 100, img: 'images/7.jpg' }
    ]

    $scope.cart = []

    $scope.addCart = function (book) {
      if (!chkCartHave(book)) {
        pushCart(book)
      } else {
        var position = chkCartHave(book).indexOf(book.id)
        $scope.cart[position].amount += 1
        $scope.cart[position].pricesum = priceSum(position)
      }
    }
    var pushCart = function (book) {
      $scope.cart.push({
        id: book.id,
        name: book.name,
        price: book.price,
        amount: 1,
        pricesum: 100
      })
    }

    var chkCartHave = function (book) {
      var have = $scope.cart.map(function (obj) { return obj.id })
      if (have.indexOf(book.id) === -1) {
        return false
      } else {
        return have
      }
    }

    $scope.calcSumPrice = function () {
      var have = $scope.cart.map(function (obj) { return obj })
      return have.reduce(function (sum, have) { return sum + have.pricesum }, 0)
    }

    $scope.calcDiscount = function () {
      var calDis = 0
      var have = $scope.cart.map(function (obj) { return { amount: obj.amount, price: obj.price } })
      while (have.length > 0) {
        var sumPriceBook = have.reduce((sum, have) => sum + have.price, 0)
        calDis += (chkDiscount(have.length - 1)) * sumPriceBook
        have = have.map(function (obj) { return { amount: obj.amount - 1, price: obj.price } })
        have = have.filter(function (element) { return element.amount !== 0 })
      }
      return calDis
    }

    var chkDiscount = function (have) {
      var pro
      if (have === 6) {
        pro = 0.6
      } else if (have === 5) {
        pro = 0.5
      } else if (have === 4) {
        pro = 0.4
      } else if (have === 3) {
        pro = 0.3
      } else if (have === 2) {
        pro = 0.2
      } else if (have === 1) {
        pro = 0.1
      } else {
        pro = 0
      }
      return pro
    }

    var priceSum = function (position) {
      return $scope.cart[position].price * $scope.cart[position].amount
    }

    $scope.showSumPrice = function () {
      return $scope.calcSumPrice() - $scope.calcDiscount()
    }
  })
