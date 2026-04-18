async function checkAuth(){

const { data } = await supabaseClient.auth.getUser();

if(!data.user){
window.location.href="login.html";
}

}

async function logout(){
await supabaseClient.auth.signOut();
window.location.href="login.html";
}