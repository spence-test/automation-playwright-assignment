export const TestData = {
  adminCredentials: {
    username: "admin",
    password: "password",
  },

  invalidAdminCredentials: {
    username: "wronguser",
    password: "wrongpass",
  },

  validBooking: {
    firstName: "Automation",
    lastName: "Tester",
    email: "test@automation.com",
    phone: "01234567890",
  },

  invalidBooking: {
    firstName: "",
    lastName: "",
    email: "invalid-email",
    phone: "invalid-phone",
  },

  contactForm: {
    name: "Test User",
    email: "test@example.com",
    phone: "01234567890",
    subject: "Test Subject",
    message: "This is a test message",
  },

  rooms: {
    single: {
      name: "101",
      type: "Single",
      accessible: false,
      price: "100",
      features: ["WiFi", "TV"],
    },
    double: {
      name: "201",
      type: "Double",
      accessible: true,
      price: "150",
      features: ["WiFi", "TV", "Refreshments"],
    },
  },
};
