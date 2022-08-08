(function AlertReset() {
    window.alert = function () {
        return true;
    }
})();