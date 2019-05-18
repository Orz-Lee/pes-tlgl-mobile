/*
 * File: app/view/MenuDataItem.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('app.view.MenuDataItem', {
    extend: 'Ext.dataview.component.DataItem',
    alias: 'widget.menuDataItem',

    requires: [
        'Ext.Container',
        'Ext.Img'
    ],

    config: {
        margin: '1%',
        minHeight: 90,
        width: '47%',
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        items: [
            {
                xtype: 'container',
                cls: 'menu_item_bg',
                itemId: 'menuDataItemBG',
                width: '100%',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'container',
                        margin: '20 0 0 0',
                        layout: {
                            type: 'vbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'image',
                                height: 50,
                                itemId: 'icon',
                                width: 90,
                                src: '%20'
                            },
                            {
                                xtype: 'container',
                                cls: 'base_font_family',
                                itemId: 'label',
                                margin: '10 0'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    updateRecord: function(record) {
        // Provide an implementation to update this container's child items
        var me =this;
        console.log(me.down('#icon'));
        if (record!==null) {
            console.log(record);
            me.down('#icon').setSrc(record.get('image'));
            me.down('#label').setHtml(record.get('label'));

        }

    }

});