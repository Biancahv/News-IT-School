const API_KEY = "6a4ae05e-a36b-4aa4-b4a3-93496daed460";

export function getNewsCategoryEndpoint(
  category,
  pageNumber = 1,
  pageSize = 20
) {
  const queryParams = `api-key=${API_KEY}&section=${category}&page-size=${pageSize} &page${pageNumber}&show-fields=all`;
  return `https://content.guardianapis.com/search?${queryParams}`;
}
