function Connect(){
  chrome.sockets.tcp.create({}, function(createInfo) {
      chrome.sockets.tcp.connect (createInfo.socketId,"192.168.178.21", 502, onConnected);
      socket1 = createInfo.socketId;});
    chrome.sockets.tcp.send(socket1, writingcommand.buffer, function(sendInfo) {
            if(sendInfo.resultCode < 0){
                    alert("Connection failur");
            }
            else{
                    alert("You are connected");
            }
    }); function Disconnect(){
 chrome.sockets.tcp.disconnect(socket1, onDisconnect);
}
function check()
{
alert("I am an alert box!");
var test  =	document.getElementById('e0').value;
console.log(test);
}
function Write(){
	// var x = document.getElementById("demo");
	
    chrome.sockets.tcp.onReceive.addListener(function(info) {
            var response = new Uint8Array(info.data);
	
	    e0.checked = (response[9]&1);
            e1.checked = (response[9]&2);
            e2.checked = (response[9]&4);
            e3.checked = (response[9]&8);
 
    }); 
}
function Read(){
writingcommand = new Uint8Array([0,0,0,0,0,8,1,15,0,0,0,4,1,15]); // modbus request
chrome.sockets.tcp.send(socket1, writingcommand.buffer, function(sendInfo) {
if(sendInfo.resultCode < 0){
//error
}else{
 //Data send
}
} );
}
