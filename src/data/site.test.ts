import { describe, expect, it } from "vitest";

import { bookingPolicy, profile, services } from "./site";

describe("site content", () => {
  it("associates CRN only with nutrition", () => {
    expect(services.nutricao.credential).toBe("CRN-3 60629");
    expect(services.psicoterapia.credential).toBeUndefined();
  });

  it("keeps the psychoanalysis credential pending", () => {
    const credential = profile.credentials.find((item) =>
      item.title.includes("Psicanálise"),
    );

    expect(credential?.status).toBe("pending");
  });

  it("stores the confirmed booking rules", () => {
    expect(bookingPolicy.prepaymentPercent).toBe(100);
    expect(bookingPolicy.cancellationNoticeHours).toBe(12);
  });
});
