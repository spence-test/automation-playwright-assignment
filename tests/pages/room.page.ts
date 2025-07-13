import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class RoomsPage extends BasePage {
  readonly createButton: Locator;
  readonly roomNameInput: Locator;
  readonly roomTypeSelect: Locator;
  readonly accessibleSelect: Locator;
  readonly roomPriceInput: Locator;
  readonly wifiCheckbox: Locator;
  readonly refreshmentsCheckbox: Locator;
  readonly tvCheckbox: Locator;

  constructor(page: Page) {
    super(page);
    this.createButton = page.getByRole("button", { name: "Create" });
    this.roomNameInput = page.getByTestId("roomName");
    this.roomTypeSelect = page.locator("#type");
    this.accessibleSelect = page.locator("#accessible");
    this.roomPriceInput = page.locator("#roomPrice");
    this.wifiCheckbox = page.getByRole("checkbox", { name: "WiFi" });
    this.refreshmentsCheckbox = page.getByRole("checkbox", {
      name: "Refreshments",
    });
    this.tvCheckbox = page.getByRole("checkbox", { name: "TV" });
  }

  async navigate(): Promise<void> {
    await super.navigate("/admin/rooms");
  }

  async createRoom(roomData: {
    name: string;
    type: string;
    accessible: boolean;
    price: string;
    features: string[];
  }): Promise<void> {
    await this.fill(this.roomNameInput, roomData.name);
    await this.roomTypeSelect.selectOption(roomData.type);
    await this.accessibleSelect.selectOption(roomData.accessible.toString());
    await this.fill(this.roomPriceInput, roomData.price);

    // Handle features
    if (roomData.features.includes("WiFi")) {
      await this.wifiCheckbox.check();
    }
    if (roomData.features.includes("Refreshments")) {
      await this.refreshmentsCheckbox.check();
    }
    if (roomData.features.includes("TV")) {
      await this.tvCheckbox.check();
    }

    await this.click(this.createButton);
  }

  async isRoomVisible(roomName: string): Promise<boolean> {
    const roomLocator = this.page.getByText(`Room ${roomName}`);
    return await this.isVisible(roomLocator);
  }

  async getVisibleRoomNames() {
    return Promise.all(
      (await this.page.$$("[data-room-name]")).map((el) => el.textContent())
    );
  }
}
