/*
 * File: app/view/PLTCMPutawayView.js
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

Ext.define('app.view.XinDingOutStoreView', {
    extend: 'Ext.Container',
    alias: 'widget.xinDingOutStoreView',

    requires: [
        'Ext.Container',
        'Ext.Spacer',
        'Ext.Button',
        'Ext.field.Select'
    ],

    config: {
        id: 'xinDingOutStoreView',
        layout: 'vbox',
        items: [
            {
                xtype: 'container',
                height: 80,
                layout: 'fit',
                items: [
                    {
                        xtype: 'container',
                        cls: 'menu_view_bg',
                        height: 80,
                        itemId: 'titleLayout',
                        padding: '0 20',
                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: [
                                    'base_font_family',
                                    'title_font_size',
                                    'title_cls'
                                ],
                                html: '锌锭出库'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 80,
                        itemId: 'buttonLayout',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'base_font_family',
                                height: '100%',
                                itemId: 'mycontainer1',
                                margin: '0 0 0 10',
                                minWidth: 70,
                                layout: {
                                    type: 'hbox',
                                    align: 'center',
                                    pack: 'center'
                                },
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.element.on('tap',function(){
                                                var root = Ext.getCmp('rootView');
                                                root.pop();
                                            });

                                        },
                                        event: 'initialize'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'container',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'container',
                                                html: '<'
                                            },
                                            {
                                                xtype: 'container',
                                                html: '返回'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                cls: 'white_bg',
                padding: '8% 2%',
                scrollable: 'vertical',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '牌号',
                                width: 120
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: [
                                    'light_blue_border',
                                    'margin_content'
                                ],
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'brand',
                                        inputCls: 'white_select_input'
                                    },
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'scanInfo',
                                        inputCls: 'white_select_input',
                                        hidden: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '净重(KG)',
                                width: 120
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: 'margin_content',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'weight',
                                        clearIcon: false,
                                        inputCls: 'color_select_input',
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '物料编码',
                                width: 120
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: 'margin_content',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'matNr',
                                        clearIcon: false,
                                        inputCls: 'color_select_input',
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '物料描述',
                                width: 120
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: 'margin_content',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'matDesc',
                                        clearIcon: false,
                                        inputCls: 'color_select_input',
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        //hidden : true,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'container',
                                cls: 'blue_font',
                                html: '成本中心',
                                width: 120
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                cls: [
                                    'light_blue_border',
                                    'margin_content'
                                ],
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        cls: 'small_textfield_cls',
                                        itemId: 'costCenterCode',
                                        inputCls: 'white_select_input',
                                        //readOnly: true,
                                        placeHolder: '请选择成本中心！',
                                        autoSelect: false,
                                        displayField: 'key',
                                        store: 'CostDataViewStore',
                                        valueField: 'value'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 36,
                        margin: '2 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                cls: [
                                    'menu_view_bg',
                                    'base_font_family'
                                ],
                                margin: '15 0 0 30',
                                itemId: 'clearBtn',
                                width: '40%',
                                text: '重置'
                            },
                            {
                                xtype: 'button',
                                cls: [
                                    'menu_view_bg',
                                    'base_font_family'
                                ],
                                margin: '15 0 0 10',
                                itemId: 'outStore',
                                width: '40%',
                                text: '出库'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onClearBtnTap',
                event: 'tap',
                delegate: '#clearBtn'
            },
            {
                fn: 'onOutStoreTap',
                event: 'tap',
                delegate: '#outStore'
            },
            {
                fn: 'onPutawayViewHide',
                event: 'hide'
            },
            {
                fn:'onBrandBlur',
                event:'blur',
                delegate:'#brand'
            }
        ]
    },

    initialize: function(){
        setTimeout(function(){
            var view = Ext.getCmp('xinDingOutStoreView');
            view.down('#brand').focus();
        },500)
    },

    /**
     * 牌号失去焦点事件
     * @param textfield
     * @param e
     * @param eOpts
     */
    onBrandBlur: function (textfield, e, eOpts) {
        var item = textfield.up('#xinDingOutStoreView');
        var brand = item.down('#brand').getValue();
        item.down('#scanInfo').setValue(brand);
        if(brand.length == 0) {
            item.down('#brand').setValue();
            item.down('#weight').setValue();
            item.down('#matNr').setValue();
            item.down('#matDesc').setValue();
        } else {
            Ext.Viewport.setMasked({
                xtype: 'loadmask',
                fullscreen:true,
                message: '请稍候......'
            });
            Ext.Ajax.request({
                url:rootUrl+'/qr/xdRulesInfo/check.action',
                method:'POST',
                params: {
                    scanInfo : brand
                },
                success: function(conn, response, options, eOpts) {
                    var result = Ext.decode(conn.responseText);
                    if(result.meta.success){
                        item.down('#brand').setValue(result.data.brand);
                        item.down('#weight').setValue(result.data.weight);
                        Ext.Ajax.request({
                            url:rootUrl+'/md/confMatXinding/findByBrand.action',
                            method:'POST',
                            params: {
                                brand : item.down('#brand').getValue().toUpperCase()
                            },
                            success: function(conn, response, options, eOpts) {
                                Ext.Viewport.setMasked(false);
                                var result = Ext.decode(conn.responseText);
                                if(result.meta.success){
                                    item.down('#matNr').setValue(result.data.matNr);
                                    item.down('#matDesc').setValue(result.data.matDesc);
                                }else{
                                    Ext.Msg.alert('提示','未查询到相关物料信息！');
                                }
                            },
                            failure: function(conn, response, options, eOpts) {
                                Ext.Viewport.setMasked(false);
                                Ext.Msg.alert('错误','网络异常！');

                                item.down('#brand').setValue();
                                item.down('#weight').setValue();
                                item.down('#matNr').setValue();
                                item.down('#matDesc').setValue();
                            }
                        });
                    }else{
                        Ext.Viewport.setMasked(false);
                        Ext.Msg.alert('提示',result.meta.message);

                        item.down('#brand').setValue();
                        item.down('#weight').setValue();
                        item.down('#matNr').setValue();
                        item.down('#matDesc').setValue();
                    }
                },
                failure: function(conn, response, options, eOpts) {
                    Ext.Viewport.setMasked(false);
                    Ext.Msg.alert('错误','网络异常！');

                    item.down('#brand').setValue();
                    item.down('#weight').setValue();
                    item.down('#matNr').setValue();
                    item.down('#matDesc').setValue();
                }
            });
        }

        /*if(brand.length == 0){
            item.down('#brand').setValue();
            item.down('#weight').setValue();
            item.down('#matNr').setValue();
            item.down('#matDesc').setValue();
            return;
        }else if(brand.length < 50){
            Ext.Msg.alert('提示', "识别失败，请重新扫描！");
            item.down('#brand').setValue('');
            return ;
        }else if(brand.length < 80){
            var str = brand.split(',');
            item.down('#brand').setValue(str[1].slice(0,5));
            item.down('#weight').setValue(str[5].slice(0));
        }else{
            var str = brand.split('、');
            if(str[0].length > 12){
                item.down('#brand').setValue(str[0].slice(3,10));
                item.down('#weight').setValue(str[2].slice(3));
            }else{
                item.down('#brand').setValue(str[0].slice(3));
                item.down('#weight').setValue(str[2].slice(3));
            }
        }
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            fullscreen:true,
            message: '请稍候......'
        });
        Ext.Ajax.request({
            url:rootUrl+'/md/confMatXinding/findByBrand.action',
            method:'POST',
            params: {
                brand : item.down('#brand').getValue().toUpperCase()
            },
            success: function(conn, response, options, eOpts) {
                Ext.Viewport.setMasked(false);
                var result = Ext.decode(conn.responseText);
                if(result.meta.success){
                    item.down('#matNr').setValue(result.data.matNr);
                    item.down('#matDesc').setValue(result.data.matDesc);
                }else{
                    Ext.Msg.alert('提示','未查询到相关物料信息！');
                }
            },
            failure: function(conn, response, options, eOpts) {
                Ext.Viewport.setMasked(false);
                Ext.Msg.alert('错误','网络异常，请重新识别！');

                item.down('#brand').setValue();
                item.down('#weight').setValue();
                item.down('#matNr').setValue();
                item.down('#matDesc').setValue();
            }
        });*/

    },

    /**
     * 出库按钮
     * @param button
     * @param e
     * @param eOpts
     */
    onOutStoreTap: function(button, e, eOpts) {
        var item = button.up('#xinDingOutStoreView');
        var brand = item.down('#brand').getValue();
        var matNr = item.down('#matNr').getValue();
        var matDesc = item.down('#matDesc').getValue();
        var weight = item.down('#weight').getValue();
        var costCenterCode = item.down('#costCenterCode').getValue();
        var scanInfo = item.down('#scanInfo').getValue();
        if(brand == null || brand == ''){
            Ext.Msg.alert('提示','牌号不能为空！');
            return;
        }
        if(matNr == null || matNr == '' || matDesc == null || matDesc == ''){
            Ext.Msg.alert('提示','物料信息不能为空！');
            return;
        }
        if(weight == null || weight == ''){
            Ext.Msg.alert('提示','净重不能为空！');
            return;
        }
        if(costCenterCode == null || costCenterCode == ''){
            Ext.Msg.alert('提示','成本中心不能为空！');
            return;
        }
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            fullscreen:true,
            message: '请稍候......'
        });
        var obj = {};
        obj.matNr = matNr;
        obj.matDesc = matDesc;
        obj.weight = weight;
        obj.costCenterCode = costCenterCode;
        obj.operateFlag= 2;
        obj.scanInfo= scanInfo;
        var str = Ext.encode(obj);
        Ext.Ajax.request({
            url: rootUrl+'/mat/stock-record/doForApp.action',//outStore.action',
            method: 'POST',
            jsonData : str,
            success: function(conn, response, options, eOpts) {
                Ext.Viewport.setMasked(false);
                var result = Ext.JSON.decode(conn.responseText);
                if (result.meta.success) {
                    Ext.Msg.alert('提示','出库成功！');

                    item.down('#brand').setValue();
                    item.down('#weight').setValue();
                    item.down('#matNr').setValue();
                    item.down('#matDesc').setValue();
                }else{
                    Ext.Msg.alert('提示', '出库失败:' + result.meta.message);
                }
            },
            failure: function(conn, response, options, eOpts) {
                Ext.Viewport.setMasked(false);
                Ext.Msg.alert('错误信息','网络中断或无连接.');
            }
        });
    },

    /**
     * 重置按钮
     * @param button
     * @param e
     * @param eOpts
     */
    onClearBtnTap: function(button, e, eOpts) {
        var item = button.up('#xinDingOutStoreView');
        item.down('#brand').setValue();
        item.down('#weight').setValue();
        item.down('#matNr').setValue();
        item.down('#matDesc').setValue();
    },

    onPutawayViewHide: function(component, eOpts) {
        // component.destory();
    }

});