import Link from 'next/link'

export default function Index() {
  return (
    <div className="flex justify-between">
      <div className=""></div>
      <ul className="flex w-1/5 justify-around h-12 items-center">
        <li>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Sign In</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
