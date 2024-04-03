import { CardBlog } from "../../components/cards/CardBlog"
import pdt1 from '../../assets/products/blog-1.png'
import pdt2 from '../../assets/products/blog-2.png'
import pdt3 from '../../assets/products/blog-3.png'
import { ButtonDark } from "../../components/Elements"


export const Blog = () => {
  return (
    <section className='min-h-[657px]  px-8 sm:px-40 py-20'>

        <div className="flex flex-col gap-10">
        <div className='h-[44px] flex justify-between items-baseline'>
            <div className="text-h4">Articles</div>
            <ButtonDark text='More Articles' />
        </div>

        {/*cards  */}
        <div className='min-h-[413px] flex flex-col sm:flex-row items-center gap-6'>
            <CardBlog img={pdt1} title='7 ways to decor your home' link=''  />
            <CardBlog img={pdt2} title='Kitchen organization' link=''  />
            <CardBlog img={pdt3} title='Decor your bathroom' link=''  />
        </div>
        </div>
    </section>
  )
}
