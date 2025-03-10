function receivesAFunction(spy) {
    spy()
}

function returnsANamedFunction() {
    function namedFunction() {
   }
   return namedFunction
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}