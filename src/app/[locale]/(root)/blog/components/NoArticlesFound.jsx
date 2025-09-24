export default function NoArticlesFound() {
  return (
    <div className="text-center py-12">
      <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        No articles found
      </h3>
      <p className="text-gray-500">
        Try adjusting your search or filter to find what you're looking for.
      </p>
    </div>
  );
}
