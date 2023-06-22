import Link from 'next/link';
export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link href="./about">About Us</Link>
      </div>
      <div>
        <Link href="./contactus">Contact Us</Link>
      </div>
    </div>
  );
}
