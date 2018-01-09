<template>
  <f7-page v-on:page:init="hehe">
    <f7-navbar title="WebSocket" back-link="Back" sliding></f7-navbar>
    <f7-block inner>
      <p>Here is About page!</p>
      <p>You can go <f7-link back>back</f7-link>.</p>
      <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
      <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
    </f7-block>
  </f7-page>
</template>

<script>
export default { 
	methods: {
	    hehe: function() {//Wonderful Success!
	       alert("WebSocket u biubiubiu");
	       if("WebSocket" in window) {
						console.log("WebSocket ready!");
				
						ws = new WebSocket("ws://192.168.20.91:8180/JasonWebSocket/websocket");
				
						ws.onopen = function() {
							ws.send("Jason Enter!");
						};
				
						ws.onmessage = function(evt) {
							
						};
				
						ws.onclose = function() {
							alert("ws close...");
						};
					} else {
						alert("WebSocket Failed!");
					}
	    }
	}
}
</script>