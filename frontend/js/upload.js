let currentFile = null;
let currentPrice = 0;

async function uploadModel(){

const file = document.getElementById("file").files[0];

if(!file){
alert("Select a file");
return;
}

currentFile = file;

document.getElementById("status").innerText = "Uploading...";

const { data:{user} } = await supabaseClient.auth.getUser();

const path = user.id + "/" + file.name;

await supabaseClient.storage
.from("models")
.upload(path,file);

const fileSizeMB = file.size / (1024 * 1024);

currentPrice = Math.round(fileSizeMB * 10);

document.getElementById("price").innerText = "₹" + currentPrice;

document.getElementById("status").innerText = "Upload complete";

}

function addToCart(){

if(!currentFile){
alert("Upload a file first");
return;
}

const cart = JSON.parse(localStorage.getItem("cart") || "[]");

cart.push({
name: currentFile.name,
price: currentPrice
});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}