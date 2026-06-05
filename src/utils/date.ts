export function getBookingQuarter(lang: 'en' | 'ar' = 'en') {
    const now = new Date();
    const month = now.getMonth(); // 0-11
    const year = now.getFullYear();

    let quarter: number;
    let targetYear = year;

    // Booking ahead:
    // Jan-Mar (0-2) -> Q2
    // Apr-Jun (3-5) -> Q3
    // Jul-Sep (6-8) -> Q4
    // Oct-Dec (9-11) -> Q1 of next year
    if (month >= 0 && month <= 2) {
        quarter = 2;
    } else if (month >= 3 && month <= 5) {
        quarter = 3;
    } else if (month >= 6 && month <= 8) {
        quarter = 4;
    } else {
        quarter = 1;
        targetYear = year + 1;
    }

    if (lang === 'ar') {
        const quartersAr = {
            1: 'الربع الأول',
            2: 'الربع الثاني',
            3: 'الربع الثالث',
            4: 'الربع الرابع'
        };
        return `${quartersAr[quarter as 1 | 2 | 3 | 4]} ${targetYear}`;
    }

    return `Q${quarter} ${targetYear}`;
}
