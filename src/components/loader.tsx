export default function Loader() {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-white to-gray-100">
        <div className="flex flex-col items-center space-y-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          
          {/* Loading text */}
          <h1 className="text-lg font-semibold text-gray-700">
            Loading, please wait...
          </h1>
        </div>
      </div>
    );
  }