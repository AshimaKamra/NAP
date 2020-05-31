import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Banner from './containers/UI/Banner/Banner';
import Footer from './components/Footer/Footer';
import Products from './containers/Products/Products'
import Sidebar from './containers/Sidebar/Sidebar';
import Brand from './containers/Brand/Brand'
class App extends Component
{
  state = {
    productList:[
        {
            id:1,
            name:"Prada  Feather-embellished silk-twill robe ",
            url:"https://www.net-a-porter.com/gb/en/product/1000954/prada/feather-embellished-silk-twill-robe",
            brand:"prada",
            imgurl:"http://cache.net-a-porter.com/images/products/1000954/1000954_in_pp.jpg",
            offerprice:1160,
            regularprice:1160,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:2,
            name:"Prada  Hooded rubber-appliquéd color-block gabardine jacket ",
            url:"https://www.net-a-porter.com/gb/en/product/1000960/prada/hooded-rubber-appliqued-color-block-gabardine-jacket",
            brand:"prada",
            imgurl:"http://cache.net-a-porter.com/images/products/1000960/1000960_ou_pp.jpg",
            offerprice:1210,
            regularprice:1210,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:3,
            name:"Prada  Printed silk crepe de chine flared pants ",
            url:"https://www.net-a-porter.com/gb/en/product/1000995/prada/printed-silk-crepe-de-chine-flared-pants",
            brand:"prada",
            imgurl:"http://cache.net-a-porter.com/images/products/1000995/1000995_in_pp.jpg",
            offerprice:855,
            regularprice:855,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:4,
            name:"A.P.C. Atelier de Production et de Création  High-rise straight-leg jeans ",
            url:"https://www.net-a-porter.com/gb/en/product/1006246/a_p_c__atelier_de_production_et_de_creation/high-rise-straight-leg-jeans",
            brand:"a.p.c",
            imgurl:"http://cache.net-a-porter.com/images/products/1006246/1006246_in_pp.jpg",
            offerprice:155,
            regularprice:155,
            createdate:"2019-10-21T00:00:00.000Z"
           
        },
        {
            id:5,
            name:"The Row  Coco leather mules",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"the row",
            imgurl:"http://cache.net-a-porter.com/images/products/1007684/1007684_in_pp.jpg",
            offerprice:125,
            regularprice:125,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:6,
            name:"Gucci  Ace watersnake-trimmed embroidered leather sneakers",
            url:"https://www.net-a-porter.com/gb/en/product/1009127/gucci/ace-watersnake-trimmed-embroidered-leather-sneakers",
            brand:"gucci",
            imgurl:"https://cache.net-a-porter.com/images/products/1009127/1009127_e1_pp.jpg",
            offerprice:165,
            regularprice:165,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:7,
            name:"The Row  Schoolboy stretch wool-blend crepe blazer",
            url:"https://www.net-a-porter.com/gb/en/product/1009776/the_row/schoolboy-stretch-wool-blend-crepe-blazer",
            brand:"the row",
            imgurl:"http://cache.net-a-porter.com/images/products/1009776/1009776_in_pp.jpg",
            offerprice:1605,
            regularprice:1605,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:8,
            name:"The Row  Schoolboy stretch wool-blend crepe blazer",
            url:"https://www.net-a-porter.com/gb/en/product/1009777/the_row/schoolboy-stretch-wool-blend-crepe-blazer",
            brand:"the row",
            imgurl:"http://cache.net-a-porter.com/images/products/1009777/1009777_in_pp.jpg",
            offerprice:1250,
            regularprice:1250,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:9,
            name:"The Row  Coco leather mules",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"the row",
            imgurl:"http://cache.net-a-porter.com/images/products/1007684/1007684_in_pp.jpg",
            offerprice:1255,
            regularprice:1255,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:10,
            name:"The Row  Ashland cropped mid-rise straight-leg jeans",
            url:"https://www.net-a-porter.com/gb/en/product/1009779/the_row/ashland-cropped-mid-rise-straight-leg-jeans",
            brand:"the row",
            imgurl:"http://cache.net-a-porter.com/images/products/1009779/1009779_in_pp.jpg",
            offerprice:1550,
            regularprice:1550,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:11,
            name:"SAINT LAURENT  Monogramme quilted leather pouch ",
            url:"https://www.net-a-porter.com/gb/en/product/1010127/saint_laurent/monogramme-quilted-leather-pouch",
            brand:"saint laurent",
            imgurl:"https://cache.net-a-porter.com/images/products/1010127/1010127_e1_pp.jpg",
            offerprice:1256,
            regularprice:1256,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:12,
            name:"Jimmy Choo  Denise studded leather espadrille sandals",
            url:"https://www.net-a-porter.com/gb/en/product/1017057/jimmy_choo/denise-studded-leather-espadrille-sandals",
            brand:"jimmy choo",
            imgurl:"http://cache.net-a-porter.com/images/products/1017057/1017057_fr_pp.jpg",
            offerprice:225,
            regularprice:225,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:13,
            name:"Christian Louboutin  Pigalle 100 leather pumps",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"christian louboutin",
            imgurl:"http://cache.net-a-porter.com/images/products/1027758/1027758_fr_pp.jpg",
            offerprice:1259,
            regularprice:1259,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:14,
            name:"Christian Louboutin  Jumping 85 patent-leather pumps",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"chirstian louboutin",
            imgurl:"http://cache.net-a-porter.com/images/products/1027768/1027768_in_pp.jpg",
            offerprice:355,
            regularprice:355,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:15,
            name:"Christian Louboutin  Blade Runana 100 leather sandals",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"christian louboutin",
            imgurl:"http://cache.net-a-porter.com/images/products/1027778/1027778_in_pp.jpg",
            offerprice:1256,
            regularprice:1256,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:16,
            name:"Ancient Greek Sandals  Apteros cutout metallic textured-leather slides ",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"ancient greek",
            imgurl:"http://cache.net-a-porter.com/images/products/1034223/1034223_in_pp.jpg",
            offerprice:550,
            regularprice:550,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:17,
            name:"Prada  Logo-embellished glossed textured-leather slides",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"prada",
            imgurl:"http://cache.net-a-porter.com/images/products/1044716/1044716_in_pp.jpg",
            offerprice:5500,
            regularprice:5500,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:18,
            name:"SAINT LAURENT  Shopper large textured-leather tote  ",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"saint laurent",
            imgurl:"https://cache.net-a-porter.com/images/products/1044848/1044848_cu_pp.jpg",
            offerprice:1965,
            regularprice:1965,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:19,
            name:"Gucci  GG Marmont small quilted leather wallet ",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"gucci",
            imgurl:"http://cache.net-a-porter.com/images/products/1044914/1044914_in_pp.jpg",
            offerprice:1650,
            regularprice:1650,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:20,
            name:"Gucci  Ace embroidered leather collapsible-heel sneakers",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"gucci",
            imgurl:"http://cache.net-a-porter.com/images/products/1045146/1045146_fr_pp.jpg",
            offerprice:1556,
            regularprice:1556,
            createdate:"2019-10-21T00:00:00.000Z"
        },
        {
            id:21,
            name:"Gucci  Horsebit-detailed leather slides",
            url:"https://www.net-a-porter.com/gb/en/product/1007684/the_row/coco-leather-mules",
            brand:"gucci",
            imgurl:"http://cache.net-a-porter.com/images/products/1045153/1045153_in_pp.jpg",
            offerprice:1889,
            regularprice:1889,
            createdate:"2019-10-21T00:00:00.000Z"
        }


        
    ]
}
   render()
   {
     return(
       
       <div className="App">
         <BrowserRouter>
         <Banner/>
         <div className="Product-heading">
            <p>All Products</p>
          </div>
          <br/>
         <div className="container">
           <div className="row">
              <div className="col-sm-3 sidebar boundry-top position-sticky">
                  <Sidebar/>
              </div>
            <div className="col-sm-9 products-panel">
                  <Switch>
                 <Route path="/" render={(props)=><Products {...props} productList={this.state.productList}/>}/>
                 <Route path="/brand" render={(props)=><Products {...props} productList={this.state.productList}/>}/>
                  </Switch>
            </div>
            </div>
           </div>
           <br/>
           <br/>
           <br/>
        <Footer/>
        </BrowserRouter>
       </div>
   )}
  }
export default App;
