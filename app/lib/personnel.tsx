export type AccessLevel = "admin" | "personnel";

export type Personnel = {
  id: string;
  name: string;
  chineseName: string;
  role: string;
  roleZh: string;
  email: string;
  phones: {
    label: string;
    number: string;
  }[];
  accessLevel: AccessLevel;
  status: "active" | "inactive";
};

export const personnel: Personnel[] = [
  {
    id: "taysun",
    name: "Taysun Wang",
    chineseName: "王台松",
    role: "Founder",
    roleZh: "创始人",
    email: "taysunwang@wangaicorp.com",
    phones: [
      { label: "WhatsApp", number: "+90 532 686 9264" },
      { label: "WeChat", number: "+86 134 7262 7342" }
    ],
    accessLevel: "admin",
    status: "active"
  },
  {
    id: "isa",
    name: "Isa Wang",
    chineseName: "王尔绍",
    role: "Consultant",
    roleZh: "顾问",
    email: "isawang@wangaicorp.com",
    phones: [
      { label: "Mobile / WhatsApp / WeChat", number: "+90 532 212 1616" }
    ],
    accessLevel: "personnel",
    status: "active"
  },
  {
    id: "alice",
    name: "Alice Zhang",
    chineseName: "张岩",
    role: "Business Manager",
    roleZh: "商务经理",
    email: "alicezhang@wangaicorp.com",
    phones: [
      { label: "Mobile / WeChat", number: "+86 135 2009 5911" },
      { label: "WhatsApp", number: "+86 135 8191 4349" }
    ],
    accessLevel: "personnel",
    status: "active"
  }
];

export function findPersonnelByEmail(email: string) {
  return personnel.find(
    (person) =>
      person.email.toLowerCase() === email.toLowerCase() &&
      person.status === "active"
  );
}