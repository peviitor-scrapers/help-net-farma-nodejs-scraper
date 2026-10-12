import { parseJobDetail, cityFromSlug } from "../../scraper/index.js";

describe("Help Net (Phoenix SuccessFactors) parsing", () => {
  test("parseJobDetail reads the itemprop=title element", () => {
    const html = '<h1><span itemprop="title" class="rtltextaligneligible">Farmacist &#x218;ef  </span></h1>';
    expect(parseJobDetail(html).title).toMatch(/^Farmacist/);
  });

  test("parseJobDetail returns null title when absent", () => {
    expect(parseJobDetail("<html></html>").title).toBeNull();
  });

  test("cityFromSlug takes the first slug token", () => {
    expect(cityFromSlug("Timisoara-Pharmacist-TM")).toBe("Timisoara");
    expect(cityFromSlug("Pucioasa-Farmacist-Sef-DB")).toBe("Pucioasa");
    expect(cityFromSlug("")).toBeNull();
    expect(cityFromSlug("12-abc")).toBeNull();
  });
});
