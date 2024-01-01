export const BaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8051/api/v1'
  )
}
