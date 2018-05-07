
var config = {
    map: {
        "*": {
            rwGoogleAddressTab: "RocketWeb_CheckoutEnhancement/js/google-address-search-tabs",
            rwAddressValidation: 'RocketWeb_CheckoutEnhancement/js/account/addressValidation'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/payment/default': {
                'RocketWeb_CheckoutEnhancement/js/view/payment/default-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'RocketWeb_CheckoutEnhancement/js/view/shipping-mixin': true
            },
            'Amazon_Payment/js/view/shipping': {
                'RocketWeb_CheckoutEnhancement/js/view/amazon-shipping-mixin': true
            },
            'Magento_Checkout/js/view/billing-address': {
                'RocketWeb_CheckoutEnhancement/js/view/billing-address-mixin': true
            }
        }
    },
    paths: {
            "TweenLite": "//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenLite.min"
    }
};
