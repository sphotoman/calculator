(function() {

    document.getElementById('calculator').addEventListener('submit', function(event){
        event.preventDefault();
        //console.log('Form submit triggered');

    var cost = document.getElementById('cost').value,
        tax = document.getElementById('tax').value,
        total;

    cost = parseInt(cost);
    tax = parseInt(tax);

        console.log(cost, tax);
         total = ((tax/100) * cost) + cost;

        //console.log(cost, tax, total);
        document.getElementById('results').textContent = total;
    });

})();