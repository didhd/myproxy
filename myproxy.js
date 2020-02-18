function FindProxyForURL(url, host) {
    // use proxy for specific domains
    if (shExpMatch(host, "*.samsung.net|samsung.net"))
        return "SOCKS5 localhost:1350";

    // by default use no proxy
    return "DIRECT";
}
