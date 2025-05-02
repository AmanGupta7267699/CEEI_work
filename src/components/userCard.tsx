import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { SlimUser } from "@/types/user"
import { Calendar, User } from 'lucide-react';
    type Props = {
    user: SlimUser;
  };
  
  export default function Usercard({ user }: Props) {

    return(
        <Card className="w-full h-full overflow-hidden bg-white border border-purple-100 shadow-sm group-hover:shadow-lg group-hover:shadow-purple-200/50 transition-all duration-300">
            <CardHeader className="p-4 bg-gradient-to-r from-purple-500 to-purple-400 text-white">
              <CardTitle className="text-lg font-bold">
                {user.firstname} {user.lastname}
              </CardTitle>
              <CardDescription className="text-purple-100">
                {user.email}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-purple-50 p-5 space-y-3">
                <div className="flex items-center">
                  <Calendar className="text-purple-600 w-5 h-5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">DOB:</span> {user.birthDate}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <User className="text-purple-600 w-5 h-5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Gender:</span>{" "}
                    {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="text-purple-600 w-5 h-5 mr-3 flex items-center justify-center font-bold flex-shrink-0">
                    <span className="text-xs">+{user.age}</span>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Age:</span> {user.age}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
    )
}