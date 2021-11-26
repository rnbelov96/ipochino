/* eslint-disable no-param-reassign */
export {};

const leftColor = '#f61911';
const rightColor = '#ededed';

const rangeElList = document.querySelectorAll('.js-range');

const devicesRange = document.querySelector(
  '.js-devices-range',
) as HTMLInputElement;
const accsRange = document.querySelector('.js-accs-range') as HTMLInputElement;
const pointsRange = document.querySelector(
  '.js-points-range',
) as HTMLInputElement;
const cleanRange = document.querySelector(
  '.js-clean-range',
) as HTMLInputElement;

const resultLabelElList = document.querySelectorAll('.js-calc-result');

let result: number;

let devicesCurrentStep = 2;
let accsCurrentStep = 2;
let pointsCurrentStep = 2;
let cleanCurrentStep = 2;

const calcResult = () => {
  result = (Number(devicesRange.value) * 4500
      + Number(accsRange.value) * 1050
      + Number(cleanRange.value) * 400)
    * Number(pointsRange.value);
  resultLabelElList.forEach(resultLabelEl => {
    resultLabelEl.textContent = result.toLocaleString();
  });
  return result;
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

devicesRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  devicesCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (devicesCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (devicesCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

accsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  accsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (accsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (accsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

pointsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  pointsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (pointsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (pointsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

cleanRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  cleanCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (cleanCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (cleanCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
