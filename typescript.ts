// Console
console.log("Hello world");

// Static types
let fullName: string = "Sandesh";
let a: number = 123;
let b: boolean = true;
let c: null = null;
let d: undefined;

// Tuple
let e: [number, number, number, number, string] = [1, 2, 3, 4, "a"];

// Array
let f: Array<number | string | boolean> = [
  1,
  2,
  3,
  4,
  "a",
  true
];

// Enum
enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other"
}

// Interface
interface IUserInfo {
  name: string;
  email: string;
  address?: string;
  gender?: Gender;
}

// Type Alias
type UserInfoType = {
  name: string;
  email: string;
};

let userInfo: IUserInfo = {
  name: "Sandesh Bhattarai",
  email: "sandesh@broadwayinfosys.com"
};

userInfo.address = "Kathmandu";
userInfo.gender = Gender.MALE;

fullName ="123";

// Function
function getUser(userObj: IUserInfo): UserInfoType {
  return {} as UserInfoType
}

getUser(userInfo);


interface ICredentials {
  username: string;
  password: string;
}

// FE (Frontend)
const loginFunction = async (data: ICredentials): Promise<string> => {
  try {
    // DB username/password check
    // const response = await apiCaller();
    // token

    // URL: https://api.ecommerce.com/api/v1/auth/login
    // Method: POST
    // Payload: {username: "", password: ""}
    // Headers: "Content-Type": "application/json"
    return "";
  } catch (exception) {
    // exception 
    throw "";
  }
};