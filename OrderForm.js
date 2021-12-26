function CalculateTotal() //declares the CalculateTotal() function
{
  let unit_price={ //creates an array that links computer components to their prices
    cpu: 150,
    motherboard: 150,
    graphicsCard: 125,
    ram: 175,
    ssd: 200,    
  };
  //assigns the product of the component price and the quantity requested to a variable
  var cpu_total = document.getElementById('qty_cpu').value * unit_price.cpu;
  
  var motherboard_total = document.getElementById('qty_motherboard').value * unit_price.motherboard;
  
  var graphics_total = document.getElementById('qty_graphics').value * unit_price.graphicsCard;
  
  var ram_total = document.getElementById('qty_ram').value * unit_price.ram;
  
  var ssd_total = document.getElementById('qty_ssd').value * unit_price.ssd;
  
  //calculates the order total
  let total = cpu_total + motherboard_total + graphics_total + ram_total + ssd_total;
  //shows the order total on the webpage
  document.getElementById("total").value = total;

}
//creates a function that generates an order confirmation message
function OrderMessage(){
    confirm("Your order has been processed and you should receive an email confirmation soon.");
}
