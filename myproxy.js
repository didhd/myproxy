function FindProxyForURL(url, host) {
    // use proxy for specific domains
    if (shExpMatch(host, "*.samsung.net|samsung.net"))
        return "SOCKS5 localhost:1350";

    if (shExpMatch(host, "flutter.dev")) return "PROXY 168.219.61.252:8080";
    
    // by default use no proxy
    return "DIRECT";
}
