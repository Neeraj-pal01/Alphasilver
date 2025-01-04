 export   const bannerImg = ["../assests/bannerImg/banner1.png", "../assests/bannerImg/banner2.png", "../assests/bannerImg/banner3.png"]
 
export const categoryImg = [
    { img: "../assests/categoryImg/category1.png", name: "Clothing", link: 'products/category/clothing' },
    { img: "../assests/categoryImg/category2.png", name: "Electronics", link: 'products/category/electronics' },
    { img: "../assests/categoryImg/category3.png", name: "Home & Kitchen", link: 'products/category/home-kitchen' },
    { img: "../assests/categoryImg/category4.png", name: "Beauty & Personal Care", link: 'products/category/beauty-personal-care' },
    { img: "../assests/categoryImg/category5.png", name: "Toys & Games", link: 'products/category/toys-games' },
    { img: "../assests/categoryImg/category6.png", name: "Grocery & Gourmet Food", link: 'products/category/grocery-gourmet-food' },
    { img: "../assests/categoryImg/category7.png", name: "Books", link: 'products/category/books' },
    { img: "../assests/categoryImg/category8.png", name: "Fitness", link: 'products/category/fitness' },
    { img: "../assests/categoryImg/category9.png", name: "Health & Personal Care", link: 'products/category/health-personal-care' },
    { img: "../assests/categoryImg/category10.png", name: " Women Jewellery", link: 'products/category/women-jewellery' },
    { img: "../assests/categoryImg/category11.png", name: "Mobiles", link: 'products/category/mobiles' },
    { img: "../assests/categoryImg/category12.png", name: "Stationery", link: 'products/category/stationery' }
  ]
  
  export const productImg = [
    { discount: '0% OFF', img: "../assests/newProduct/product1.png", name: "Poha", price: '₹262.49', link1: "products/details/poha" },
    { discount: '0% OFF', img: "../assests/newProduct/product2.png", name: "Rava", price: '₹262.49', link1: "products/details/rava" },
    { discount: '0% OFF', img: "../assests/newProduct/product3.png", name: "Turmaric Powder", price: '₹52.49', link1: "products/details/turmaric-powder" },
    { discount: '0% OFF', img: "../assests/newProduct/product4.png", name: "Tide plus", price: '₹157.49', link1: "products/details/tide-plus" },
    { discount: '0% OFF', img: "../assests/newProduct/product5.png", name: "Tea", price: '₹312.90', link1: "products/details/tea" },
    { discount: '0% OFF', img: "../assests/newProduct/product6.png", name: "Salt", price: '₹52.49', link1: "products/details/salt" },
    { discount: '16% OFF', img: "../assests/newProduct/product7.png", name: "Aata", price: '₹525.00', link1: "products/details/aata" },
    { discount: '6% OFF', img: "../assests/newProduct/product8.png", name: "Toor Daal", price: '₹157.50', link1: "products/details/toor-daal" },
    { discount: '0% OFF', img: "../assests/newProduct/product9.png", name: "Rice", price: '₹208.95', link1: 'products/details/rice' },
    { discount: '9% OFF', img: "../assests/newProduct/product10.png", name: "Oil", price: '₹105.00', link1: 'products/details/oil' },
  ]
  export const productImg1 = [
    { discount: '0% OFF', img: "../assests/newProduct2/product1.png", name: "Organza Saree", price: '₹262.49', link1: "products/details/poha" },
    { discount: '5% OFF', img: "../assests/newProduct2/product2.png", name: "Green Frock", price: '₹262.49', link1: "products/details/rava" },
    { discount: '5% OFF', img: "../assests/newProduct2/product3.png", name: "Purple Frock", price: '₹52.49', link1: "products/details/turmaric-powder" },
    { discount: '5% OFF', img: "../assests/newProduct2/product4.png", name: "Pink Frock", price: '₹157.49', link1: "products/details/tide-plus" },
    { discount: '2% OFF', img: "../assests/newProduct2/product5.png", name: "Yashika Saree", price: '₹312.90', link1: "products/details/tea" }
  
  ]
  export var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 1,
    arrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (

      <button onClick={onClick} className='bg-[#14949d] p-1 rounded-full absolute right-0 z-10 top-1/2 transform -translate-y-1/2'>
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className='bg-[#14949d] p-1 rounded-full absolute left-0 z-10 top-1/2 transform -translate-y-1/2'>
        <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
    );
  }
  
  export var settings1 = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };