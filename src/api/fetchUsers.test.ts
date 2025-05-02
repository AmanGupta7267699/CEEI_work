import axios from "axios";
import { fetchUsers } from "./index";
import { SlimUser } from "@/types/user";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchUsers API", () => {
  it("should fetch and map users correctly", async () => {
    const mockResponse = {
      data: {
        users: [
          {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            birthDate: "1990-01-01",
            age: 34,
            gender: "male",
            username: "johndoe",
          },
        ],
      },
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const users: SlimUser[] = await fetchUsers();

    expect(users).toEqual([
      {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        email: "john@example.com",
        birthDate: "1990-01-01",
        age: 34,
        gender: "male",
        username: "johndoe",
      },
    ]);

    expect(mockedAxios.get).toHaveBeenCalledWith("https://dummyjson.com/users", {
      headers: { "Content-Type": "application/json" },
    });
  });
});
