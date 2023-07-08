const twoWeeks = 14;

class LocalStorageWithExpiry {
  get(key: string) {
    const item = window.localStorage.getItem(key);
    if (item) {
      const parsed: { value: unknown; time: number } = JSON.parse(item);
      const isExprired = parsed.time <= Date.now();
      if (isExprired) {
        return null;
      }
      return parsed.value;
    }
    return null;
  }

  set<TValue>(key: string, value: TValue, time: number = twoWeeks) {
    window.localStorage.setItem(
      key,
      JSON.stringify({ value, expiry: Date.now() + time * 60 * 60 * 1000 * 24 })
    );
  }

  remove(key: string) {
    window.localStorage.removeItem(key);
  }
}

const localStorageWithExpiry = new LocalStorageWithExpiry();

export { localStorageWithExpiry };
