import Link from "next/link"

const Header = ({title, hreflink, linktitle}) => {
    return (
        <div className="p-4 flex justify-between">
          <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
          {
            hreflink && linktitle ?
            <Link href={hreflink} className="text-xl underline hover:text-color-accent text-color-primary transition all">{linktitle}</Link>
            :
            null
          }
       </div>
    )
}

export default Header