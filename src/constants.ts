import { Sheet } from '@/types';

export const INITIAL_PLAYER_SHEET: Sheet = {
  isRatRace: true,
  createDate: new Date(),
  profession: '',
  // player: {
  //   name: '',
  //   createDate: new Date(),
  //   isRatRace: true,
  // },
  incomeStatement: {
    salary: 0,
    interest: 0,
    dividends: 0,
    realEstate: [],
    business: [],
    taxes: 0,
    homeMortgagePayment: 0,
    schoolLoanPayment: 0,
    carLoanPayment: 0,
    creditCardPayment: 0,
    otherExpenses: 0,
    loanPayment: 0,
  },
  balanceSheet: {
    assets: {
      stocks: [],
      funds: [],
      cds: [],
      realEstate: [],
      business: [],
    },
    liabilities: {
      homeMortgage: 0,
      schoolLoans: 0,
      carLoans: 0,
      creditCards: 0,
      loan: 0,
      realEstate: [],
      business: [],
    },
  },
  children: {
    numberOfChildren: 0,
    perChildExpense: 0,
  },
  incomeRecord: [],
};
