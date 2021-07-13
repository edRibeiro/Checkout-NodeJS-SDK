'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Authorizes payment for an order. The response shows authorization details.
 **/
class CustomersPartnerReferralsGetRequest {
  constructor(partnerReferralId) {
    this.path = '/v2/customer/partner-referrals/{partner_referral_id}?';
    this.path = this.path.replace('{partner_referral_id}', querystring.escape(partnerReferralId));
    this.verb = 'GET';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }
}

module.exports = { CustomersPartnerReferralsGetRequest: CustomersPartnerReferralsGetRequest };