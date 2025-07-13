import { test, expect } from "@playwright/test";

const baseURL =
  process.env.PLAYWRIGHT_BASE_URL || "https://automationintesting.online";

test.describe("API Tests", () => {
  test("should fetch Location info", async ({ request }) => {
    const response = await request.get(`${baseURL}/#location`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  //Test to Verify Room Data using Network Tab - api/room
  test("should fetch room data", async ({ request }) => {
    const response = await request.get(`${baseURL}/api/room`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    if (responseBody) {
    } else {
    }

    //Verify structure
    expect(Array.isArray(responseBody.rooms)).toBe(true);
    if (responseBody.rooms.length > 0) {
      expect(responseBody.rooms[0]).toHaveProperty("roomid");
      expect(responseBody.rooms[0]).toHaveProperty("roomName");
      expect(responseBody.rooms[0]).toHaveProperty("type");
    }
  });

  //Test Contact Form via API (api/message)
  test("should successfully submit contact form via API", async ({
    request,
  }) => {
    const contactPayload = {
      name: "API Automation",
      email: "automation@api.com",
      phone: "31234567890",
      subject: "API Subject Test",
      description: "API Message Description from the user",
    };

    const response = await request.post(`${baseURL}/api/message`, {
      data: contactPayload,
    });

    // expect(response.ok()).toBeTruthy();
    // expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log(
      "Contact Form API Response:",
      JSON.stringify(responseBody, null, 2)
    );
    expect(responseBody).toEqual({ success: true });
  });

  //Additional Tests - Bad Request/Missing Fields...
});
