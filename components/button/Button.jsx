import Link from 'next/link';
import { CiShoppingCart } from 'react-icons/ci';
const Button = () => {
  return (
<Link href='/pages/product' className='flex items-center gap-2 bg-zinc-900 text-white px-[25px] py-[10px] rounded-[8px] w-max capitalize hover:bg-zinc-800'><CiShoppingCart className='text-[20px]'/> shop now</Link>
  )
}

export default Button