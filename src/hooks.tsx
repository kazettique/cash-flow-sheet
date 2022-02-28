import { useFormikContext } from 'formik';
import _ from 'lodash';
import { Sheet } from './types';

type SheetTotal = {
  totalRealEstateCashFlow: number;
  totalBusinessCashFlow: number;
  passiveIncome: number;
  childExpenses: number;
  totalExpense: number;
  totalIncome: number;
  monthlyCashFlow: number;
  beginningCashFlowDayIncome: number;
  cashFlowDayIncomeGoal: number;
  totalMonthlyCashFlowIncome: number;
};

export function useSheetComputed(): SheetTotal {
  const { values } = useFormikContext<Sheet>();
  const { incomeStatement, children, incomeRecord } = values;
  const { numberOfChildren, perChildExpense } = children;
  const {
    salary,
    interest,
    dividends,
    realEstate,
    business,
    taxes,
    homeMortgagePayment,
    schoolLoanPayment,
    carLoanPayment,
    creditCardPayment,
    otherExpenses,
    loanPayment,
  } = incomeStatement;

  const totalRealEstateCashFlow = _.sumBy(realEstate, (item) => Number(item[1]));
  const totalBusinessCashFlow = _.sumBy(business, (item) => Number(item[1]));
  const passiveIncome =
    Number(interest) + Number(dividends) + Number(totalRealEstateCashFlow) + Number(totalBusinessCashFlow);
  const totalIncome = Number(salary) + Number(passiveIncome);

  const childExpenses = Number(numberOfChildren) * Number(perChildExpense);
  const totalExpense =
    Number(taxes) +
    Number(homeMortgagePayment) +
    Number(schoolLoanPayment) +
    Number(carLoanPayment) +
    Number(carLoanPayment) +
    Number(creditCardPayment) +
    Number(otherExpenses) +
    Number(childExpenses) +
    Number(loanPayment);

  const monthlyCashFlow = totalIncome - totalExpense;

  const beginningCashFlowDayIncome = passiveIncome * 100;
  const cashFlowDayIncomeGoal = beginningCashFlowDayIncome + 50000;
  const totalMonthlyCashFlowIncome = _.sumBy(incomeRecord, (item) => Number(item[1]));

  return {
    totalRealEstateCashFlow,
    totalBusinessCashFlow,
    passiveIncome,
    childExpenses,
    totalExpense,
    totalIncome,
    monthlyCashFlow,
    beginningCashFlowDayIncome,
    cashFlowDayIncomeGoal,
    totalMonthlyCashFlowIncome,
  };
}
