export const generateParams = (query: any) => {
  let params = "";
  for (const [key, value] of Object.entries(query)) {
    if (
      (typeof value === "string" || typeof value === "number") &&
      value !== undefined && value !== null && value.toString().length > 0
    ) {
      params =
        params +
        (params?.length === 0 ? `?${key}=${value.toString()}` : `&${key}=${value.toString()}`);
    }

    if (!(typeof value === "string" || typeof value === "number") && value !== null && value !== undefined) {
      params =
        params +
        (params?.length === 0 ? `?${key}=${value.toString()}` : `&${key}=${value.toString()}`);
    }
  }

  return params;
};

export const TASK_STATUS_OPTIONS = [
  {label: 'All', value: ''},
  {label: 'Completed', value: true},
  {label: 'Incomplete', value: false}
]
