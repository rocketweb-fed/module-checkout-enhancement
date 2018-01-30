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
        'ko',
        'uiComponent',
        'Magento_Checkout/js/model/quote'
    ],
    function (
        ko,
        Component,
        quote
    ) {
        'use strict';

        return function(paymentDefault) {
            return paymentDefault.extend({
                initialize: function () {
                    var _self = this;
                    _self._super();

                    if (window.checkoutConfig.rwCheckoutEnhancement &&
                        window.checkoutConfig.rwCheckoutEnhancement.isActiveDefaultPayment
                    ) {
                        var defaultMethod = window.checkoutConfig.rwCheckoutEnhancement.defaultMethod;

                        // See _self.isChecked
                        if (defaultMethod &&
                            _self.item &&
                            _self.item.method &&
                            _self.item.method == defaultMethod
                        ) {
                            if (quote.paymentMethod && !quote.paymentMethod()) {
                                _self.selectPaymentMethod();
                            }
                        }
                    }
                }
            });
        }
    }
);
