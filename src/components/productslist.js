import '../components/productslist.css'

import cv1 from '../assets/img/cv_1.png'
import cv2 from '../assets/img/cv_2.png'
import cv3 from '../assets/img/cv_3.png'
import cv4 from '../assets/img/cv_4.png'
import cv5 from '../assets/img/cv_5.png'
import cv6 from '../assets/img/cv_6.png'
import cv7 from '../assets/img/cv_7.png'
import cv8 from '../assets/img/cv_8.png'
import cv9 from '../assets/img/cv_9.png'

function productsList() {
  return (
    <div className="listProductstyle">
      <h2>Liste des produits</h2>
      <section className="productStyleList">
        <ul>
          <li>
            Thème CV 1 <img src={cv1} className="cv_icon" alt="logo" />
            <button>Ajouter au panier</button>
          </li>
          <li>
            Thème CV 2 <img src={cv2} className="cv_icon" alt="logo" />
            <button>Ajouter au panier</button>
          </li>
          <li>
            Thème CV 3 <img src={cv3} className="cv_icon" alt="logo" />
            <button>Ajouter au panier</button>
          </li>
          <li>
            Thème CV 4 <img src={cv4} className="cv_icon" alt="logo" />
            <button>Ajouter au panier</button>
          </li>
          <li>
            Thème CV 5 <img src={cv5} className="cv_icon" alt="logo" />
            <button>Ajouter au panier</button>
          </li>
          <li>
            Thème CV 6 <img src={cv6} className="cv_icon" alt="logo" />
            <button>Ajouter au panier</button>
          </li>
          <li>
            Thème CV 7 <img src={cv7} className="cv_icon" alt="logo" />
            <button>Ajouter au panier</button>
          </li>
          <li>
            Thème CV 8 <img src={cv8} className="cv_icon" alt="logo" />
            <button>Ajouter au panier</button>
          </li>
          <li>
            Thème CV 9 <img src={cv9} className="cv_icon" alt="logo" />
            <button>Ajouter au panier</button>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default productsList
