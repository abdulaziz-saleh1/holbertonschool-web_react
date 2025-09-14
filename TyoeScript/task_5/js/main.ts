// 1) الواجهات (Branded / Nominal Types)
export interface MajorCredits {
  credits: number;
  readonly brand: 'MajorCredits'; // يفرّق النوع اسميًا
}

export interface MinorCredits {
  credits: number;
  readonly brand: 'MinorCredits'; // يفرّق النوع اسميًا
}

// 2) دوال الجمع حسب النوع
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits',
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits',
  };
}

/* ===== اختبار سريع (اختياري) =====
const m1: MajorCredits = { credits: 3, brand: 'MajorCredits' };
const m2: MajorCredits = { credits: 2, brand: 'MajorCredits' };
const totalMajor = sumMajorCredits(m1, m2);
console.log('Major total:', totalMajor.credits); // 5

const n1: MinorCredits = { credits: 1, brand: 'MinorCredits' };
const n2: MinorCredits = { credits: 2, brand: 'MinorCredits' };
const totalMinor = sumMinorCredits(n1, n2);
console.log('Minor total:', totalMinor.credits); // 3

// لو حاولت تجمع Major مع Minor بيمنعك TypeScript بسبب الـ brand المختلف.
*/
