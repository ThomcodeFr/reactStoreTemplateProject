import '../components/productslist.css'

import cv1 from '../assets/img/cv_1.png'
import cv2 from '../assets/img/cv_2.png'
import cv3 from '../assets/img/cv_3.png'
import cv4 from '../assets/img/cv_4.png'

function productsList() {
  return (
    <div className="listProductstyle">
      <h2>Liste des produits</h2>
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
          Thème CV 5 <button>Ajouter au panier</button>
        </li>
        <li>
          Thème CV 5 <button>Ajouter au panier</button>
        </li>
        <li>
          Thème CV 6 <button>Ajouter au panier</button>
        </li>
        <li>
          Thème CV 7 <button>Ajouter au panier</button>
        </li>
        <li>
          Thème CV 8 <button>Ajouter au panier</button>
        </li>
        <li>
          Thème CV 9 <button>Ajouter au panier</button>
        </li>
      </ul>
    </div>
  )
}

export default productsList
