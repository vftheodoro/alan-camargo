import { describe, expect, it } from "vitest";

import { profile } from "@/data/site";

import { formatAddress, formatPhone } from "./format";

describe("format helpers", () => {
  it("formats the professional phone", () => {
    expect(formatPhone("5511981886531")).toBe("(11) 98188-6531");
  });

  it("includes the confirmed address details", () => {
    const formatted = formatAddress(profile.address);

    expect(formatted).toContain("Alameda Joaquim Eugênio de Lima, 680");
    expect(formatted).toContain("Sala 174");
    expect(formatted).toContain("01403-000");
  });
});
