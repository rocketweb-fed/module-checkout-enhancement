/**
 * RocketWeb
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 *
 * @category  RocketWeb
 * @package   RocketWeb_CrossOrigin
 * @copyright Copyright (c) 2016-2017 RocketWeb (http://rocketweb.com)
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author    Rocket Web Inc.
 */
define(
    [
        'jquery',
        'ko',
        'underscore',
        'Magento_Ui/js/form/form',
        'Magento_Customer/js/model/customer',
        'Magento_Customer/js/model/address-list',
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/action/create-billing-address',
        'Magento_Checkout/js/action/select-billing-address',
        'Magento_Checkout/js/checkout-data',
        'Magento_Checkout/js/model/checkout-data-resolver',
        'Magento_Customer/js/customer-data',
        'Magento_Checkout/js/action/set-billing-address',
        'Magento_Ui/js/model/messageList',
        'mage/translate'
    ],
    function (
        $,
        ko,
        _,
        Component,
        customer,
        addressList,
        quote,
        createBillingAddress,
        selectBillingAddress,
        checkoutData,
        checkoutDataResolver,
        customerData,
        setBillingAddressAction,
        globalMessageList,
        $t
    ) {
        'use strict';
        var mixin = {
            updateAddress: function () {
                this._super();
                if (this.source.get('params.invalid')) {
                    var errorElement = $("#"+this.dataScopePrefix+"-complete-form div[class*='mage-error'], #"+this.dataScopePrefix+"-complete-form div[class*='field-error']");
                    if(errorElement.length) {
                        $('#'+this.dataScopePrefix+'-complete-form').addClass('complete').show();
                    }
                }
            }
        };

        return function (target) {
            return target.extend(mixin);
        };
    });