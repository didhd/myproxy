function FindProxyForURL(url, host) {
    // no-proxy
    if (shExpMatch(host, "github-action-stg.sec.samsung.net"))
        return "DIRECT";
    
    // use proxy for specific domains
    if (shExpMatch(host, "*.samsung.net|samsung.net"))
        return "SOCKS5 localhost:1350";

    if (shExpMatch(host, "flutter.dev|*.flutter.dev|dart.dev|*.dart.dev|skaffold.dev|*.skaffold.dev")) return "PROXY 168.219.61.252:8080";
    
    // by default use no proxy
    return "DIRECT";
}
