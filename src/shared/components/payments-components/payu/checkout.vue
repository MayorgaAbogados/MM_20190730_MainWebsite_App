<template>
<form method="post" :action="getEndPoint()" ref="payu" style="visibility: hidden;
    position: fixed;
    top: 0;
    z-index: -10000;">
        <input name="merchantId"    type="hidden"  :value="getMerchantID()"   >
        <input name="accountId"     type="hidden"  :value="getAccountId()" >
        <input name="description"   type="hidden"  :value="getDescription()"  >
        <input name="referenceCode" type="hidden"  :value="getReferenceCode()" >
        <input name="amount"        type="hidden"  :value="getAmount()"   >
        <input name="tax"           type="hidden"  :value="getTax()"  >
        <input name="taxReturnBase" type="hidden"  :value="getTaxReturnBase()" >
        <input name="currency"      type="hidden"  :value="getCurrency()" >
        <input name="signature"     type="hidden"  :value="getSignature()" >
        <input name="test"          type="hidden"  :value="getIsTest()" >
        <input name="buyerEmail"    type="hidden"  :value="getBuyerEmail()" >
        <input name="responseUrl"    type="hidden"  :value="getResponseURL()" >
        <input name="confirmationUrl" type="hidden"  :value="getConfirmationURL() " >
        <input name="Submit"        type="submit"  value="Enviar" >
</form>


</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
var md5 = require("md5");


@Component({})
export default class WebCheckoutApp extends Vue {

    @Prop({default: 'isTest'}) public isTest: boolean|undefined;
    @Prop({default: 'payment'}) public payment: any|undefined;

    private TEST: any = {
          apiKey: "4Vj8eK4rloUd272L48hsrarnUA",
          accountId: "512321",
          merchantId: "508029"
    }
    private PROD: any =  {
          apiKey: "9C2VpgCuspFev0ceLr12Z95xOY",
          accountId: "860384",
          merchantId: "852845"
    }


    private send() {
       
       console.log(' ...  SENDING to PayU ');
       setTimeout(() => {
           (this.$refs.payu as any).submit()
        }, 100);

        setTimeout(() => {
            this.$store.dispatch('LoaderModule/CLOSE');
        }, 5000)
      
    }

   private getPayUEndPoint(): string{
        // budgetPayUForm
        if(this.isTest){
            return 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/';
        }else{
            return 'https://checkout.payulatam.com/ppp-web-gateway-payu/';
        } 
    }

    private getApiKey(): string{ return (this.isTest) ? this.TEST.apiKey : this.PROD.apiKey; }
    private getMerchantID(): string{ return (this.isTest) ? this.TEST.merchantId : this.PROD.merchantId; }
    private getAccountId(): string{ return (this.isTest) ? this.TEST.accountId : this.PROD.accountId; }
    private getDescription(): string{ return  this.payment.description; }
    private getReferenceCode(): string{ return this.payment.referenceCode;}
    private getAmount(): string{ return this.payment.amount;}
    private getTax(): string{ return this.payment.amount*this.payment.tax + '';}
    private getTaxReturnBase(): string{ return (((this.payment.amount*(1 - this.payment.tax) + 0.0) as number).toFixed(2) + '');}
    private getCurrency(): string{ return this.payment.currency ? this.payment.currency: 'COP';}
    private getSignature(): string{ 
        const payu_md5 = md5(
            `${this.getApiKey()}~${this.getMerchantID()}~${this.getReferenceCode()}~${this.getAmount()}~${this.getCurrency()}`
        );
      return payu_md5;
    }
    private getIsTest(): string{ return this.isTest + ''}
    private getBuyerEmail(): string{ return this.payment.email;}
    private getResponseURL(): string{ return this.payment.responseUrl;} //UPDATE
    private getConfirmationURL(): string{ return this.payment.confirmationUrl;}
    private getEndPoint(): string { return this.getPayUEndPoint()}


}
</script>

<style>


@media only screen and (min-width: 1200px) {

}
</style>