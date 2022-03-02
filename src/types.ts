// * INCOME STATEMENT
// income statement basic
// type IncomeItem = [string, number];

// income statement
type IncomeStatement = {
  salary: number;
  interest: number;
  dividends: number;
  realEstate: RealEstateItem[];
  business: RealEstateItem[];
  taxes: number;
  homeMortgagePayment: number;
  schoolLoanPayment: number;
  carLoanPayment: number;
  creditCardPayment: number;
  otherExpenses: number;
  loanPayment: number;
};

type TwoColumRowItem = [string, number];
type ThreeColumnRowItem = [string, number, number];

// * BALANCE SHEET
// assets basic
type StockItem = TwoColumRowItem;
type FundsItem = TwoColumRowItem;
type CDsItem = TwoColumRowItem;
type RealEstateItem = TwoColumRowItem | ThreeColumnRowItem;
type BusinessItem = TwoColumRowItem | ThreeColumnRowItem;

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
    realEstate: RealEstateItem[];
    business: BusinessItem[];
  };
};

// * CHILDREN
type Children = {
  numberOfChildren: number;
  perChildExpense: number;
};

// * FAST TRACK BASIC
type IncomeRecordItem = TwoColumRowItem;

// EXPORT
export type Sheet = {
  profession: string;
  incomeStatement: IncomeStatement;
  balanceSheet: BalanceSheet;
  children: Children;
  incomeRecord: IncomeRecordItem[];
  isRatRace: boolean;
  createDate: Date;
};

// LOCAL STORAGE
export type LocalStorageType = {
  [player: string]: Sheet;
};
