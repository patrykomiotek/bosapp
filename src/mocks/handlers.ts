import { http, HttpResponse } from "msw";

const API_URL = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      id: "abc-123",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.get(`${API_URL}/products/:id`, () => {
    return HttpResponse.json({
      id: "test-1234",
      fields: {
        name: "Mocked Product",
        description: "Testowy produkt",
        price: 532,
      },
    });
  }),
];
