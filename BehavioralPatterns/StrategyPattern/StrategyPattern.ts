interface PaymentStrategy {
  payment(amount: number): void;
}

class MomoPayment implements PaymentStrategy {
  payment(amount: number): void {
    console.log(`Paying ${amount} using Momo`);
  }
}

class ZaloPayPayment implements PaymentStrategy {
  payment(amount: number): void {
    console.log(`Paying ${amount} using ZaloPay`);
  }
}

class PaypalPayment implements PaymentStrategy {
  payment(amount: number): void {
    console.log(`Paying ${amount} using Paypal`);
  }
}

class VnPayPayment implements PaymentStrategy {
  payment(amount: number): void {
    console.log(`Paying ${amount} using VnPay`);
  }
}

class CreditCardPayment implements PaymentStrategy {
  payment(amount: number): void {
    console.log(`Paying ${amount} using CreditCard`);
  }
}

class PaymentStore {
  constructor(private paymentStrategy?: PaymentStrategy) {}

  callMethodPayment(methodPayment: PaymentStrategy): PaymentStore {
    this.paymentStrategy = methodPayment;
    return this;
  }

  executePayment(amount: number): void {
    if (this.paymentStrategy) {
      this.paymentStrategy.payment(amount);
    } else {
      console.log('Please provide method for payment');
    }
  }
}

const MomoInstance: PaymentStrategy = new MomoPayment();
const ZaloPayInstance: PaymentStrategy = new ZaloPayPayment();
const PaypalInstance: PaymentStrategy = new PaypalPayment();
const VnPayInstance: PaymentStrategy = new VnPayPayment();
const CreditCardInstance: PaymentStrategy = new CreditCardPayment();

const paymentStoreInstace = new PaymentStore();
paymentStoreInstace.callMethodPayment(PaypalInstance).executePayment(7000);
paymentStoreInstace.callMethodPayment(ZaloPayInstance).executePayment(8000);
