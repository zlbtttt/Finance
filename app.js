// Display controller
var uiController = (function(){

})();

// Finace controller
var financeController = (function(){
    
})();

// Program controller
var appController = (function(uiController, financeController){

    var addItem = function(){
        console.log("axin ogogdol awax");
    }
    
    document.querySelector(".add__btn").addEventListener("click", function(){
        addItem();
    });

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13) {
            addItem();
        } 
    });

})(uiController, financeController);


