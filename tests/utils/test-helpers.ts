export class TestHelpers {
  static getFutureDate(daysFromNow: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date;
  }

  static formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  static generateRandomEmail(): string {
    const timestamp = Date.now();
    return `test${timestamp}@example.com`;
  }

  static generateRandomPhoneNumber(): string {
    return `0${Math.floor(Math.random() * 9000000000) + 1000000000}`;
  }

  static generateUniqueRoomName(): string {
    const timestamp = Date.now();
    return `Room${timestamp}`;
  }

  static wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static getRandomString(length: number): string {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static formatCurrency(amount: number): string {
    return `£${amount.toFixed(2)}`;
  }
}
