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
					  '<input id="speakerId" type="hidden" value="{id}" />',
				      '<div class="field"><span class="label">Name:</span> {name}</div>',
					  '<div class="field"><span class="label">Position:</span> {position:ellipsis(40, true)}</div>',
					  '<div class="field"><span class="label">Bio:</span> {bio:ellipsis(60, true)}</div>',
					'</div>',
					'<br>'
				)
		});
		
		this.button = new Ext.Button({
			text: 'Add to Address Book',
			width: 200,
            handler: this.addContact
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
	},

    addContact: function() {
		var speakerId = Ext.getDom('speakerId').value;
		var store = Ext.getStore('SpeakerStore');
		var speaker = store.getById(parseInt(speakerId, 10));
       	
        var contactName = new ContactName();
	   	contactName.givenName = speaker.get('first_name');
	   	contactName.familyName = speaker.get('last_name');
        
	   	var newContact = navigator.service.contacts.create();
	   	newContact.name = contactName;
        newContact.displayName = speaker.get('name');
	    newContact.nickname = speaker.get('name');
        newContact.note = speaker.get('position');
       	
       	newContact.save(
       			function(contacts) {
       				alert('Contact Saved');
       			},
       			function(contactError) {
       				alert('Error saving contact: ' + contactError.code);
       			}
       	);
    }
});