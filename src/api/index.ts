import axios from "axios";
import { SlimUser } from "@/types/user";

export async function fetchUsers(): Promise<SlimUser[]> {
  try {
    const response = await axios.get("https://dummyjson.com/users", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response)
    console.log('called api');
    const filteredUsers: SlimUser[] = response.data.users.map((user: any) => ({
      id: user.id,
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.email,
      birthDate: user.birthDate,
      age: user.age,
      gender: user.gender,
      username: user.username
    }));

    return filteredUsers;

  } catch (error) {
    throw new Error("Failed to fetch users");
  }
}
