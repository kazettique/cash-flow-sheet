import { useFormikContext } from 'formik';
import _ from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { LocalStorageType, Sheet } from './types';

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

type Method = {
  getData: () => LocalStorageType | string;
  saveData: (player: string, payload: Sheet) => void;
};

const localStorageKeyName = 'cashFlow';
export function useLocalStorageData() {
  const getData = () => {
    const data = localStorage.getItem(localStorageKeyName);

    if (_.isString(data)) {
      return JSON.parse(data);
    } else {
      const emptyData = {};
      localStorage.setItem(localStorageKeyName, JSON.stringify(emptyData));
      const data2 = localStorage.getItem(localStorageKeyName);
      if (_.isString(data2)) {
        return JSON.parse(data2);
      }
    }
  };

  const saveData = (player: string, payload: Sheet) => {
    const data = getData();

    const newData = {
      ...data,
      [player]: payload,
    };

    localStorage.setItem(localStorageKeyName, JSON.stringify(newData));
    alert('Data Saved!');
  };

  const deletePlayer = (player: string): void => {
    const data = localStorage.getItem(localStorageKeyName);
    let originalData: LocalStorageType = {};
    if (_.isString(data)) {
      originalData = JSON.parse(data);
    }

    const playerExist = _.has(originalData, player);
    if (playerExist) {
      delete originalData[player];
      localStorage.setItem(localStorageKeyName, JSON.stringify(originalData));
      console.log('Delete player successfully!');
    } else {
      console.error('No player to delete!');
    }
  };

  const renamePlayer = (player: string): boolean => {
    return false;
  };

  return {
    getData,
    saveData,
    deletePlayer,
    renamePlayer,
  };
}

function useIsPortrait(): boolean {
  const [isPortrait, setIsPortrait] = useState<boolean>(false);

  const updateOrientation = useCallback((event: MediaQueryListEvent) => {
    if (event.matches) {
      // Portrait mode
      setIsPortrait(true);
    } else {
      // Landscape
      setIsPortrait(false);
    }
  }, []);

  useEffect(() => {
    const portrait = window.matchMedia('(orientation: portrait)');

    if (portrait.matches) {
      setIsPortrait(true);
    }

    portrait.addEventListener('change', updateOrientation);
    return () => portrait.removeEventListener('change', updateOrientation);
  }, [updateOrientation]);

  useEffect(() => {
    console.log('isPortrait: ', isPortrait);
  }, [isPortrait]);

  return isPortrait;
}

export function useDebounce(debounceFunc: () => void, debounceTimeInMs = 300) {
  const timerRef = useRef<NodeJS.Timeout>();

  const debounceCallBack = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(debounceFunc, debounceTimeInMs);
  };

  return debounceCallBack;
}

export function useMobileViewPortHeight() {
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  const updateHeight = () => {
    const currentWindowHeight = window.innerHeight;
    setContainerHeight(currentWindowHeight);
  };

  const debouncedUpdateHeight = useDebounce(updateHeight, 500);

  useEffect(() => {
    const portrait = window.matchMedia('(orientation:portrait)');
    updateHeight();
    portrait.addEventListener('change', updateHeight);
  }, []);

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', debouncedUpdateHeight);

    return () => window.removeEventListener('resize', debouncedUpdateHeight);
  }, [debouncedUpdateHeight]);

  const style = containerHeight ? { height: containerHeight } : {};

  return { style, containerHeight };
}
