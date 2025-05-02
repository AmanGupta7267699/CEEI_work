
export default function About() {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow max-w-3xl mx-auto mt-10 mb-10 p-6 bg-white rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">About This Project</h1>
          <p className="text-gray-700 leading-relaxed">
            This assignment was completed for the company <strong>CEEI</strong>. It is a basic frontend application designed for loading and displaying a list of users.
            The project utilizes modern React features along with key technical functionalities such as Redux for state management, user search and sort capabilities,
            caching with React Query, and unit testing to ensure reliability. All the requirements mentioned in the assignment guidelines have been implemented.
          </p>
        </main>

      </div>
    );
  }
  