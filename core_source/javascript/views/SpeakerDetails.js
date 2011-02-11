Demo.views.SpeakerDetails = Ext.extend(Ext.Panel, {
	//layout: 'card',
	styleHtmlContent: true,
	layout: {
		type: 'vbox',
		align: 'center'
	},
	
	initComponent: function() {
		this.detailView = new Ext.Component({
			tpl: new Ext.XTemplate(
			    	'<div class="data-set">',
				      '<div class="field"><span class="label">Name:</span> {name}</div>',
					  '<div class="field"><span class="label">Position:</span> {position:ellipsis(40, true)}</div>',
					  '<div class="field"><span class="label">Bio:</span> {bio:ellipsis(60, true)}</div>',
					'</div>',
					'<br>'
				)
		});
		
		this.button = new Ext.Button({
			text: 'Add to Address Book',
			width: 200
		});
		
		var viewItems = [this.detailView];
		
		if (Demo.isRunningOnDevice) {
			viewItems[1] = this.button;
		}
		
		this.items = viewItems;
		
	
		Demo.views.SpeakerDetails.superclass.initComponent.call(this);
		this.on('activate', this.onPanelActivate, this);
		
		console.log('We are running on a device? ' + Demo.isRunningOnDevice);
	},
	
	updateSpeaker: function(speaker) {
		Ext.getCmp('navBar').setTitle('Details');
		this.detailView.update(speaker.data);
		Ext.getCmp('navBar').doLayout();
	},
	
	onPanelActivate: function() {
		Ext.getCmp('navBar').items.get(0).show();
		Ext.getCmp('navBar').items.get(2).hide();
	}
});