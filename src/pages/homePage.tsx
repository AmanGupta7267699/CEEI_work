import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/api";
import { SlimUser } from "@/types/user";
import Loader from "@/components/loader";
import UsersList from "@/components/list";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setSearchTerm, setSortOrder } from "@/store/uiSlice";
import { Search } from "lucide-react"; // Import Search icon from lucide-react

function HomePage() {
  const {
    data: users,
    isLoading: queryLoading,
    isError,
    error,
  } = useQuery<SlimUser[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 0,
  });

  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.ui.searchTerm);
  const sortOrder = useSelector((state: RootState) => state.ui.sortOrder);

  const [showLoader, setShowLoader] = useState(true);

  const filteredUsers: SlimUser[] = (users ?? []).filter((user) =>
    `${user.firstname} ${user.lastname}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const nameA = `${a.firstname} ${a.lastname}`.toLowerCase();
    const nameB = `${b.firstname} ${b.lastname}`.toLowerCase();

    return sortOrder === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const shouldShowLoader = queryLoading || showLoader;
  if (shouldShowLoader) return <Loader />;
  if (isError) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          {/* Search input with icon */}
          <div className="relative w-full sm:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              className="pl-10 w-full h-10"
            />
          </div>
          
          {/* Sort dropdown */}
          <div>
            <Select
              value={sortOrder}
              onValueChange={(value: "asc" | "desc") =>
                dispatch(setSortOrder(value))
              }
            >
              <SelectTrigger className="w-40 h-10">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Name ↑ (A–Z)</SelectItem>
                <SelectItem value="desc">Name ↓ (Z–A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Display total count of filtered users */}
        <div className="mb-4 text-sm text-gray-500">
          Showing {sortedUsers.length} {sortedUsers.length === 1 ? 'user' : 'users'}
          {searchTerm && <span> for search "{searchTerm}"</span>}
        </div>
        
        <UsersList users={sortedUsers} />
      </div>
    </div>
  );
}

export default HomePage;