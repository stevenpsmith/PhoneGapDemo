// With Safari 5.0.3 if a resource is added to the CACHE MANIFEST we always
// get a status of 0 from Ajax calls, even though the responseText is returned
// from the cache.  This object just assumes the call was successful.
var SafariOfflineAjaxProxy = Ext.extend(Ext.data.AjaxProxy, {

    // based on AjaxProxy::createRequestCallback
    createRequestCallback: function(request, operation, callback, scope) {
        var me = this;

        return function(options, success, response) {
            // Safari always returns status === 0 when json file
            // is in the manifest.  Assume success.
            var reader = me.getReader(),
                result = reader.read(response);
            
            Ext.apply(operation, {
                response : response,
                resultSet: result
            });

            operation.setCompleted();
            operation.setSuccessful();
            
            if (typeof callback == 'function') {
                callback.call(scope || me, operation);
            }
            
            me.afterRequest(request, true);
        };
    }
});

Ext.data.ProxyMgr.registerType('offlineajax', SafariOfflineAjaxProxy);