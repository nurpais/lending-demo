function formatMoney(n, c, d, t) {
  var c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d == undefined ? '.' : d,
    t = t == undefined ? ',' : t,
    s = n < 0 ? '-' : '',
    i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
    j = (j = i.length) > 3 ? j % 3 : 0;

  return (
    s +
    (j ? i.substr(0, j) + t : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : '')
  );
}

document.addEventListener('alpine:init', () => {
  Alpine.data('CalcApp', () => ({
    amount: 25000,
    interest: 3,
    months: 3,
    emiCalc: 0,
    tInt: 0,
    tPay: 0,
    format(sum) {
      return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    init() {
      this.calc();
    },
    calc() {
      let nIntP = 0;
      let tInt = 0;

      let loanAmount = this.amount;
      let loanTenure = this.months;
      let interest = this.interest;
      //   loanAmount = document.getElementById('loan-amount').value;
      //   loanTenure = document.getElementById('loan-tenure').value;

      //   interest = document.querySelector('input[name="interest"]:checked').value;
      nIntP = interest / 100;
      loanAmount = parseFloat(loanAmount);
      tInt = parseFloat(tInt);

      emiCalc =
        (loanAmount * nIntP * parseFloat(Math.pow(1 + nIntP, loanTenure))) /
        parseFloat(Math.pow(1 + nIntP, loanTenure) - 1);
      emiCalc = emiCalc.toFixed(2);

      tInt = emiCalc * loanTenure - loanAmount;

      tPay = loanAmount + tInt;

      this.emiCalc = formatMoney(emiCalc);
      this.tInt = formatMoney(tInt);
      this.tPay = formatMoney(tPay);
    },
  }));
});
