Demo.views.SpeakerList = Ext.extend(Ext.List, {
	cardSwitchAnimation: 'left',
	
    initComponent: function() {
        this.store = Demo.stores.Speakers;
        this.itemTpl = '<div class="speakerName">{first_name} {last_name}</div><div class="speakerPosition">{position}</div>';
		
		this.on('itemtap', this.onListItemTap, this);
		
        Demo.views.SpeakerList.superclass.initComponent.call(this);
    },

	onListItemTap: function(dv, index, item, e) {
        var ds = dv.getStore(),
            r = ds.getAt(index);
        this.fireEvent('speakerselect', r);
    }
});