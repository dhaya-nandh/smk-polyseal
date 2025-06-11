//toggle page
const items=document.querySelector(".menuitems")
function show(){
items.style.display="block";
}
function hide()
{
    items.style.display="none";
}

//Product page

function sendWhatsApp(productName, quantityId)
 {
    // WhatsApp number
    const yourWhatsAppNumber = "+918122223530"; 
    // Get the quantity value
    const quantity = document.getElementById(quantityId).value;
    // Create a message with the product name and quantity
    const message = `You have ordered ${quantity} pieces of ${productName}.`;
    // Build WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${yourWhatsAppNumber}&text=${encodeURIComponent(message)}`;
    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');
}

//contact page

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:smkpolyseals@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    
    window.location.href = mailtoLink;
}
