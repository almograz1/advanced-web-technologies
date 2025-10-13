import { getGuestPlayCount, incrementGuestPlayCount, hasExceededGuestLimit, resetGuestPlayCount } from '../guestLimit';

// JSDOM provides a localStorage implementation; ensure we reset between tests
beforeEach(() => {
  localStorage.clear();
});

describe('guestLimit utilities', () => {
  it('getGuestPlayCount returns 0 when not set', () => {
    expect(getGuestPlayCount()).toBe(0);
  });

  it('incrementGuestPlayCount increases count', () => {
    incrementGuestPlayCount();
    expect(getGuestPlayCount()).toBe(1);
    incrementGuestPlayCount();
    expect(getGuestPlayCount()).toBe(2);
  });

  it('hasExceededGuestLimit respects default limit of 3', () => {
    expect(hasExceededGuestLimit()).toBe(false); // 0
    incrementGuestPlayCount(); // 1
    incrementGuestPlayCount(); // 2
    expect(hasExceededGuestLimit()).toBe(false);
    incrementGuestPlayCount(); // 3
    expect(hasExceededGuestLimit()).toBe(true);
  });

  it('hasExceededGuestLimit works with custom limit', () => {
    incrementGuestPlayCount(); // 1
    expect(hasExceededGuestLimit(1)).toBe(true);
    expect(hasExceededGuestLimit(2)).toBe(false);
  });

  it('resetGuestPlayCount sets count to 0', () => {
    incrementGuestPlayCount();
    expect(getGuestPlayCount()).toBe(1);
    resetGuestPlayCount();
    expect(getGuestPlayCount()).toBe(0);
  });
});
