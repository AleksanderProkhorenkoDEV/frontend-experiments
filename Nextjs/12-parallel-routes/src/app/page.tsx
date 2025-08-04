export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="mt-1 text-gray-500">
                Parallel & Intercepted Routes Demo
              </p>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              Active
            </span>
          </div>
        </div>
      </header>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border-t-4 border-indigo-500">
          <h3 className="font-medium text-gray-500">Total Posts</h3>
          <p className="text-3xl font-bold mt-2">10</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-t-4 border-green-500">
          <h3 className="font-medium text-gray-500">Active Members</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-t-4 border-yellow-500">
          <h3 className="font-medium text-gray-500">Projects</h3>
          <p className="text-3xl font-bold mt-2">2</p>
        </div>
      </div>
    </div>
  );
}
