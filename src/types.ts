// * INCOME STATEMENT
// income statement basic
type IncomeItem = {
  description: string;
  cashFlow: number;
};

// income statement
type IncomeStatement = {
  salary: number;
  interest: number;
  dividends: number;
  income: IncomeItem[];
  taxes: number;
  homeMortgagePayment: number;
  schoolLoanPayment: number;
  carLoanPayment: number;
  creditCardPayment: number;
  otherExpenses: number;
  childExpenses: number;
  loanPayment: number;
};

// * BALANCE SHEET
// assets basic
type StockItem = {
  name: string;
  numberOfShares: number;
  costPerShare: number;
};

type FundsItem = StockItem;
type CDsItem = StockItem;

type RealEstateItem = {
  name: string;
  downPay: number;
  cost: number;
};

type BusinessItem = RealEstateItem;

// balance sheet basic
type RealEstateLiabilityItem = {
  name: string;
  mortgageLiability: number;
};

type BusinessLiabilityItem = RealEstateLiabilityItem;

// balance sheet
type BalanceSheet = {
  assets: {
    stocks: StockItem[];
    funds: FundsItem[];
    cds: CDsItem[];
    realEstate: RealEstateItem[];
    business: BusinessItem[];
  };
  liabilities: {
    homeMortgage: number;
    schoolLoans: number;
    carLoans: number;
    creditCards: number;
    loan: number;
    realEstate: RealEstateLiabilityItem[];
    business: BusinessLiabilityItem[];
  };
};

// * CHILDREN
type Children = {
  numberOfChildren: number;
  perChildExpense: number;
};

// EXPORT
export type Sheet = {
  profession: string;
  incomeStatement: IncomeStatement;
  balanceSheet: BalanceSheet;
  children: Children;
  isRatRace: boolean;
  createDate: Date;
};

// LOCAL STORAGE
export type LocalStorageType = {
  name: string;
  sheet: Sheet;
}[];
