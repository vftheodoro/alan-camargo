import { describe, expect, it } from "vitest";

import { buildWhatsAppUrl, normalizePhone } from "./whatsapp";

describe("normalizePhone", () => {
  it("keeps only digits", () => {
    expect(normalizePhone("+55 (11) 98188-6531")).toBe("5511981886531");
  });
});

describe("buildWhatsAppUrl", () => {
  it("creates a service-specific encoded link", () => {
    const url = buildWhatsAppUrl("psicoterapia", "/psicoterapia");

    expect(url).toContain("https://wa.me/5511981886531?text=");
    expect(decodeURIComponent(url)).toContain("sessão de psicoterapia");
    expect(decodeURIComponent(url)).toContain("Origem: /psicoterapia");
  });
});
