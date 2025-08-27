export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto"></div>
        <p className="text-neutral-600 font-medium">Loading amazing experiences...</p>
      </div>
    </div>
  )
}