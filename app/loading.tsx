export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
          <div className="w-8 h-8 bg-turquoise-600 rounded-full"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Yükleniyor...
        </h2>
        <p className="text-gray-600">
          Lütfen bekleyin, içerik yükleniyor.
        </p>
      </div>
    </div>
  )
}
