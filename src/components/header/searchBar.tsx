
import { Input } from "@/components/formItems/input"

export default function SearchBar() {
  return (
    <div className="flex items-center w-full space-x-2 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-900 px-3.5 py-2">
      <SearchIcon className="h-4 w-4" />
      <Input type="search" placeholder="Search" className="w-full border-0 h-8 font-semibold" />
    </div>
  )
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}