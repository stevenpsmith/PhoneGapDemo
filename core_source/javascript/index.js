Ext.ns('Demo', 'Demo.views', 'Demo.stores');

//Ext.setup({
//    phoneStartupScreen: 'images/phone_startup.png',
//    icon: 'images/icon.png',
//    glossOnIcon: false,
//    
//    onReady: function() {
//		if (Ext.is.Android){
//			Ext.get('demoStylesheet').dom.href = "sencha/css/android.css";
//		}else if (Ext.is.iOS){
//			Ext.get('demoStylesheet').dom.href = "sencha/css/apple.css";
//		}
//        var app = new Demo.App();
//    }
//});

//isRunningOnDevice = false;

 Ext.regApplication({
    name: 'Demo',
	phoneStartupScreen: 'images/phone_startup.png',
    icon: 'images/icon.png',
    glossOnIcon: false,
	isRunningOnDevice: false,
 
    launch: function() {
		this.launched = true;
		this.mainLaunch();
    },
					
	mainLaunch: function() {
    	try{
			if (!device || !this.launched) {
					return;
			}
			this.isRunningOnDevice = true;
    	} catch (e) {
			console.log('we are not on a device');
		}
		console.log('mainLaunch');
		if (Ext.is.Android){
			 Ext.get('demoStylesheet').dom.href = "sencha/css/android.css";
		}else if (Ext.is.iOS){
			 Ext.get('demoStylesheet').dom.href = "sencha/css/apple.css";
		}
		var app = new Demo.App();
	}
 });
