// type Tooltip = {
//   name: string;
//   details: string;
// };

// type Skill = {
//   name: string;
//   details: string;
//   tooltip: Tooltip[];
// };

class Character {

  // name: string;
  // tier: number;
  // type: string;
  // Skills: Skill[]; (For all 3 skills)
  // insight: Skill[]; (For all 3 Insights)
  // potrays: String[]; (For all 5 potrays)

  constructor(name, tier, type, skills, insight, potrays) {
    this.name = name;
    this.tier = tier;
    this.type = type;
    this.skills = skills;
    this.insight = insight;
    this.potrays = potrays;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Tier: ${this.tier}`);
    console.log(`Type: ${this.type}`);
    console.log("\nSkills:", this.skills);
    console.log("\nInsights:", this.insight);
    console.log("\nPotrays::", this.potrays);
  }
}
