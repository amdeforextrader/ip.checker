async function fetchNetworkData() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        // Putting the data into the HTML
        document.getElementById('ip-address').innerText = data.ip;
        document.getElementById('location').innerText = `${data.city}, ${data.country_name}`;
        document.getElementById('isp').innerText = data.org;
        document.getElementById('timezone').innerText = data.timezone;
        document.getElementById('currency').innerText = data.currency;

    } catch (error) {
        document.getElementById('ip-address').innerText = "Connection Error";
    }
}

function copyIP() {
    const ip = document.getElementById('ip-address').innerText;
    navigator.clipboard.writeText(ip);
    alert("IP Copied to Clipboard!");
}

// Run the function as soon as the page loads
fetchNetworkData();
