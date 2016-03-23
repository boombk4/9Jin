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
        if (!chkCartHave(book)) {
          pushCart(book)
        } else {
          $scope.cart[(chkCartHave(book).indexOf(book.id))].amount += 1
        }
      }
    }
    var pushCart = function (book) {
      $scope.cart.push({
        id: book.id,
        name: book.name,
        price: book.price,
        amount: 1
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
      return have.reduce((sum, have) => sum + (have.price * have.amount), 0)
    }

    $scope.calcDiscount = function () {
      var calDis = 0
      var have = $scope.cart.map(function (obj) { return { amount: obj.amount, price: obj.price } })
      while (have.length > 0) {
        var sumPriceBook = have.reduce((sum, have) => sum + have.price, 0)
        calDis += ((have.length - 1) / 10) * sumPriceBook
        have = have.map(function (obj) { return { amount: obj.amount - 1, price: obj.price } })
        have = have.filter((element) => element.amount !== 0)
      }
      return calDis
    }

    $scope.showSumPrice = function () {
      return $scope.calcSumPrice() - $scope.calcDiscount()
    }
  })
