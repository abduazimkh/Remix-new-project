import { LinkBtn } from "~/utils/Utils";
import dogCat from "../../assets/images/dog-cat.jpeg";
import "./Pets.scss";

const Pets = () => {
  return (
    <div className="pets__wrapper">
      <h2>For the health of pets and the happiness of their people.</h2>

      <div className="pats__crads">
        <div className="pats-item">
          <div className="pets__item-box">
            <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_400_752)">
                <path d="M20.56 12.78C24.0891 12.78 26.95 9.9191 26.95 6.39C26.95 2.8609 24.0891 0 20.56 0C17.0309 0 14.17 2.8609 14.17 6.39C14.17 9.9191 17.0309 12.78 20.56 12.78Z" fill="#66CCCC"></path>
                <path d="M34.73 37.33C38.2591 37.33 41.12 34.4691 41.12 30.94C41.12 27.4109 38.2591 24.55 34.73 24.55C31.2009 24.55 28.34 27.4109 28.34 30.94C28.34 34.4691 31.2009 37.33 34.73 37.33Z" fill="#64A096"></path>
                <path d="M6.39 37.33C9.9191 37.33 12.78 34.4691 12.78 30.94C12.78 27.4109 9.9191 24.55 6.39 24.55C2.8609 24.55 0 27.4109 0 30.94C0 34.4691 2.8609 37.33 6.39 37.33Z" fill="#F08246"></path>
                <path d="M20.56 45.51C24.0891 45.51 26.95 42.6491 26.95 39.12C26.95 35.5909 24.0891 32.73 20.56 32.73C17.0309 32.73 14.17 35.5909 14.17 39.12C14.17 42.6491 17.0309 45.51 20.56 45.51Z" fill="#66CCCC"></path>
                <path d="M34.73 20.96C38.2591 20.96 41.12 18.0991 41.12 14.57C41.12 11.0409 38.2591 8.17999 34.73 8.17999C31.2009 8.17999 28.34 11.0409 28.34 14.57C28.34 18.0991 31.2009 20.96 34.73 20.96Z" fill="#F08246"></path>
                <path d="M6.39 20.96C9.9191 20.96 12.78 18.0991 12.78 14.57C12.78 11.0409 9.9191 8.17999 6.39 8.17999C2.8609 8.17999 0 11.0409 0 14.57C0 18.0991 2.8609 20.96 6.39 20.96Z" fill="#64A096"></path>
                <path d="M6.39001 14.57V30.94L20.56 39.12L34.73 30.94V14.57L20.56 6.39001L6.39001 14.57Z" stroke="#1E4646" stroke-width="1.5" stroke-miterlimit="10"></path>
              </g>
              <defs>
                <clipPath id="clip0_400_752">
                  <rect width="41.12" height="45.51" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>

            <h3>Ingredients with Purpose</h3>

            <p>Specially-formulated to get the most out of each active ingredient to keep your pets in peak condition.</p>
          </div>

          <div className="pets__item-box">
            <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_400_752)">
                <path d="M20.56 12.78C24.0891 12.78 26.95 9.9191 26.95 6.39C26.95 2.8609 24.0891 0 20.56 0C17.0309 0 14.17 2.8609 14.17 6.39C14.17 9.9191 17.0309 12.78 20.56 12.78Z" fill="#66CCCC"></path>
                <path d="M34.73 37.33C38.2591 37.33 41.12 34.4691 41.12 30.94C41.12 27.4109 38.2591 24.55 34.73 24.55C31.2009 24.55 28.34 27.4109 28.34 30.94C28.34 34.4691 31.2009 37.33 34.73 37.33Z" fill="#64A096"></path>
                <path d="M6.39 37.33C9.9191 37.33 12.78 34.4691 12.78 30.94C12.78 27.4109 9.9191 24.55 6.39 24.55C2.8609 24.55 0 27.4109 0 30.94C0 34.4691 2.8609 37.33 6.39 37.33Z" fill="#F08246"></path>
                <path d="M20.56 45.51C24.0891 45.51 26.95 42.6491 26.95 39.12C26.95 35.5909 24.0891 32.73 20.56 32.73C17.0309 32.73 14.17 35.5909 14.17 39.12C14.17 42.6491 17.0309 45.51 20.56 45.51Z" fill="#66CCCC"></path>
                <path d="M34.73 20.96C38.2591 20.96 41.12 18.0991 41.12 14.57C41.12 11.0409 38.2591 8.17999 34.73 8.17999C31.2009 8.17999 28.34 11.0409 28.34 14.57C28.34 18.0991 31.2009 20.96 34.73 20.96Z" fill="#F08246"></path>
                <path d="M6.39 20.96C9.9191 20.96 12.78 18.0991 12.78 14.57C12.78 11.0409 9.9191 8.17999 6.39 8.17999C2.8609 8.17999 0 11.0409 0 14.57C0 18.0991 2.8609 20.96 6.39 20.96Z" fill="#64A096"></path>
                <path d="M6.39001 14.57V30.94L20.56 39.12L34.73 30.94V14.57L20.56 6.39001L6.39001 14.57Z" stroke="#1E4646" stroke-width="1.5" stroke-miterlimit="10"></path>
              </g>
              <defs>
                <clipPath id="clip0_400_752">
                  <rect width="41.12" height="45.51" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>

            <h3>Ingredients with Purpose</h3>

            <p>Specially-formulated to get the most out of each active ingredient to keep your pets in peak condition.</p>
          </div>
        </div>
        <div className="pats-item">
          <img src={dogCat} alt="dog cat images" />

          <LinkBtn text="Shop now" link="/" />
        </div>
        <div className="pats-item">
          <div className="pets__item-box">
            <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_400_752)">
                <path d="M20.56 12.78C24.0891 12.78 26.95 9.9191 26.95 6.39C26.95 2.8609 24.0891 0 20.56 0C17.0309 0 14.17 2.8609 14.17 6.39C14.17 9.9191 17.0309 12.78 20.56 12.78Z" fill="#66CCCC"></path>
                <path d="M34.73 37.33C38.2591 37.33 41.12 34.4691 41.12 30.94C41.12 27.4109 38.2591 24.55 34.73 24.55C31.2009 24.55 28.34 27.4109 28.34 30.94C28.34 34.4691 31.2009 37.33 34.73 37.33Z" fill="#64A096"></path>
                <path d="M6.39 37.33C9.9191 37.33 12.78 34.4691 12.78 30.94C12.78 27.4109 9.9191 24.55 6.39 24.55C2.8609 24.55 0 27.4109 0 30.94C0 34.4691 2.8609 37.33 6.39 37.33Z" fill="#F08246"></path>
                <path d="M20.56 45.51C24.0891 45.51 26.95 42.6491 26.95 39.12C26.95 35.5909 24.0891 32.73 20.56 32.73C17.0309 32.73 14.17 35.5909 14.17 39.12C14.17 42.6491 17.0309 45.51 20.56 45.51Z" fill="#66CCCC"></path>
                <path d="M34.73 20.96C38.2591 20.96 41.12 18.0991 41.12 14.57C41.12 11.0409 38.2591 8.17999 34.73 8.17999C31.2009 8.17999 28.34 11.0409 28.34 14.57C28.34 18.0991 31.2009 20.96 34.73 20.96Z" fill="#F08246"></path>
                <path d="M6.39 20.96C9.9191 20.96 12.78 18.0991 12.78 14.57C12.78 11.0409 9.9191 8.17999 6.39 8.17999C2.8609 8.17999 0 11.0409 0 14.57C0 18.0991 2.8609 20.96 6.39 20.96Z" fill="#64A096"></path>
                <path d="M6.39001 14.57V30.94L20.56 39.12L34.73 30.94V14.57L20.56 6.39001L6.39001 14.57Z" stroke="#1E4646" stroke-width="1.5" stroke-miterlimit="10"></path>
              </g>
              <defs>
                <clipPath id="clip0_400_752">
                  <rect width="41.12" height="45.51" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>

            <h3>Ingredients with Purpose</h3>

            <p>Specially-formulated to get the most out of each active ingredient to keep your pets in peak condition.</p>
          </div>

          <div className="pets__item-box">
            <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_400_752)">
                <path d="M20.56 12.78C24.0891 12.78 26.95 9.9191 26.95 6.39C26.95 2.8609 24.0891 0 20.56 0C17.0309 0 14.17 2.8609 14.17 6.39C14.17 9.9191 17.0309 12.78 20.56 12.78Z" fill="#66CCCC"></path>
                <path d="M34.73 37.33C38.2591 37.33 41.12 34.4691 41.12 30.94C41.12 27.4109 38.2591 24.55 34.73 24.55C31.2009 24.55 28.34 27.4109 28.34 30.94C28.34 34.4691 31.2009 37.33 34.73 37.33Z" fill="#64A096"></path>
                <path d="M6.39 37.33C9.9191 37.33 12.78 34.4691 12.78 30.94C12.78 27.4109 9.9191 24.55 6.39 24.55C2.8609 24.55 0 27.4109 0 30.94C0 34.4691 2.8609 37.33 6.39 37.33Z" fill="#F08246"></path>
                <path d="M20.56 45.51C24.0891 45.51 26.95 42.6491 26.95 39.12C26.95 35.5909 24.0891 32.73 20.56 32.73C17.0309 32.73 14.17 35.5909 14.17 39.12C14.17 42.6491 17.0309 45.51 20.56 45.51Z" fill="#66CCCC"></path>
                <path d="M34.73 20.96C38.2591 20.96 41.12 18.0991 41.12 14.57C41.12 11.0409 38.2591 8.17999 34.73 8.17999C31.2009 8.17999 28.34 11.0409 28.34 14.57C28.34 18.0991 31.2009 20.96 34.73 20.96Z" fill="#F08246"></path>
                <path d="M6.39 20.96C9.9191 20.96 12.78 18.0991 12.78 14.57C12.78 11.0409 9.9191 8.17999 6.39 8.17999C2.8609 8.17999 0 11.0409 0 14.57C0 18.0991 2.8609 20.96 6.39 20.96Z" fill="#64A096"></path>
                <path d="M6.39001 14.57V30.94L20.56 39.12L34.73 30.94V14.57L20.56 6.39001L6.39001 14.57Z" stroke="#1E4646" stroke-width="1.5" stroke-miterlimit="10"></path>
              </g>
              <defs>
                <clipPath id="clip0_400_752">
                  <rect width="41.12" height="45.51" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>

            <h3>Ingredients with Purpose</h3>

            <p>Specially-formulated to get the most out of each active ingredient to keep your pets in peak condition.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Pets