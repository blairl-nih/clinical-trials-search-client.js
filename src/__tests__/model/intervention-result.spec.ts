import { InterventionResult } from "../../model/intervention-result";

describe("Services.ClinicalTrials.Model.InterventionResult", () => {
  describe("fromJSON", () => {
    it("Should deserialize a string", () => {
      let s: string = `
                {
                    "name": "Trastuzumab",
                    "category": "agent",
                    "codes": ["C12345"],
                    "type": "Biologic / Vaccine",
                    "synonyms": ["Herceptin"]
                }
            `;

      let expected: InterventionResult = new InterventionResult();
      expected.name = "Trastuzumab";
      expected.category = "agent";
      expected.codes = ["C12345"];
      expected.type = "Biologic / Vaccine";
      expected.synonyms = ["Herceptin"];

      let actual: InterventionResult = InterventionResult.fromJSON(s);

      //Deep Equal because they are class instances
      expect(actual).toEqual(expected);
    });

    it("Should deserialize an object", () => {
      let obj: any = {
        name: "Trastuzumab",
        category: "agent",
        codes: ["C12345"],
        type: "Biologic / Vaccine",
        synonyms: ["Herceptin"]
      };

      let expected: InterventionResult = new InterventionResult();
      expected.name = "Trastuzumab";
      expected.category = "agent";
      expected.codes = ["C12345"];
      expected.type = "Biologic / Vaccine";
      expected.synonyms = ["Herceptin"];

      let actual: InterventionResult = InterventionResult.fromJSON(obj);

      //Deep Equal because they are class instances
      expect(actual).toEqual(expected);
    });
  });
});
