Demo.App = Ext.extend(Ext.Panel, {
	fullscreen: true,
    layout: 'card',
    activeItem: 0,
	id: 'app',

    initComponent: function() {
   		this.list = new Demo.views.SpeakerList();
   		this.detail = new Demo.views.SpeakerDetails();

		this.refreshIcon = new Ext.Button({
            iconCls: 'refresh',
            iconMask: true,
            handler: this.onRefreshTap,
            disabled: false
        });

		this.backButton = new Ext.Button({
			text: 'Back',
            ui: 'back',
            handler: this.onBackButtonTap,
            hidden: true
        });

		this.toolbar = new Ext.Toolbar({
			id: 'navBar',
            title: 'ETE Speakers',
            dock: 'top',
            defaults: {
                scope: this,
                //ui: 'plain',
                iconMask: true
            },
            items: [this.backButton, {flex: 1, xtype: 'spacer'},this.refreshIcon]
        });

		this.dockedItems = [this.toolbar];

   		this.items = [this.list, this.detail];
   		
   		Demo.App.superclass.initComponent.call(this);

		this.list.on('speakerselect', this.onSpeakerSelect, this);
   	},

	onRefreshTap: function(){
		this.list.store.load();
	},
	
	onBackButtonTap: function() {
		this.setActiveItem(this.list, {type:'slide', reverse: true});
		this.toolbar.setTitle('ETE Speakers');
		//make sure the back button is hidden and the refresh is shown
		Ext.getCmp('navBar').items.get(0).hide();
		Ext.getCmp('navBar').items.get(2).show();
	},
	
	onSpeakerSelect: function(speaker) {
        this.setActiveItem(this.detail, 'slide');
        this.detail.updateSpeaker(speaker);
    }
});